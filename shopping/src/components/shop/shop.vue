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
        <div class="shop-count">{{collectionNum}}</div>
        <div class="shop-text">收藏人数</div>
      </div>
      <div class="shop-all-goods">
        <div class="shop-count">{{allGoodsCount}}</div>
        <div class="shop-text">全部商品</div>
      </div>
    </div>
    <div class="shop-button">
      <block v-if="userInfo.nick_name">
        <button class="collection-shop" @click="collection">{{collectionStatus==1?'收藏店铺':'取消收藏'}}</button>
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
    import api from '../../config/api'
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
        shopId : {
          type : [String,Number],
          required : true
        },
        collectionState : {
          type : [String,Number],
          default : 1
        }
      },
      data () {
        return {
          collectionStatus : 1,
          collectionNum : 0
        }
      },
      computed : {
        ...mapState(['userInfo'])
      },
      mounted () {
        this.setCollection()
      },
      methods : {
        setCollection () {
          this.collectionStatus = this.collectionState
          this.collectionNum = parseInt(this.collectionCount)
        },
        getUserInfo (e) {
          tools.getUserInfo(e,this)
        },
        //收藏店铺
        collection () {
          let data = {
            user_id : this.userInfo.id,
            shop_id : this.shopId,
            type : this.collectionState==1?0:1
          }
          this.$http(`${api.collectionShop}`,'POST',data).then(res=> {
            console.log(res)
            if (res.data.code === 0) {
              if (this.collectionStatus == 1) {
                this.collectionStatus = 0
                this.collectionNum++
                wx.showToast({
                  title: '收藏成功'
                })
              } else {
                this.collectionStatus = 1
                this.collectionNum--
                wx.showToast({
                  title: '取消成功'
                })
              }
            }else {
              if (this.collectionStatus == 1) {
                wx.showToast({
                  title: '收藏失败',
                  icon : 'none'
                })
              } else {
                wx.showToast({
                  title: '取消失败',
                  icon : 'none'
                })
              }
            }
          })
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
