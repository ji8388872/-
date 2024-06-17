import request from '@/utils/request'

// 查询混料记录列表
export function listHljlb(query) {
  return request({
    url: '/system/hljlb/list',
    method: 'get',
    params: query
  })
}

// 查询混料记录详细
export function getHljlb(id) {
  return request({
    url: '/system/hljlb/' + id,
    method: 'get'
  })
}

// 新增混料记录
export function addHljlb(data) {
  return request({
    url: '/system/hljlb',
    method: 'post',
    data: data
  })
}

// 修改混料记录
export function updateHljlb(data) {
  return request({
    url: '/system/hljlb',
    method: 'put',
    data: data
  })
}

// 删除混料记录
export function delHljlb(id) {
  return request({
    url: '/system/hljlb/' + id,
    method: 'delete'
  })
}
