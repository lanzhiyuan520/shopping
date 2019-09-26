export default {
  SYSTEMINFO : (state,data) => {
    state.systemInfo = data
  },
  SETINDEXLISTWIDTH : (state,{width}) => {
    state.listWidth = width
  },
  SERUSERINFO : (state,data) => {
    console.log(data)
    state.userInfo = data
  }
}
