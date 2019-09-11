<template>
    <div
      class="search-input"

    >
      <div class="search-input-wrap">
        <img src="../../../static/images/search2.png" class="search-icon"/>
        <input type="text" placeholder="请输入搜索内容" @input="Change" placeholder-style="font-size:26rpx" />
      </div>
      <div class="cancel-btn" @click="hideSearchView">取消</div>
    </div>
</template>

<script>
  export default {
    name: "searchInput",
    methods : {
      Change (e) {
        this.$emit('input',e.mp.detail.value)
      },
      hideSearchView () {
        this.$bus.$emit('hideSearchView')
      }
    }
  };
</script>

<style scoped lang="scss">
  .search-input{
    box-sizing: border-box;
    width: 100%;
    padding: 0 20rpx;
    display: flex;
    &>.search-input-wrap{
      width: 85%;
      position: relative;
      display: flex;
      align-items: center;
      &>.search-icon{
        position: absolute;
        width: 30rpx;
        height: 30rpx;
        left: 20rpx;
      }
      &>input{
        padding-left: 60rpx;
        width: 100%;
        height: 60rpx;
        border: 1px solid #dddddd;
        border-radius: 100px;
        color: #666;
      }
    }
    &>.cancel-btn{
      color: #808080;
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
</style>
