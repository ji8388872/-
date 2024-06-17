import request from '@/utils/request'

// 查询来料列表
export function listLl(query) {
  return request({
    url: '/system/ll/list',
    method: 'get',
    params: query
  })
}

// 查询来料详细
export function getLl(id) {
  return request({
    url: '/system/ll/' + id,
    method: 'get'
  })
}

// 新增来料
export function addLl(data) {
  return request({
    url: '/system/ll',
    method: 'post',
    data: data
  })
}

// 修改来料
export function updateLl(data) {
  return request({
    url: '/system/ll',
    method: 'put',
    data: data
  })
}

// 删除来料
export function delLl(id) {
  return request({
    url: '/system/ll/' + id,
    method: 'delete'
  })
}
