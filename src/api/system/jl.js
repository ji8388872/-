import request from '@/utils/request'

// 查询加料列表
export function listJl(query) {
  return request({
    url: '/system/jl/list',
    method: 'get',
    params: query
  })
}

// 查询加料详细
export function getJl(id) {
  return request({
    url: '/system/jl/' + id,
    method: 'get'
  })
}

// 新增加料
export function addJl(data) {
  return request({
    url: '/system/jl',
    method: 'post',
    data: data
  })
}

// 修改加料
export function updateJl(data) {
  return request({
    url: '/system/jl',
    method: 'put',
    data: data
  })
}

// 删除加料
export function delJl(id) {
  return request({
    url: '/system/jl/' + id,
    method: 'delete'
  })
}
