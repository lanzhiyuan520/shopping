import request from '../config/request'
import api from '../config/api'
export default {
  AUTHUSERINFO : ({commit},{data,resolve,reject}) => {
    request(`${api.authUserInfo}`,'POST',data).then(res=> {
      console.log(res)
      if (res.data.code === 0) {
        commit('SERUSERINFO',res.data.data)
        wx.showToast({ title: '授权成功'})
        resolve()
      }else {
        wx.showToast({title : '授权失败',icon : 'none'})
        reject()
      }
    })
  }
}
