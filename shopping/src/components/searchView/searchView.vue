<template>
    <div class="search-view">
      <div class="search-input-box">
          <search-input v-model="searchText"></search-input>
      </div>
      <div class="search">
        <div class="search-list">
          <div class="search-header">
            <div class="search-title">最近搜索</div>
            <div class="search-icon__">
              <img src="../../../static/images/lajitong-icon.png" />
            </div>
          </div>
          <div class="search-item-box">
            <div class="search-item">牙膏</div>
            <div class="search-item">男生裤子</div>
            <div class="search-item">男生裤子</div>
            <div class="search-item">男生裤子</div>
            <div class="search-item">男生裤子</div>
            <div class="search-item">男生裤子</div>
            <div class="search-item">男生裤子</div>
            <div class="search-item">男生裤子</div>
          </div>
        </div>
        <div class="search-list">
          <div class="search-header">
            <div class="search-title">热门搜索</div>
          </div>
          <div class="search-item-box">
            <div class="search-item">牙膏</div>
            <div class="search-item">男生裤子</div>
            <div class="search-item">男生裤子</div>
            <div class="search-item">男生裤子</div>
            <div class="search-item">男生裤子</div>
            <div class="search-item">男生裤子</div>
            <div class="search-item">男生裤子</div>
            <div class="search-item">男生裤子</div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import searchInput from '../searchInput/searchInput'
  export default {
    name: "searchView",
    data () {
      return {
        searchText : ''
      }
    },
    components : {
      searchInput
    },
    methods : {
      test () {
        console.log(this.searchText)
      }
    }
  };
</script>

<style scoped lang="scss">
  .search{
    padding: 0 20rpx;
    .search-list{
      margin-top: 40rpx;
      .search-header{
        display: flex;
        justify-content: space-between;
        &>.search-title{
          color: #808080;
          font-size: 30rpx;
        }
        &>.search-icon__{
          img {
            width: 45rpx;
            height: 45rpx;
          }
        }
      }
      .search-item-box{
        margin-top: 15rpx;
        &>.search-item {
          display: inline-block;
          padding: 5rpx 20rpx;
          background-color: #f6f5f6;
          color: #808080;
          font-size: 28rpx;
          border-radius: 100px;
          margin: 0 15rpx 15rpx 0;
        }
      }
    }
  }
</style>
