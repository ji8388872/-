import request from '@/utils/request'
export function getOneCharts(data) {
  return request({
    url: '/system/one/screen/v1/cycll/month',
    method: 'get',
    params: data
  })
}
export function getTowData1() {
  return request({
    url: '/system/one/screen/v1/cyljcll/total',
    method: 'get',
  })
}
export function getTowData2() {
  return request({
    url: '/system/one/screen/v1/ljlczl/total',
    method: 'get',
  })
}
export function getTowData3() {
  return request({
    url: '/system/one/screen/v1/ljcszl/total',
    method: 'get',
  })
}
export function getThreeCharts1(data) {
  return request({
    url: '/system/one/screen/v1/lczl/month',
    method: 'get',
    params: data
  })
}
export function getThreeCharts2(data) {
  return request({
    url: '/system/one/screen/v1/cszl/month',
    method: 'get',
    params: data
  })
}