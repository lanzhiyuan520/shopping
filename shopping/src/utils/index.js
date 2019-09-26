const getUserInfo = (e,that,id) => {
  if (e.mp.detail.errMsg === "getUserInfo:ok") {
    let userInfo = that.$store.state.userInfo
    let data = e.mp.detail.userInfo
    console.log(id)
    data.id = userInfo.id
    that.$store.dispatch('AUTHUSERINFO',data)
  } else {
    wx.showToast({title : '请允许授权',icon : 'none'})
  }
}

export default {
  getUserInfo
}
