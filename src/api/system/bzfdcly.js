import request from '@/utils/request'

// 查询标准份大虫领用列表
export function listBzfdcly(query) {
  return request({
    url: '/system/bzfdcly/list',
    method: 'get',
    params: query
  })
}

// 查询标准份大虫领用详细
export function getBzfdcly(id) {
  return request({
    url: '/system/bzfdcly/' + id,
    method: 'get'
  })
}

// 新增标准份大虫领用
export function addBzfdcly(data) {
  return request({
    url: '/system/bzfdcly',
    method: 'post',
    data: data
  })
}

// 修改标准份大虫领用
export function updateBzfdcly(data) {
  return request({
    url: '/system/bzfdcly',
    method: 'put',
    data: data
  })
}

// 删除标准份大虫领用
export function delBzfdcly(id) {
  return request({
    url: '/system/bzfdcly/' + id,
    method: 'delete'
  })
}
