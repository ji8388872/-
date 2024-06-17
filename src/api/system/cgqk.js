import request from '@/utils/request'

// 查询参观情况列表
export function listCgqk(query) {
  return request({
    url: '/system/cgqk/list',
    method: 'get',
    params: query
  })
}

// 查询参观情况详细
export function getCgqk(id) {
  return request({
    url: '/system/cgqk/' + id,
    method: 'get'
  })
}

// 新增参观情况
export function addCgqk(data) {
  return request({
    url: '/system/cgqk',
    method: 'post',
    data: data
  })
}

// 修改参观情况
export function updateCgqk(data) {
  return request({
    url: '/system/cgqk',
    method: 'put',
    data: data
  })
}

// 删除参观情况
export function delCgqk(id) {
  return request({
    url: '/system/cgqk/' + id,
    method: 'delete'
  })
}
