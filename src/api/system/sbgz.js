import request from '@/utils/request'

// 查询设备故障列表
export function listSbgz(query) {
  return request({
    url: '/system/sbgz/list',
    method: 'get',
    params: query
  })
}

// 查询设备故障详细
export function getSbgz(id) {
  return request({
    url: '/system/sbgz/' + id,
    method: 'get'
  })
}

// 新增设备故障
export function addSbgz(data) {
  return request({
    url: '/system/sbgz',
    method: 'post',
    data: data
  })
}

// 修改设备故障
export function updateSbgz(data) {
  return request({
    url: '/system/sbgz',
    method: 'put',
    data: data
  })
}

// 删除设备故障
export function delSbgz(id) {
  return request({
    url: '/system/sbgz/' + id,
    method: 'delete'
  })
}
