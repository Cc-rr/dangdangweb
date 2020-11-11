import axios from 'axios'

const instance = axios.create({

  // options    baseurl方便你后期上线的时候，更改主机名
  // 它可以通过设置一个 `baseURL` 便于为 axios 实例的方法传递相对 URL
  baseurl: 'http://localhost:8080',
  // 设置超时时间
  timeout: 5000

})
// 添加请求拦截器

instance.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

instance.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response.data
  // 返回请求         返回 .data
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error)
})

export default instance
