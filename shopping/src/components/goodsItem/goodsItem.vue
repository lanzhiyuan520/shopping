<template>
    <div class="goods-item">
      <div class="goods-item-img">
        <img src="../../../static/images/test2.webp" />
      </div>
      <div class="goods-item-info">
        <div class="goods-item-title">
          JackJones杰克琼斯秋季男士中长百搭休闲商务风衣外套219121513
        </div>
        <div class="price-of-payment-num">
          <div class="goods-price color-ff5">￥499</div>
          <div class="payment-num">100人付款</div>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    name: "goodsItem"
  };
</script>

<style scoped lang="scss">
  .goods-item{
    width: 49%;
    background-color: #fff;
    border-radius: 12rpx;
    /*box-shadow: 0 0 10rpx 5rpx rgba(0,0,0,.1);*/
    display: inline-block;
    box-sizing: border-box;
    &>.goods-item-img{
      &>img {
        display: block;
        width: 100%;
        height: 350rpx;
      }
    }
    &>.goods-item-info{
      padding: 15rpx 20rpx 20rpx;
      &>.goods-item-title{
        font-size: 28rpx;
      }
      &>.price-of-payment-num{
        margin-top: 8rpx;
        display: flex;
        &>.goods-price{
          font-size: 28rpx;
          line-height: 1;
        }
        &>.payment-num{
          display: inline-flex;
          align-items: flex-end;
          line-height: 1;
          color: #999;
          font-size: 24rpx;
          margin-left: 10rpx;
        }
      }
    }
  }
</style>
