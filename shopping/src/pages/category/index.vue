<template>
    <div class="category">
      <div class="tab-list-box">
        <scroll-view class="tab-list-scroll-view" scroll-y>
          <ul class="tab-list">
            <li class="tab-item" v-for="(item,index) in 20" :key="index">
              <div
                class="tab-item-title"
                :class="[
                   {
                      'is-selected': index===select_index
                   }
                ]"
              >数码家电</div>
            </li>
          </ul>
        </scroll-view>
      </div>
      <div class="category-list-box">
        <scroll-view scroll-y>
          <ul class="category-list">
            <li class="category-item" v-for="(item,index) in 20" :key="index">
              <img src="../../../static/images/phone.png" />
              <div class="category-name">手机</div>
            </li>
          </ul>
        </scroll-view>
      </div>
    </div>
</template>

<script>
  export default {
    name: "index",
    data () {
      return {
        select_index : 0
      }
    }
  };
</script>

<style lang="scss">
  .category{
    height: 100%;
    background-color: #fff;
    display: flex;
    .tab-list-box {
      width: 25%;
      border-right: 1px solid #dadada;
      &>.tab-list-scroll-view {
        height: 100%;
      }
      .tab-list{
        height: 100%;
        .tab-item{
          box-sizing: border-box;
          padding: 20rpx 15rpx;
          .tab-item-title{
            text-align: center;
            color: #666;
            border-radius: 100px;
          }
          .tab-item-title.is-selected {
            background-color: red;
            color: #fff;
          }
        }
      }
    }
    .category-list-box {
      display: flex;
      flex: 1;
      .category-list{
        box-sizing: border-box;
        padding: 30rpx 20rpx;
        width: 100%;
        .category-item{
          display: inline-flex;
          justify-content: center;
          flex-direction: column;
          align-items: center;
          width: 33.333%;
          margin-bottom: 20rpx;
          &>img {
            width: 120rpx;
            height: 120rpx;
          }
          &>.category-name{
            text-align: center;
            font-size: 28rpx;
            color: #666;
          }
        }
      }
    }
  }
  ::-webkit-scrollbar{
    width: 0;
    height: 0;
    color: transparent;
  }

</style>
