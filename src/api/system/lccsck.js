import request from '@/utils/request'

// 查询老虫、虫沙出库列表
export function listLccsck(query) {
  return request({
    url: '/system/lccsck/list',
    method: 'get',
    params: query
  })
}

// 查询老虫、虫沙出库详细
export function getLccsck(id) {
  return request({
    url: '/system/lccsck/' + id,
    method: 'get'
  })
}

// 新增老虫、虫沙出库
export function addLccsck(data) {
  return request({
    url: '/system/lccsck',
    method: 'post',
    data: data
  })
}

// 修改老虫、虫沙出库
export function updateLccsck(data) {
  return request({
    url: '/system/lccsck',
    method: 'put',
    data: data
  })
}

// 删除老虫、虫沙出库
export function delLccsck(id) {
  return request({
    url: '/system/lccsck/' + id,
    method: 'delete'
  })
}
