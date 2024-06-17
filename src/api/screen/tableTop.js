import request from '@/utils/request'
export function getTableTopList() {
  return request({
    url: 'system/dpdyy/list',
    method: 'get',
    
  })
}