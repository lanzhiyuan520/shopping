const sql = require('../public/js/sql')
const config = require('../config/config')
const tools = require('../config/tools')

const methods = {
    searchGoods : async ctx => {
        try {
            let { title,page } = ctx.request.query
            page = !page?1:page
            if (!title) {
                ctx.body = {
                    code : 1,
                    data : [],
                    msg : '请输入搜索关键词'
                }
            }
            let data = await sql(`select id,name,price,img from product where name like '%${title}%' limit ${(page-1)*10},10`)
            for (let i = 0;i < data.length;i++) {
                data[i].img = await tools.imgAddHost(data[i].img)
            }
            ctx.body = {
                code : 0,
                data
            }
        }catch (e) {
            ctx.body = {
                code : 1,
                data : [],
                msg : '搜索失败'
            }
        }

    }
}

module.exports = methods
