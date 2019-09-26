<template>
  <div class="Index">
    <div class="index" v-if="!isShowSearch">
      <div class="header">
        <div class="header-wrap">
          <header-box @handclick="showSearchView"></header-box>
        </div>
      </div>
      <div class="goods_category">
        <product-category :list="this.twoCateGory"></product-category>
      </div>
      <div class="goods_list">
        <goods-item
          @handClick="handClick"
          v-for="(item,index) in goodsList"
          :key="index"
          :id="item.id"
          :shop-id="item.shop_id"
          :two-category-id="item.two_category_id"
          :title="item.name"
          :goods-img="item.img"
          :price="item.price"
          :sell-count="item.all_sell_count"
        ></goods-item>
      </div>
    </div>
    <div v-else class="search-box">
      <search-view></search-view>
    </div>
  </div>
</template>

<script>

import headerBox from '../../components/headerBox/headerBox'
import productCategory from '../../components/productCategory/productCategory'
import goodsItem from '../../components/goodsItem/goodsItem'
import searchView from '../../components/searchView/searchView'
import api from '../../config/api'
export default {
  data () {
    return {
      isShowSearch : false,
      twoCateGory : [],
      goodsList : [],
      page : 1
    }
  },
  components : {
    headerBox,
    productCategory,
    goodsItem,
    searchView
  },
  mounted () {
    this.initEvent()
    this.getIndexData()
  },
  methods: {
    //获取分类
    getIndexTwocategoryList () {
      return new Promise((resolve, reject)=>{
        this.$http(api.getIndexTwocategoryList).then(res=>{
          if (res.data.code === 0) {
            this.twoCateGory = res.data.data
            this.$bus.$emit('initWidth')
            resolve()
          }
        }).catch(() => {
          reject()
        })
      })
    },
    //获取首页列表
    getIndexGoodsList () {
      return new Promise((resolve, reject) => {
        this.$http(`${api.getRecommendList}?page=${this.page}`).then(res=>{
          console.log(res)
          if (res.data.code === 0) {
            this.goodsList = res.data.data
            resolve()
          }
        }).catch(() => {
          reject()
        })
      })

    },
    getIndexData () {
      wx.showLoading()
      Promise.all([this.getIndexTwocategoryList(),this.getIndexGoodsList()]).then(() => {
        wx.hideLoading()
        wx.stopPullDownRefresh()
      }).catch(() => {
        wx.hideLoading()
        wx.stopPullDownRefresh()
      })
    },
    initEvent () {
      this.$bus.$on('hideSearchView' , () => {
        this.isShowSearch = false
      })
    },
    showSearchView () {
      this.isShowSearch = true
    },
    handClick (e) {
      this.$router.push({
        path : '/pages/goodsDetail/main',
        query : {
          ...e
        }
      })
    },
    //下拉刷新
    onPullDownRefresh () {
      this.getIndexData()
    }
  }
}
</script>

<style lang="scss">
  .Index { height: 100%;}
  .header{
    height: 80rpx;
    .header-wrap{
      width: 100%;
      position: fixed;
      top: 0;
      z-index: 2;
    }
  }

  .goods_category{
    padding: 0 20rpx;
    margin-top: 20rpx;
  }
  .goods_list{
    padding: 0 20rpx;
    margin-top: 20rpx;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .goods-item{
      margin-top: 16rpx;
    }
  }
  .search-box{
    height: 100%;
    background-color: #fff;
  }
</style>
