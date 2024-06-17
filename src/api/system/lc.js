import request from '@/utils/request'

// 查询老虫列表
export function listLc(query) {
  return request({
    url: '/system/lc/list',
    method: 'get',
    params: query
  })
}

// 查询老虫详细
export function getLc(id) {
  return request({
    url: '/system/lc/' + id,
    method: 'get'
  })
}

// 新增老虫
export function addLc(data) {
  return request({
    url: '/system/lc',
    method: 'post',
    data: data
  })
}

// 修改老虫
export function updateLc(data) {
  return request({
    url: '/system/lc',
    method: 'put',
    data: data
  })
}

// 删除老虫
export function delLc(id) {
  return request({
    url: '/system/lc/' + id,
    method: 'delete'
  })
}
