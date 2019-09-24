const sql = require('../public/js/sql')
const config = require('../config/config')
const tools = require('../config/tools')
const methods = {
    //首页列表
    recommend : async ctx => {
        try {
            let { page } = ctx.request.query
            page = page || 1
            let resData = await sql(`select id,two_category_id,name,shop_id,price,img,all_sell_count from product limit ${(page-1)*10},10`)
            ctx.body = {
                code : 0,
                data : resData
            }
        }catch (e) {
            ctx.body = {
                code : 0,
                data : [],
                msg : '获取失败'
            }
        }
    }
}

module.exports = methods
