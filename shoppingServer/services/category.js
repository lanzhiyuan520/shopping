const sql = require('../public/js/sql')
const methods = {
    getCategoryList : async ctx => {
        let categoryData = await sql(`select * from category`)
        for (let i = 0; i<categoryData.length; i++) {
            categoryData[i].children = await sql(`select * from two_category t where ${categoryData[i].id}= t.category_id`)
        }
        ctx.body = {
            code : 0,
            categoryData
        }
    }
}

module.exports = methods
