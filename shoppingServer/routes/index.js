const router = require('koa-router')()
//分类模块
const category = require('../services/category')
//搜索模块
const search = require('../services/search')
//店铺模块
const shop = require('../services/shop')
//商品列表模块
const goods = require('../services/goods')
//用户
const user = require('../services/user')
const axios = require('axios')

var WXBizDataCrypt = require('./jiemi')
router.prefix('/wx')

router.get('/shopping_category',category.getCategoryList)
router.get('/shoppingTwocategory',category.getTwoCategoryList)
router.get('/searchGoods',search.searchGoods)
router.get('/shopList',shop.getAllShop)
router.get('/recommendList',goods.recommend)
router.get('/goods_detail',goods.goodsDetail)
router.get('/get_user_info',user.getUserInfo)
router.post('/authUserInfo',user.authUserInfo)
router.post('/collectionShop',shop.collection)


// router.get('/get_code', async ctx => {
//     let code = ctx.request.query.code
//     let resData = await axios.get(`https://api.weixin.qq.com/sns/jscode2session?appid=wxdf68ac7c2c789a52&secret=2635db05ade4fc37f24cb177ee1a1499&js_code=${code}&grant_type=authorization_code`)
//
//     ctx.body = {
//         data : resData.data
//     }
// })
// router.post('/lan', async ctx => {
//     let body = ctx.request.body
//     console.log(body)
//     var appId = 'wxdf68ac7c2c789a52'
//     var sessionKey = body.sessionKey
//     var encryptedData = body.encryptedData
//     var iv = body.iv
//
//     var pc = new WXBizDataCrypt(appId, sessionKey)
//
//     var data = pc.decryptData(encryptedData , iv)
//
//     console.log('解密后 data: ', data)
//     ctx.body ={
//         data : data
//     }
//
//
// })
module.exports = router
