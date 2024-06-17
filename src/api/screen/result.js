import request from '@/utils/request'
export function getResultList() {
  return request({
    url: 'system/zql/list',
    method: 'get',
    
  })
}