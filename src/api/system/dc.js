import request from '@/utils/request'

// 查询大虫列表
export function listDc(query) {
  return request({
    url: '/system/dc/list',
    method: 'get',
    params: query
  })
}

// 查询大虫详细
export function getDc(id) {
  return request({
    url: '/system/dc/' + id,
    method: 'get'
  })
}

// 新增大虫
export function addDc(data) {
  return request({
    url: '/system/dc',
    method: 'post',
    data: data
  })
}

// 修改大虫
export function updateDc(data) {
  return request({
    url: '/system/dc',
    method: 'put',
    data: data
  })
}

// 删除大虫
export function delDc(id) {
  return request({
    url: '/system/dc/' + id,
    method: 'delete'
  })
}
