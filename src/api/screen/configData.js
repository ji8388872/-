import request from '@/utils/request'
// 厨余垃圾处理日志
export function getCyljData() {
  return request({
    url: 'system/cyljzyhclrz/list',
    method: 'get'
  })
}
// 园林垃圾处理日志
export function getGardenList() {
  return request({
    url: 'system/ylljclrz/list',
    method: 'get',
  
  })
}
// 酵素日志
export function getEnzymesList() {
  return request({
    url: 'system/jsrz/list',
    method: 'get',
  
  })
}