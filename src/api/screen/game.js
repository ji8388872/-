import request from '@/utils/request'
export function getGameList() {
  return request({
    url: 'system/choices/list',
    method: 'get',
    
  })
}
export function updateGameList(data) {
  return request({
    url: 'system/copy1',
    method: 'put',
    data
  })
}