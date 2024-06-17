import request from '@/utils/request'

// 查询检测数据列表
export function listJcsj(query) {
  return request({
    url: '/system/jcsj/list',
    method: 'get',
    params: query
  })
}

// 查询检测数据详细
export function getJcsj(id) {
  return request({
    url: '/system/jcsj/' + id,
    method: 'get'
  })
}

// 新增检测数据
export function addJcsj(data) {
  return request({
    url: '/system/jcsj',
    method: 'post',
    data: data
  })
}

// 修改检测数据
export function updateJcsj(data) {
  return request({
    url: '/system/jcsj',
    method: 'put',
    data: data
  })
}

// 删除检测数据
export function delJcsj(id) {
  return request({
    url: '/system/jcsj/' + id,
    method: 'delete'
  })
}
