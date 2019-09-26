const sql = require('../public/js/sql')
const config = require('../config/config')
const tools = require('../config/tools')
const redis = require('../public/js/redis_client')
const axios = require('axios')
const methods = {
    getUserInfo : async ctx => {
        let { code } = ctx.request.query
        let access_token = await redis.get('access_token')
        console.log(access_token)
        if (!access_token) {
            let resData = await axios.get(`https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${config.Appid}&secret=${config.AppSecret}`)
            await redis.set('access_token',resData.data.access_token,resData.data.expires_in-100)
        }
        let userOpenid = await axios.get(`https://api.weixin.qq.com/sns/jscode2session?appid=${config.Appid}&secret=${config.AppSecret}&js_code=${code}&grant_type=authorization_code`)
        if (userOpenid.data.errcode) {
            ctx.body = {
                code : 1,
                data : null,
                msg : '获取失败'
            }
        }
        let { openid } = userOpenid.data
        let userSql = `select id,header_img,nick_name,phone from user where openid='${openid}'`
        let userData =  await sql(userSql)
        if (userData.length === 0) {
            let inserInfo = await sql(`insert into user(openid) values('${openid}')`)
            let user = await sql(userSql)
            console.log(inserInfo)
            if (inserInfo.affectedRows > 1) {
                ctx.body = {
                    code : 0,
                    data : user[0]
                }
            } else {
                ctx.body = {
                    code : 1,
                    data : null,
                    msg : '插入失败'
                }
            }
        }else {
            ctx.body = {
                code : 0,
                data : userData[0]
            }
        }
    },
    authUserInfo : async ctx => {
        try {
            let { nickName,avatarUrl,gender,id } = ctx.request.body
            console.log(nickName,avatarUrl,gender)
            let resData = await sql(`update user set nick_name='${nickName}',header_img='${avatarUrl}',gender=${gender}`)
            let userData = await sql(`select id,header_img,nick_name,phone from user where id=${id}`)
            ctx.body = {
                code : 0,
                data : userData[0]
            }
        }catch (e) {
            ctx.body = {
                code : 1,
                data : null,
                msg : '授权失败'
            }
        }
    }
}

module.exports = methods
