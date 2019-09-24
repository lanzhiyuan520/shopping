export default {
  SYSTEMINFO : (state,data) => {
    state.systemInfo = data
  },
  SETINDEXLISTWIDTH : (state,{width}) => {
    state.listWidth = width
  }
}
