import request from '@/utils/request'

// 查询虫卵使用及培养情况列表
export function listClsyjpyqk(query) {
  return request({
    url: '/system/clsyjpyqk/list',
    method: 'get',
    params: query
  })
}

// 查询虫卵使用及培养情况详细
export function getClsyjpyqk(id) {
  return request({
    url: '/system/clsyjpyqk/' + id,
    method: 'get'
  })
}

// 新增虫卵使用及培养情况
export function addClsyjpyqk(data) {
  return request({
    url: '/system/clsyjpyqk',
    method: 'post',
    data: data
  })
}

// 修改虫卵使用及培养情况
export function updateClsyjpyqk(data) {
  return request({
    url: '/system/clsyjpyqk',
    method: 'put',
    data: data
  })
}

// 删除虫卵使用及培养情况
export function delClsyjpyqk(id) {
  return request({
    url: '/system/clsyjpyqk/' + id,
    method: 'delete'
  })
}
