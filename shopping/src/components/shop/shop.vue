<template>
  <div class="shop">
    <div class="shop-info">
      <div class="shop-img">
        <img :src="'http://localhost:3006'+shopImg" />
      </div>
      <div class="shop-name">{{shopName}}</div>
    </div>
    <div class="shop-count-box">
      <div class="shop-collection">
        <div class="shop-count">{{collectionCount}}</div>
        <div class="shop-text">收藏人数</div>
      </div>
      <div class="shop-all-goods">
        <div class="shop-count">{{allGoodsCount}}</div>
        <div class="shop-text">全部商品</div>
      </div>
    </div>
    <div class="shop-button">
      <block v-if="userInfo.nick_name">
        <button class="collection-shop">收藏店铺</button>
      </block>
      <block v-else>
        <button class="collection-shop" open-type="getUserInfo" @getuserinfo="getUserInfo">收藏店铺</button>
      </block>
      <button class="collection-open">进入店铺</button>
    </div>
  </div>
</template>

<script>
    import { mapState } from 'vuex'
    import tools from '../../utils/index'
    export default {
      name: "shop",
      props : {
        shopImg : String,
        shopName : String,
        collectionCount : {
          type : Number,
          default : 0
        },
        allGoodsCount : {
          type : Number,
          default : 0
        },
      },
      computed : {
        ...mapState(['userInfo'])
      },
      methods : {
        getUserInfo (e) {
          tools.getUserInfo(e,this)
        }
      }
    }
</script>

<style scoped lang="scss">
  .shop{
    &>.shop-info{
      display: flex;
      align-items: center;
      &>.shop-img {
        img {
          width: 60rpx;
          height: 60rpx;
          border-radius: 50%;
        }
      }
      &>.shop-name{
        font-size: 30rpx;
        color: #333;
        margin-left: 20rpx;
      }
    }
    &>.shop-count-box{
      display: flex;
      margin-top: 10rpx;
      &>div{
        width: 50%;
      }
      &>div:first-child {
        border-right: 1px solid #eee;
      }
      &>.shop-collection,&>.shop-all-goods {
        display: flex;
        flex-direction: column;
        align-items: center;
        & div {
          color: #333;
          font-size: 30rpx;
          text-align: center;
        }
        .shop-count{

        }
      }
    }
    &>.shop-button{
      display: flex;
      margin-top: 20rpx;
      &>button {
        width: 48%;
        height: 60rpx;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #fff;
        border-radius: 8rpx;
        border: 1px solid #ccc;
        font-size: 28rpx;
      }
    }
  }
</style>
