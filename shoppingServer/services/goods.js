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
    },
    goodsDetail : async ctx => {
        let { id,shop_id,two_category_id,user_id } = ctx.request.query
        const Sql = `select p.*,group_concat(b.img) banner_list,
        (select count(*) from shop where id=${shop_id}) shop_goods_total, 
        (select count(*) from comments where goods_id=${id}) comments_total
        from product p 
        left join banner b on p.id=b.goods_id 
        where p.id=${id}`
        let resData = await sql(Sql)
        let commentsData = await sql(`select id,content,user_name,avatarurl,goods_id,DATE_FORMAT(create_time,'%Y-%m-%d %H:%i') create_time from comments where goods_id=${id} limit 0,1`)
        let goodsDetailData = await sql(`select img detail_img from product_detail where goods_id=${id} order by num`)
        let goodsKey = await sql(`select id,name from product_attr_key where goods_id=${id}`)
        let shopData = await sql(`select s.id,s.name,s.shop_img,(select count(*) from collection where state=${0}) collectionCount from shop s where s.id=${shop_id}`)
        let collectionState = await sql(`select state collectionState from collection where user_id=${user_id} and shop_id=${shop_id}`)
        if (collectionState.length !== 0) {
            shopData[0].collectionState = collectionState[0].collectionState
        } else {
            shopData[0].collectionState = 1
        }
        for (let i =0; i < goodsKey.length;i++) {
            goodsKey[i].data = await sql(`select id attr_id,attr_name from goods_attr where attr_name_id=${goodsKey[i].id}`)
            for (let j = 0;j < goodsKey[i].data.length;j++) {
                goodsKey[i].data[j].id = goodsKey[i].data[j].attr_id
            }
        }
        console.log(goodsKey)
        let data = {
            comments : commentsData[0],
            goodsDetailData,
            banner_list:resData[0].banner_list.split(','),
            attrData : goodsKey,
            shopData : shopData[0]
        }
        let resouceData = Object.assign({},resData[0],data)
        ctx.body = {
            code : 0,
            data : resouceData
        }

    }
}

module.exports = methods

let data = [
    {
        name : '颜色',
        data : [
            {
                color : '黑色'
            },
            {
                color : '白色'
            }
        ]
    },
    {
        name : '版本',
        data : [
            {
                name : 128
            }
        ]
    }
]
