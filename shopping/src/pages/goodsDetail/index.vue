<template>
    <div :class="[
        {
           'is-scroll' : isShowGoodsDetail
        }
      ]
    ">
      <div class="goods-swiper">
        <swiper class="goods-swiper-list" :style="{height : '600rpx'}" indicator-dots	circular>
          <swiper-item v-for="(banner_item,index) in detailData.banner_list" :key="index">
            <img :src="'http://localhost:3006'+banner_item" class="banner"/>
          </swiper-item>
        </swiper>
      </div>
      <div class="goods-info-wrap">
        <div class="goods-price">
          <span>￥</span>
          <span>{{detailData.price}}</span>
        </div>
        <div class="goods-title">{{detailData.title}}</div>
        <div class="goods-sell-count">
          月售量{{detailData.sell_count}}件
        </div>
      </div>
      <div class="select-goods-wrap" @click="isShowGoodsDetail=true">
        <div class="select-goods-title">已选</div>
        <div class="select-goods__">{{select_text}}</div>
        <div class="arrow-icon">
          <img src="../../../static/images/arrow.png" />
        </div>
      </div>
      <div class="goods-comments-box">
        <div class="goods-title-box">
          <div class="all-comments-count">宝贝评价({{detailData.comments_total}})</div>
          <div class="comments-arrow">
            <span>查看全部</span>
            <img src="../../../static/images/arrow.png" />
          </div>
        </div>
        <div class="comments">
          <comment
            :head-img="detailData.comments.avatarurl"
            :user-name="detailData.comments.user_name"
            :comment-time="detailData.comments.create_time"
            :comment-content="detailData.comments.content"
          ></comment>
        </div>
      </div>
      <div class="goods-shop-box">
        <shop
          :shop-img="detailData.shopData.shop_img"
          :shop-name="detailData.shopData.name"
          :collection-count="detailData.shopData.collection"
          :all-goods-count="detailData.shop_goods_total"
        ></shop>
      </div>
      <div class="goods-detail-img">
        <div v-for="(item,index) in detailData.goodsDetailData" :key="index">
          <img :src="'http://localhost:3006'+item.detail_img" mode="widthFix" />
        </div>
      </div>
      <div class="buy-box" v-if="isShowGoodsDetail">
        <div class="goods-content-box">
          <div class="goods-parameter-head">
            <div class="goods-img-box">
              <img src="../../../static/images/test_goods.jpg" />
            </div>
            <div class="goods-info-box">
              <div class="goods-price-text">￥{{detailData.price}}</div>
              <div class="goods-title-text">{{detailData.title}}</div>
            </div>
            <div class="close-icon" @click="isShowGoodsDetail=false"><img src="../../../static/images/close.png" /></div>
          </div>
          <div class="goods-content">
            <scroll-view scroll-y class="scroll-attr">
              <div class="scroll-content">
                <div class="attr-box">
                  <div class="attr-content" v-for="(item,index) in detailData.attrData" :key="index">
                    <p class="attr-title">选择{{item.name}}</p>
                    <ul class="attr-list">
                      <li class="attr-item"
                          v-for="(attr,attrIndex) in item.data"
                          :key="attrIndex"
                          :class="[
                            {
                              'select-attr': selectAttr[index]['select']===attrIndex
                            }
                          ]"
                          @click="selectAttrEvent(index,attrIndex,attr.attr_name)"
                      >{{attr.attr_name}}</li>
                    </ul>
                  </div>
                </div>
                <div class="select-count-box">
                  <div class="select-count-text">数量</div>
                  <div class="change-count">
                    <div class="reduce-count" @click="changeCount(false)">-</div>
                    <div class="count">{{selectCount}}</div>
                    <div class="add-count" @click="changeCount(true)">+</div>
                  </div>
                </div>
              </div>
            </scroll-view>
          </div>
        </div>
        <div class="button__">
          <block v-if="userInfo.nick_name">
            <button class="add-shop-card-btn" @click="addShopCard">加入购物车</button>
            <button class="buy-btn">立即购买</button>
          </block>
          <block v-else>
            <button class="add-shop-card-btn" open-type="getUserInfo" @getuserinfo="getUserInfo">加入购物车</button>
            <button class="buy-btn" open-type="getUserInfo" @getuserinfo="getUserInfo">立即购买</button>
          </block>
        </div>
      </div>
    </div>
</template>

