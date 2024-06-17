import request from '@/utils/request'
export function getRankList() {
  return request({
    url: 'system/copy1/list',
    method: 'get',
    
  })
}
// 修改班级的准确率
export function updateRank(data) {
  return request({
    url: 'system/copy1',
    method: 'put',
    data
  })
}