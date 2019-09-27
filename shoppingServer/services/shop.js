const sql = require('../public/js/sql')
const config = require('../config/config')
const tools = require('../config/tools')

const methods = {
    getAllShop : async ctx => {
        try {
            let data = await sql(`select id,name,shop_img from shop`)
            for (let i = 0; i < data.length; i++) {
                data[i].shop_img = await tools.imgAddHost(data[i].shop_img)
            }
            ctx.body = {
                code : 0,
                data
            }
        }catch (e) {
            ctx.body = {
                code : 1,
                data,
                msg : '获取失败'
            }
        }
    },
    collection : async ctx => {
        //type 0:收藏 1:取消收藏
        try {
            let { user_id,shop_id,type } = ctx.request.body
            console.log(user_id,shop_id,type)
            let collectionState = await sql(`select count(*) count from collection where user_id=${user_id} and shop_id=${shop_id}`)
            if (collectionState[0].count > 0) {
                let update = await sql(`update collection set state=${type} where user_id=${user_id} and shop_id=${shop_id}`)
                if (update.affectedRows >= 1) {
                    ctx.body = {
                        code : 0,
                        data : true
                    }
                } else {
                    ctx.body = {
                        code : 1,
                        data : false,
                        msg : '修改失败'
                    }
                }
            } else {
                let insert = await sql(`insert into collection(user_id,shop_id,state) values(${user_id},${shop_id},${type})`)
                if (insert.affectedRows >= 1) {
                    ctx.body = {
                        code : 0,
                        data : true
                    }
                }
            }
        }catch (e) {
            ctx.body = {
                code : 1,
                data : false,
                msg : '修改失败'
            }
        }
    }
}

module.exports = methods
