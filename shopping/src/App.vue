<script>
import api from './config/api'
export default {
  mounted () {
    //获取手机信息
    this.getSystemInfo()
    //调用login
    this.wxLogin()
  },
  methods : {
    getSystemInfo () {
      wx.getSystemInfo({
        success : res => {
          this.$store.commit('SYSTEMINFO',res)
        }
      })
    },
    wxLogin () {
      wx.login({
        success : res => {
          this.$http(`${api.getUserInfo}?code=${res.code}`).then(resData => {
            if (resData.data.code === 0) {
              this.$store.commit('SERUSERINFO',resData.data.data)
            }
          })
        }
      })
    }
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
button {
  background-color: transparent;
}
</style>
