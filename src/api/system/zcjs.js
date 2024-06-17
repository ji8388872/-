import request from '@/utils/request'

// 查询中虫计数列表
export function listZcjs(query) {
  return request({
    url: '/system/zcjs/list',
    method: 'get',
    params: query
  })
}

// 查询中虫计数详细
export function getZcjs(id) {
  return request({
    url: '/system/zcjs/' + id,
    method: 'get'
  })
}

// 新增中虫计数
export function addZcjs(data) {
  return request({
    url: '/system/zcjs',
    method: 'post',
    data: data
  })
}

// 修改中虫计数
export function updateZcjs(data) {
  return request({
    url: '/system/zcjs',
    method: 'put',
    data: data
  })
}

// 删除中虫计数
export function delZcjs(id) {
  return request({
    url: '/system/zcjs/' + id,
    method: 'delete'
  })
}
