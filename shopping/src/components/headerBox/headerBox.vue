<template>
  <div
    class="header-box"
  >
    <div class="header-search-box" @click="handClick">
      <img src="../../../static/images/search-icon.png" />
      <span class="search-text">哈哈哈</span>
    </div>
    <div class="message">
      <img src="../../../static/images/message_icon.png" />
    </div>
  </div>
</template>

<script>
  export default {
    name: "headerBox",
    props : {
      hotText : String
    },
    methods : {
      handClick () {
        this.$emit('handclick')
      }
    }
  };
</script>

<style scoped lang="scss">
  .header-box{
    box-sizing: border-box;
    background-color: #fff;
    padding: 8rpx 20rpx;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #d3cecf;
    &>.header-search-box{
      width: 85%;
      height: 60rpx;
      border-radius: 100px;
      border: 3rpx solid #e01e3e;
      display: flex;
      align-items: center;
      padding-left: 20rpx;
      &>img {
        width: 40rpx;
        height: 40rpx;
        margin-right: 15rpx;
      }
      &>.search-text{
        color: #666;
        font-size: 30rpx;
      }
    }
    &>.message{
      img {
        width: 60rpx;
        height:60rpx;
      }
    }
  }

</style>
