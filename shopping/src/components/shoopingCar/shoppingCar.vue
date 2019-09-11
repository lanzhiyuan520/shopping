<template>
    <div class="shop-car">
      <div class="shop-title-box">
        <div class="shop-title">阿迪达斯</div>
        <img src="../../../static/images/arrow.png" class="arrow"/>
      </div>
      <div class="goods-info">
        <div class="goods-img">
          <img src="../../../static/images/test2.webp" />
        </div>
        <div class="goods-data">
          <div class="goods-name">裤子裤裤子裤子裤子裤子裤子裤子裤子裤子裤子裤子裤子裤子裤子裤子子</div>
          <div class="goods-attr">
            <span>产品规格：</span>
            <span>黑色</span>
            <span>s</span>
          </div>
          <div class="goods-price color-ff5">￥499</div>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    name: "shoppingCar"
  };
</script>

<style scoped lang="scss">
  .shop-car{
    background-color: #fff;
    border-radius: 12rpx;
    padding: 20rpx;
    margin-bottom: 20rpx;
    .shop-title-box{
      display: flex;
      align-items: center;
      .shop-title{
        font-size: 36rpx;
        color: #000;
        font-weight: bold;
        margin-right: 10rpx;
      }
      .arrow {
        width: 24rpx;
        height: 24rpx;
      }
    }
    .goods-info{
      margin-top: 15rpx;
      display: flex;
      .goods-img{
        width: 150rpx;
        &>img {
          width: 100%;
          height: 150rpx;
          border-radius: 8rpx;
        }
      }
      .goods-data{
        display: flex;
        flex: 1;
        flex-direction: column;
        padding: 0 15rpx;
        justify-content: space-between;
        .goods-name{
          font-size: 26rpx;
          color: #666;
        }
        .goods-attr {
          font-size: 26rpx;
          color: #999;
          margin: 5rpx 0;
        }
      }
    }
  }
</style>
