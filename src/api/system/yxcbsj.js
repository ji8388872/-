import request from '@/utils/request'

// 查询运行成本数据列表
export function listYxcbsj(query) {
  return request({
    url: '/system/yxcbsj/list',
    method: 'get',
    params: query
  })
}

// 查询运行成本数据详细
export function getYxcbsj(id) {
  return request({
    url: '/system/yxcbsj/' + id,
    method: 'get'
  })
}

// 新增运行成本数据
export function addYxcbsj(data) {
  return request({
    url: '/system/yxcbsj',
    method: 'post',
    data: data
  })
}

// 修改运行成本数据
export function updateYxcbsj(data) {
  return request({
    url: '/system/yxcbsj',
    method: 'put',
    data: data
  })
}

// 删除运行成本数据
export function delYxcbsj(id) {
  return request({
    url: '/system/yxcbsj/' + id,
    method: 'delete'
  })
}
