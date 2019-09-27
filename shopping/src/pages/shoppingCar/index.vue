<template>
    <div class="shopping-car" v-if="userInfo.nick_name">
      <div class="shopping-car-list">
        <shopping-car v-for="(item,index) in 5" :key="index"></shopping-car>
      </div>
    </div>
    <div v-else class="no-login">
      <span>您还未登录哦~</span>
      <button open-type="getUserInfo" @getuserinfo="getUserInfo" class="login-btn">登录</button>
    </div>
</template>

<script>
  import shoppingCar from '../../components/shoopingCar/shoppingCar'
  import { mapState } from 'vuex'
  import tools from '../../utils/index'
  export default {
    name: "index",
    components : {
      shoppingCar
    },
    computed : {
      ...mapState(['userInfo'])
    },
    methods : {
      getUserInfo (e) {
        tools.getUserInfo(e,this).then(res => {})
      }
    }
  };
</script>

<style scoped lang="scss">
  .shopping-car-list {
    padding: 20rpx 20rpx 0;
  }
  .no-login{
    background-color: #fff0c9;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20rpx 0;
    &> span {
      color: #353d44;
      font-size: 26rpx;
      margin-right: 20rpx;
    }
    &> button {
      font-size: 28rpx;
      background-color: #ff6600;
      padding: 10rpx 20rpx;
      color: #fff;
      line-height: 1;
      margin: 0;
    }
  }
</style>
