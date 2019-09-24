const sql = require('../public/js/sql')
const config = require('../config/config')
const tools = require('../config/tools')
const methods = {
    //分类
    getCategoryList : async ctx => {
        try {
            let categoryData = await sql(`select * from category`)
            for (let i = 0; i<categoryData.length; i++) {
                categoryData[i].children = await sql(`select * from two_category t where ${categoryData[i].id}= t.category_id`)
                for (let j = 0;j < categoryData[i].children.length; j++) {
                    categoryData[i].children[j].img = await tools.imgAddHost(categoryData[i].children[j].img)
                }
            }
            ctx.body = {
                code : 0,
                categoryData
            }
        }catch (e) {
            ctx.body = {
                code : 1,
                data : [],
                msg : '获取失败'
            }
        }
    },
    //二级分类列表
    getTwoCategoryList : async ctx => {
        let data = await sql(`select * from two_category`)
        for (let i = 0; i < data.length; i++) {
            data[i].img = await tools.imgAddHost(data[i].img)
        }
        ctx.body = {
            code : 0,
            data
        }
    }
}

module.exports = methods
