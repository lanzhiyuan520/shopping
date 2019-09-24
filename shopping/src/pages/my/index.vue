<template>
    <div>
      <div class="head">
        <div class="userinfo-wrap">
          <div class="user-header-img">
            <img src="../.././../static/images/default-head.jpeg" />
          </div>
          <div class="user-name">兰志远</div>
        </div>
        <div class="user-admin">
          <ul class="admin-list">
            <li>
              <div class="admin-count">0</div>
              <div class="admin-text">收藏</div>
            </li>
            <li>
              <div class="admin-count">0</div>
              <div class="admin-text">关注</div>
            </li>
            <li>
              <div class="admin-count">0</div>
              <div class="admin-text">浏览足迹</div>
            </li>
            <li>
              <div class="admin-count">0</div>
              <div class="admin-text">优惠券</div>
            </li>
          </ul>
        </div>
      </div>
      <div class="my-order">
        <div class="order-admin">
          <div class="my-order-header">
            <div class="my-order-text">我的订单</div>
            <div class="my-all-order">
              <div>全部订单</div>
              <img src="../../../static/images/arrow.png" />
            </div>
          </div>
          <div class="goods-admin">
            <ul class="goods-admin-list">
              <li>
                <img src="../../../static/images/daifukuan-icon.png" />
                <div>代付款</div>
              </li>
              <li>
                <img src="../../../static/images/daifahuo.png" class="fahuo"/>
                <div>代发货</div>
              </li>
              <li>
                <img src="../../../static/images/shouhou-icon.png" />
                <div>代收货</div>
              </li>
              <li>
                <img src="../../../static/images/pingjia-icon.png" />
                <div>待评价</div>
              </li>
              <li>
                <img src="../../../static/images/shouhou-icon.png" />
                <div>退货退款</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    name: "index"
  };
</script>

<style scoped lang="scss">
  .goods-admin{
    margin-top: 20rpx;
    .goods-admin-list{
      display: flex;
      padding-bottom: 20rpx;
      li {
        width: 25%;
        text-align: center;
        img {
          width: 50rpx;
          height: 50rpx;
        }
        div {
          margin-top: 10rpx;
          color: #666;
          text-align: center;
          font-size: 26rpx;
        }
      }
    }
  }
  .my-order{
    padding: 15px;
    .order-admin {
      background-color: #fff;
      border-radius: 12rpx;
    }
    .my-order-header {
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #eee;
      padding: 20rpx;
      .my-order-text{
        font-size: 40rpx;
        font-weight: bold;
      }
      .my-all-order{
        display: flex;
        align-items: center;
        div{
          font-size: 26rpx;
          color:#666;
          margin-right: 10rpx;
        }
        img {
          width: 30rpx;
          height: 30rpx;
        }
      }
    }
  }
  .head{
    background: linear-gradient(to right,#eb3c3c, #ff7459);
    padding: 15px;
  }
  .userinfo-wrap{
    display: flex;
    align-items: center;
    &>.user-header-img {
      img {
        width: 100rpx;
        height: 100rpx;
        border-radius: 50%;
      }
    }
    &>.user-name{
      font-size: 34rpx;
      font-weight: bold;
      margin-left: 30rpx;
      color: #fff;
    }
  }
  .user-admin {
    margin-top: 30rpx;
    .admin-list {
      display: flex;
      li {
        position: relative;
        width: 25%;
        color: #fff;
        &>div{
          text-align: center;
        }
      }
    }
  }
</style>
