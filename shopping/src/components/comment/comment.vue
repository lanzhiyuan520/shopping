<template>
    <div class="user-comment">
      <div class="user-info">
        <div class="user-head-img">
          <img src="https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJWFdKjyLOXtDAj0teMnhJng4jibLia8z3fDVhic7WlLpUvDTgTWmugcdaJB4LDfp9mY8ZB7wu5y3oNw/132" />
        </div>
        <div class="user-name">兰志远</div>
        <div class="comment-time">2019-10-20</div>
      </div>
      <div class="comment-content">
        外形外观：很好啊屏幕音效：很好待机时间：很好其他特色：喜欢运行速度：不错
      </div>
      <div class="goods-attr" v-if="isShowAttr">
        <span>颜色：白色</span>
        <span>型号：128GB</span>
      </div>
    </div>
</template>

<script>
    export default {
      name: "comment",
      props : {
        headImg : String,
        userName : String,
        commentTime : String,
        commentContent: String,
        isShowAttr : {
          type : Boolean,
          default : false
        },
        goodsAttr : {
          type : Array,
          default: []
        }
      }
    }
</script>

<style scoped lang="scss">
  .user-comment{
    margin-top: 20rpx;
    &>.user-info{
      position: relative;
      display: flex;
      align-items: center;
      &>.user-head-img{
        img {
          width: 50rpx;
          height: 50rpx;
          border-radius: 50%;
        }
      }
      &>.user-name{
        color: #333;
        font-size: 30rpx;
        margin-left: 20rpx;
      }
      &>.comment-time{
        position: absolute;
        right: 20rpx;
        color: #999;
        font-size: 28rpx;
      }
    }
    &>.comment-content{
      color: #333;
      font-size: 32rpx;
      margin: 10rpx 0;
    }
    &>.goods-attr{
      color: #999;
      font-size: 28rpx;
    }
  }
</style>
