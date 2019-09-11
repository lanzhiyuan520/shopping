const router = require('koa-router')()
const category = require('../services/category')
router.get('/shopping_category',category.getCategoryList)

module.exports = router
