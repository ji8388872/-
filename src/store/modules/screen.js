
import { getCorrectRateApi, getDMSDataApi } from '@/api/screen/operationLog.js'

const state = {
  DMSdata:{},
  // 平均正确率
  averageData:{}

}

const actions = {
  async getDMSDataStore({commit}){
    const res = await getDMSDataApi()
    if (res.code === 200){
      commit('SET_DMSDATE',res.data)
    }
  },
  // 获取平均正确率
  async getAverageDataStore({commit},{correctCount,wrongCount}){
    const res = await getCorrectRateApi(correctCount,wrongCount)
    // console.log(res)
    if (res.code === 200){
      commit('SET_AVERAGEDATA',res.data)
    }
  }
}

const mutations = {
  SET_DMSDATE(state, DMSdata){
    state.DMSdata = DMSdata
  },
  SET_AVERAGEDATA(state, averageData){
    state.averageData = averageData
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
