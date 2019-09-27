const getUserInfo = (e,that) => {
  return new Promise((resolve, reject)=>{
    if (e.mp.detail.errMsg === "getUserInfo:ok") {
      let userInfo = that.$store.state.userInfo
      let data = e.mp.detail.userInfo
      data.id = userInfo.id
      that.$store.dispatch('AUTHUSERINFO',{data,resolve,reject})
    } else {
      wx.showToast({title : '请允许授权',icon : 'none'})
      reject()
    }
  })
}

export default {
  getUserInfo
}
