import request from '@/utils/request'

// 查询除臭情况列表
export function listCcqk(query) {
  return request({
    url: '/system/ccqk/list',
    method: 'get',
    params: query
  })
}

// 查询除臭情况详细
export function getCcqk(id) {
  return request({
    url: '/system/ccqk/' + id,
    method: 'get'
  })
}

// 新增除臭情况
export function addCcqk(data) {
  return request({
    url: '/system/ccqk',
    method: 'post',
    data: data
  })
}

// 修改除臭情况
export function updateCcqk(data) {
  return request({
    url: '/system/ccqk',
    method: 'put',
    data: data
  })
}

// 删除除臭情况
export function delCcqk(id) {
  return request({
    url: '/system/ccqk/' + id,
    method: 'delete'
  })
}
