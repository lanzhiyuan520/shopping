<script>
export default {
  mounted () {
    wx.getSystemInfo({
      success : res => {
        this.$store.commit('SYSTEMINFO',res)
      }
    })
  }
}
</script>

<style lang="scss">
@import "../static/css/style.scss";

* {
  margin: 0;
  padding: 0;
}
page {
  width: 100%;
  height: 100%;
  background-color: #eee;
}
button::after{
  border:none;
}
</style>
