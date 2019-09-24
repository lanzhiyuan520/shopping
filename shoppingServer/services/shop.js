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
    }
}

module.exports = methods
