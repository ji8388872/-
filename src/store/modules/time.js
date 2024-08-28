const time = {
  namespaced: true,
  state: {
    yearTime: '',  // 当前年份
    monthTime: '', // 当前月份，加1以确保从1开始
    day: ''  // 当前日期
  },

  mutations: {
    SET_YEARTIME: (state, yearTime) => {
      state.yearTime = yearTime;
    },
    SET_MONTHTIME: (state, monthTime) => {
      state.monthTime = monthTime;
    },
    SET_DAY: (state, day) => {
      state.day = day;
    }
  },
  actions: {

  },
  getters: {
  }
}
export default time;