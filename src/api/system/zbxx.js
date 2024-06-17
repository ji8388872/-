import request from '@/utils/request'

// 查询组别信息列表
export function listZbxx(query) {
  return request({
    url: '/system/zbxx/list',
    method: 'get',
    params: query
  })
}

// 查询组别信息详细
export function getZbxx(id) {
  return request({
    url: '/system/zbxx/' + id,
    method: 'get'
  })
}

// 新增组别信息
export function addZbxx(data) {
  return request({
    url: '/system/zbxx',
    method: 'post',
    data: data
  })
}

// 修改组别信息
export function updateZbxx(data) {
  return request({
    url: '/system/zbxx',
    method: 'put',
    data: data
  })
}

// 删除组别信息
export function delZbxx(id) {
  return request({
    url: '/system/zbxx/' + id,
    method: 'delete'
  })
}
