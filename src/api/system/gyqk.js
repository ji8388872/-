import request from '@/utils/request'

// 查询工艺情况列表
export function listGyqk(query) {
  return request({
    url: '/system/gyqk/list',
    method: 'get',
    params: query
  })
}

// 查询工艺情况详细
export function getGyqk(id) {
  return request({
    url: '/system/gyqk/' + id,
    method: 'get'
  })
}

// 新增工艺情况
export function addGyqk(data) {
  return request({
    url: '/system/gyqk',
    method: 'post',
    data: data
  })
}

// 修改工艺情况
export function updateGyqk(data) {
  return request({
    url: '/system/gyqk',
    method: 'put',
    data: data
  })
}

// 删除工艺情况
export function delGyqk(id) {
  return request({
    url: '/system/gyqk/' + id,
    method: 'delete'
  })
}
