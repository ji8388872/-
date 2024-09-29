import request from '@/utils/request'



export function getOperationLogListUp() {
  return request({
    url: '/garbage/v1/hsmc/yyrz/up',
    method: 'get',
  })
}

// 运营日志下部分信息
export function getOperationLogListDown() {
  return request({
    url: '/garbage/v1/hsmc/yyrz/down',
    method: 'get',
  })
}

// 大梅沙大屏
export function  getDMSDataApi() {
  return request({
    url: '/garbage/v1/hsmc/yyrz/ls',
    method: 'get',
  })
}

// 添加临时数据
export function addOperationLogApi(data) {
  return request({
    url: '/garbage/v1/hsmc/yyrz/add',
    method: 'post',
    data
  })
}


// 查询临时表
export function getTemporaryApi() {
  return request({
    url: '/garbage/v1/hsmc/yyrz/select',
    method: 'get',
  })
}

// 正确率
export function getCorrectRateApi(correctCount, wrongCount) {
  return request({
    url: `/garbage/v1/hsmc/yyrz/calculate?correctCount=${correctCount}&wrongCount=${wrongCount}`,
    method: 'post',
  })
}
