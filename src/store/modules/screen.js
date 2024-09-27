
import {getDMSDataApi} from '@/api/screen/operationLog.js'

const state = {
  DMSdata:{},

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
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
