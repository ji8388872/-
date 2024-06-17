import request from '@/utils/request'

// 查询虫料分离列表
export function listClfl(query) {
  return request({
    url: '/system/clfl/list',
    method: 'get',
    params: query
  })
}

// 查询虫料分离详细
export function getClfl(id) {
  return request({
    url: '/system/clfl/' + id,
    method: 'get'
  })
}

// 新增虫料分离
export function addClfl(data) {
  return request({
    url: '/system/clfl',
    method: 'post',
    data: data
  })
}

// 修改虫料分离
export function updateClfl(data) {
  return request({
    url: '/system/clfl',
    method: 'put',
    data: data
  })
}

// 删除虫料分离
export function delClfl(id) {
  return request({
    url: '/system/clfl/' + id,
    method: 'delete'
  })
}
