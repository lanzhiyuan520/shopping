<template>
    <div>
      <div class="goods-swiper">
        <swiper class="goods-swiper-list" :style="{height : '600rpx'}" indicator-dots	circular>
          <swiper-item>
            <img src="../../../static/images/banner1.jpg" class="banner"/>
          </swiper-item>
          <swiper-item>
            <img src="../../../static/images/banner2.jpg" class="banner"/>
          </swiper-item>
          <swiper-item>
            <img src="../../../static/images/banner3.jpg" class="banner"/>
          </swiper-item>
          <swiper-item>
            <img src="../../../static/images/banner4.jpg" class="banner"/>
          </swiper-item>
        </swiper>
      </div>
      <div class="goods-info-wrap">
        <div class="goods-price">
          <span>￥</span>
          <span>5999</span>
        </div>
        <div class="goods-title">【新品开抢】苹果(Apple) iPhone 11 128GB 白色 移动联通电信4G全网通手机 双卡双待</div>
        <div class="goods-sell-count">
          月售量100件
        </div>
      </div>
      <div class="select-goods-wrap">
        <div class="select-goods-title">已选</div>
        <div class="select-goods__"> 黑色/深空灰 11 Pro Max 512GB</div>
        <div class="arrow-icon">
          <img src="../../../static/images/arrow.png" />
        </div>
      </div>
      <div class="goods-comments-box">
        <div class="goods-title-box">
          <div class="all-comments-count">宝贝评价(2222)</div>
          <div class="comments-arrow">
            <span>查看全部</span>
            <img src="../../../static/images/arrow.png" />
          </div>
        </div>
        <div class="comments">
          <comment></comment>
        </div>
      </div>
      <div class="goods-shop-box">
        <shop></shop>
      </div>
    </div>
</template>

<script>
    import comment from '../../components/comment/comment'
    import shop from '../../components/shop/shop'
    export default {
      name: "index",
      data () {
        return {
          swiperHeight : 0
        }
      },
      components : {
        comment,shop
      },
      created () {

      },
      methods : {

      }
    }
</script>

<style scoped lang="scss">
  .goods-shop-box{
    padding: 20rpx 30rpx;
    margin-top: 20rpx;
    background-color: #fff;
  }
  .goods-comments-box{
    padding: 20rpx 30rpx;
    margin-top: 20rpx;
    background-color: #fff;
    .goods-title-box{
      display: flex;
      justify-content: space-between;
      .all-comments-count{
        color: #333;
        font-size: 32rpx;
      }
      .comments-arrow {
        display: flex;
        align-items: center;
        span {
          color: #333;
          font-size: 30rpx;
        }
        img {
          margin-left: 20rpx;
          width: 30rpx;
          height: 30rpx;
        }
      }
    }
  }
  .select-goods-wrap{
    position: relative;
    padding: 20rpx 30rpx;
    margin-top: 20rpx;
    background-color: #fff;
    display: flex;
    align-items: center;
    .select-goods-title{
      color: #999;
      font-size: 30rpx;
    }
    .select-goods__{
      color: #222;
      font-size: 32rpx;
      margin-left: 20rpx;
    }
    .arrow-icon {
      position: absolute;
      right: 30rpx;
      img {
        width: 30rpx;
        height: 30rpx;
      }
    }
  }
  .goods-info-wrap{
    padding: 0 30rpx 20rpx;
    background-color: #fff;
    .goods-price{
      padding: 10rpx 0;
      span{
        color: #e31436;
        font-size: 48rpx;
      }
    }
    .goods-title{
      font-size: 38rpx;
      color: #333;
      font-weight: 500;
      line-height: 1.2;
    }
    .goods-sell-count{
      font-size: 26rpx;
      color: #999;
      padding: 10rpx 0;
    }
  }
  .goods-swiper-list{
    width: 100%;
    img{
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
</style>
