import request from '@/utils/request'

// 查询用水量列表
export function listYsl(query) {
  return request({
    url: '/system/ysl/list',
    method: 'get',
    params: query
  })
}

// 查询用水量详细
export function getYsl(id) {
  return request({
    url: '/system/ysl/' + id,
    method: 'get'
  })
}

// 新增用水量
export function addYsl(data) {
  return request({
    url: '/system/ysl',
    method: 'post',
    data: data
  })
}

// 修改用水量
export function updateYsl(data) {
  return request({
    url: '/system/ysl',
    method: 'put',
    data: data
  })
}

// 删除用水量
export function delYsl(id) {
  return request({
    url: '/system/ysl/' + id,
    method: 'delete'
  })
}
