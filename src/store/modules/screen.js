
import {getDMSDataApi} from '@/api/screen/operationLog.js'

const state = {
  DMSdata:[],
  totalEat:9.0

}

const actions = {
  async getDMSDataStore({commit}){
    const res = await getDMSDataApi()
    if (res.code === 200){
      commit('SET_DMSDATE',res.data)
    }
  }
}

const mutations = {
  SET_DMSDATE(state, DMSdata){
    state.DMSdata = DMSdata
    state.totalEat += parseFloat((Number(DMSdata.cll) / 1000).toFixed(2))
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
