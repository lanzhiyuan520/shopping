const isDev = true
const devHost = 'http://localhost:3006/wx'
const prodHost = 'https://lanzhiyuan99.cn/wx'
const host = isDev?devHost:prodHost
const api = {
  getIndexTwocategoryList : `${host}/shoppingTwocategory`,
  getCategory : `${host}/shopping_category`,
  getRecommendList : `${host}/recommendList`
}

export default api
