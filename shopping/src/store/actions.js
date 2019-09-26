import request from '../config/request'
import api from '../config/api'
export default {
  AUTHUSERINFO : ({commit},data) => {
    request(`${api.authUserInfo}`,'POST',data).then(res=> {
      console.log(res)
      if (res.data.code === 0) {
        commit('SERUSERINFO',res.data.data)
        wx.showToast({ title: '授权成功'})
      }else {
        wx.showToast({title : '请允许授权',icon : 'none'})
      }
    })
  }
}