<script>
    import comment from '../../components/comment/comment'
    import shop from '../../components/shop/shop'
    import api from "../../config/api";
    import {mapState} from 'vuex'
    export default {
      name: "index",
      data () {
        return {
          swiperHeight : 0,
          query : {},
          selectCount : 1,
          isShowGoodsDetail : false,
          detailData : {},
          selectAttr : [],
          select_text : ''
        }
      },
      components : {
        comment,shop
      },
      computed : {
        ...mapState(['userInfo'])
      },
      onLoad (options) {
        this.query = options
        this.getGoodsData()
        console.log(this.userInfo)
      },
      methods : {
        addShopCard () {
          console.log(1111)
        },
        getUserInfo (e) {
          console.log(e)
          if (e.mp.detail.errMsg === "getUserInfo:ok") {
            let data = e.mp.detail.userInfo
            data.id = this.userInfo.id
            this.$store.dispatch('AUTHUSERINFO',data)
          } else {
            wx.showToast({title : '请允许授权',icon : 'none'})
          }

        },
        selectAttrEvent (index,arrtIndex,attr_name) {
          let text = ''
          this.selectAttr[index]['select'] = arrtIndex
          this.selectAttr[index]['name'] = attr_name
          for (let i = 0;i < this.selectAttr.length;i++) {
            if (this.selectAttr[i].name) {
              text += this.selectAttr[i].name + ' '
            }
          }
          this.select_text = text
        },
        changeCount (flag) {
          if (flag) {
            this.selectCount++
          } else {
            if (this.selectCount > 1) {
              this.selectCount--
            }
          }
        },
        getGoodsData () {
          wx.showLoading({title:'加载中'})
          let {id,shop_id,two_category_id} = this.query
          this.$http(`${api.goodsDetail}?id=${id}&shop_id=${shop_id}&two_category_id=${two_category_id}`).then(res=>{
            console.log(res)
            wx.hideLoading()
            if (res.data.code === 0) {
              this.detailData = res.data.data
              for (let i = 0;i < this.detailData.attrData.length;i++){
                this.selectAttr.push({
                  select : null
                })
              }
              console.log(this.selectAttr)
            }
          })
        }
      }
    }
</script>

<style scoped lang="scss">
  .goods-detail-img{
    img {
      width: 100%;
      display: block;
    }
  }
  .is-scroll{
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    overflow-y: hidden;
  }
  .buy-box{
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(0,0,0,.5);
    overflow: hidden;
    &>.goods-content-box{
      position: absolute;
      width: 100%;
      bottom: 0;
      height: 66.66%;
      background-color: #fff;
      display: flex;
      flex-direction: column;
      padding-bottom: 80rpx;
      &>.goods-parameter-head{
        position: relative;
        z-index: 2;
        background-color: #fff;
        padding: 0 30rpx 10rpx;
        border-bottom: 1px solid #ddd;
        display: flex;
        &>.close-icon{
          position: absolute;
          top: -60rpx;
          right: 30rpx;
          img {
            width: 50rpx;
            height: 50rpx;
          }
        }
        &>.goods-img-box {
          width: 200rpx;
          height: 200rpx;
          margin-top: -30rpx;
          border: 1px solid #ddd;
          img {
            width: 200rpx;
            height: 200rpx;
          }
        }
        &>.goods-info-box{
          padding: 0 20rpx;
          display: flex;
          flex: 1;
          flex-direction: column;
          &>div{
            font-size: 28rpx;
          }
          &>.goods-price-text{
            color: #f60;
          }
          &>.goods-title-text{
            color: #333;
          }
        }
      }
      &>.goods-content{
        display: flex;
        flex: 1;
        .scroll-attr{}
        .scroll-content{
          margin-bottom: 100rpx;
          padding: 0 30rpx;
        }
        .attr-box{
          .attr-content{
            margin-top: 20rpx;
            border-bottom: 1px solid #ddd;
            .attr-title{
              font-size: 28rpx;
              color: #333;
            }
            .attr-list{
              display: flex;
              flex-wrap: wrap;
              margin-top: 20rpx;
              .attr-item.select-attr {
                color: #f60;
                border: 1px solid #f60;
                background: #fff2ec;
              }
              .attr-item {
                padding: .5em 1em;
                font-size: 26rpx;
                color: #333;
                border-radius: 12rpx;
                background-color: #f6f6f6;
                margin: 0 20rpx 20rpx 0;
              }
            }
          }
        }
        .select-count-box{
          display: flex;
          justify-content: space-between;
          margin-top: 20rpx;
          .select-count-text {
            font-size: 28rpx;
            color: #333;
          }
          .change-count {
            display: flex;
            border: 1px solid #999;
            border-radius: 5rpx;
            .reduce-count{
              color: #999;
              padding: 0 15rpx;
              border-right: 1px solid #ddd;
            }
            .count {
              padding: 5rpx 20rpx;
            }
            .add-count {
              color: #999;
              padding: 0 15rpx;
              border-left: 1px solid #ddd;
            }
          }
        }
      }
    }
    &>.button__{
      width: 100%;
      position: fixed;
      bottom: 0;
      background-color: #fff;
      z-index: 3;
      display: flex;
      justify-content: space-between;
      height: 70rpx;
      padding-bottom: 10rpx;
      button {
        height: 100%;
        width: 48%;
        font-size: 28rpx;
        color: #fff;
      }
      .add-shop-card-btn{
        border-radius: 9px 2px 2px 9px;
        background: linear-gradient(90deg,#ffd000,#ff9200);
      }
      .buy-btn {
        background: linear-gradient(90deg,#ff8f00,#f50);
        border-radius: 2px 9px 9px 2px;
      }
    }
  }
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
