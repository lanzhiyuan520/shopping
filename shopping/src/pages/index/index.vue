<template>
  <div style="height: 100%">
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
    this.getIndexTwocategoryList()
    this.getIndexGoodsList()
  },
  methods: {
    //获取分类
    getIndexTwocategoryList () {
      this.$http(api.getIndexTwocategoryList).then(res=>{
        if (res.data.code === 0) {
          this.twoCateGory = res.data.data
          this.$bus.$emit('initWidth')
        }
      })
    },
    getIndexGoodsList () {
      this.$http(`${api.getRecommendList}?page=${this.page}`).then(res=>{
        console.log(res)
        if (res.data.code === 0) {
          this.goodsList = res.data.data
        }
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
    handClick () {
      this.$router.push({
        path : '/pages/goodsDetail/main'
      })
    }
  }
}
</script>

<style lang="scss">
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
