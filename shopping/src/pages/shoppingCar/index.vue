<template>
    <div class="shopping-car">
      <div class="shopping-car-list">
        <shopping-car v-for="(item,index) in 5" :key="index"></shopping-car>
      </div>
    </div>
</template>

<script>
  import shoppingCar from '../../components/shoopingCar/shoppingCar'
  export default {
    name: "index",
    components : {
      shoppingCar
    }
  };
</script>

<style scoped lang="scss">
  .shopping-car-list {
    padding: 20rpx 20rpx 0;
  }
</style>
