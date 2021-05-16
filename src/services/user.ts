// import store from '@/store'
import request from '@/utils/request'
import qs from 'qs'
interface User {
  phone: string
  password: string
}

export const login = (data: User) => {
  return request({
    method: 'post',
    url: '/front/user/login',
    // headers: {
    //   'Content-type': 'application/x-www-form-urlencoded'
    // },
    data: qs.stringify(data)
  })
}

export const getUserInfo = () => {
  return request({
    method: 'GET',
    url: '/front/user/getInfo'
    // headers: {
    //   Authorization: store.state.user.access_token
    // }
  })
}
