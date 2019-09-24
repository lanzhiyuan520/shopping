<template>
    <div
      class="product-category"
    >
      <scroll-view scroll-x class="product-scroll-view">
        <ul class="product-list" :style="{width:listWidth+'px'}">
          <li class="product-item" v-for="(item,index) in list" :key="index">
            <img :src="item.img" />
            <p class="product-title">{{item.name}}</p>
          </li>
        </ul>
      </scroll-view>
    </div>
</template>

<script>
  import config from '../../config/config'
  import {mapState} from 'vuex'
  export default {
    name: "productCategory",
    props : {
      list : Array,
      default : []
    },
    data () {
      return {
        itemWidth : null
      }
    },
    computed : {
      ...mapState(['listWidth'])
    },
    created () {
      this.$bus.$on('initWidth',this.initWidth)
    },
    mounted () {

    },
    methods : {
      initWidth () {
        let that = this
        let systemInfo = this.$store.state.systemInfo
        setTimeout(()=>{
          const query = wx.createSelectorQuery()
          query.select('.product-item').boundingClientRect()
          query.selectViewport().scrollOffset()
          query.exec(function (res) {
            let addWidth,listWidth,length;
            that.itemWidth = res[0].width
            length = that.list.length
            if (systemInfo.screenWidth >= 768 && systemInfo.screenWidth < 1024 ) {
              addWidth = 8
            }else if (systemInfo.screenWidth >= 1024) {
              addWidth = 12
            } else {
              addWidth = 4
            }
            listWidth = (length * (that.itemWidth+addWidth))/2
            that.$store.commit('SETINDEXLISTWIDTH',{width:listWidth})
          })
        },100)
      },
    }
  };
</script>

<style scoped lang="scss">
  .product-category{
    background-color: #fff;
    border-radius: 12rpx;
    &>.product-scroll-view{
      width: 100%;
      .product-list{
        /*width: 200%;*/
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
            text-align: center;
          }
        }
      }
    }
  }
</style>
