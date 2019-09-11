<template>
    <div
      class="product-category"
    >
      <scroll-view scroll-x class="product-scroll-view">
        <ul class="product-list">
          <li class="product-item" v-for="(item,index) in [1,2,3,4,5,6,7,8,9,1,2,3,4,1]" :key="index">
            <img src="../../../static/images/nanzhuang.webp" />
            <p class="product-title">美妆个护</p>
          </li>
        </ul>
      </scroll-view>
    </div>
</template>

<script>
  export default {
    name: "productCategory"
  };
</script>

<style scoped lang="scss">
  .product-category{
    background-color: #fff;
    border-radius: 12rpx;
    &>.product-scroll-view{
      width: 100%;
      .product-list{
        width: 140%;
        display: flex;
        flex-wrap: wrap;
        .product-item{
          padding: 10px;
          img {
            width: 100rpx;
            height: 100rpx;
            border-radius: 50%;
          }
          .product-title{
              font-size: 24rpx;
          }
        }
      }
    }
  }
</style>
