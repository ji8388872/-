import request from '@/utils/request'

// 查询用电量列表
export function listYdl(query) {
  return request({
    url: '/system/ydl/list',
    method: 'get',
    params: query
  })
}

// 查询用电量详细
export function getYdl(id) {
  return request({
    url: '/system/ydl/' + id,
    method: 'get'
  })
}

// 新增用电量
export function addYdl(data) {
  return request({
    url: '/system/ydl',
    method: 'post',
    data: data
  })
}

// 修改用电量
export function updateYdl(data) {
  return request({
    url: '/system/ydl',
    method: 'put',
    data: data
  })
}

// 删除用电量
export function delYdl(id) {
  return request({
    url: '/system/ydl/' + id,
    method: 'delete'
  })
}
