<template>
  <div style="height: 100%">
    <div class="index" v-if="!isShowSearch">
      <div class="header">
        <div class="header-wrap">
          <header-box @handclick="showSearchView"></header-box>
        </div>
      </div>
      <div class="goods_category">
        <product-category></product-category>
      </div>
      <div class="goods_list">
        <goods-item></goods-item>
        <goods-item></goods-item>
        <goods-item></goods-item>
        <goods-item></goods-item>
        <goods-item></goods-item>
        <goods-item></goods-item>
        <goods-item></goods-item>
        <goods-item></goods-item>
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
export default {
  data () {
    return {
      isShowSearch : false
    }
  },
  components : {
    headerBox,
    productCategory,
    goodsItem,
    searchView
  },
  created () {
    this.$bus.$on('hideSearchView' , () => {
      console.log(1111)
      this.isShowSearch = false
    })
  },
  methods: {
    showSearchView () {
      this.isShowSearch = true
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
