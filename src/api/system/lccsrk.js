import request from '@/utils/request'

// 查询老虫、虫沙入库列表
export function listLccsrk(query) {
  return request({
    url: '/system/lccsrk/list',
    method: 'get',
    params: query
  })
}

// 查询老虫、虫沙入库详细
export function getLccsrk(id) {
  return request({
    url: '/system/lccsrk/' + id,
    method: 'get'
  })
}

// 新增老虫、虫沙入库
export function addLccsrk(data) {
  return request({
    url: '/system/lccsrk',
    method: 'post',
    data: data
  })
}

// 修改老虫、虫沙入库
export function updateLccsrk(data) {
  return request({
    url: '/system/lccsrk',
    method: 'put',
    data: data
  })
}

// 删除老虫、虫沙入库
export function delLccsrk(id) {
  return request({
    url: '/system/lccsrk/' + id,
    method: 'delete'
  })
}
