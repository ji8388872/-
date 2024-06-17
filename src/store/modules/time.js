const time = {
  namespaced: true,
  state: {
    yearTime: "",
    monthTime: "",
  },

mutations: {
  SET_YEARTIME: (state, yearTime) => {
    state.yearTime = yearTime;
  },
  SET_MONTHTIME: (state, monthTime) => {
    state.monthTime = monthTime;
  },
},
actions: {
},
getters: {
}
}
export default time;
