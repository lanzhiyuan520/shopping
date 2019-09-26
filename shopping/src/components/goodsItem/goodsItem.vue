<template>
    <div class="goods-item" @click="eventsClick">
      <div class="goods-item-img">
        <img :src="'http://localhost:3006'+goodsImg" />
      </div>
      <div class="goods-item-info">
        <div class="goods-item-title">
          {{title}}
        </div>
        <div class="price-of-payment-num">
          <div class="goods-price color-ff5">￥{{price}}</div>
          <div class="payment-num">{{sellCount}}人付款</div>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    name: "goodsItem",
    props : {
      id : {
        type : [String,Number],
        required : true
      },
      shopId : {
        type : [String,Number],
        required : true
      },
      twoCategoryId : {
        type : [String,Number],
        required : true
      },
      title : {
        type : String,
        default : ''
      },
      goodsImg : String,
      price : {
        type : [String,Number],
        default : 0
      },
      sellCount : {
        type : [String,Number],
        default : 0
      }
    },
    methods : {
      eventsClick () {
        this.$emit('handClick',{
          id : this.id,
          shop_id : this.shopId,
          two_category_id: this.twoCategoryId
        })
      }
    }
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
