import request from '@/utils/request'

export const getLoginInfo = (data: any) => {
  return request({
    method: 'POST',
    url: '/user/login',
    data
  })
}
export const getMenuList = () => {
  return request({
    method: 'GET',
    url: '/user/getMenuList'
  })
}
