// 处理漫画数据的  相关接口          （获取数据需要获得相关接口）
import request from '../utils/request'
/**
 * 获取轮播图数据
 * 数据源  https://mhd.zhuishushenqi.com/comic_v2/getproad?apptype=8&appversion=1.0&channel=web-app&adgroupid=123
 */
export const getBanner = () => {
  return request({
    url: '/api/comic_v2/getproad',
    params: { // 参数拼接参数
      apptype: 8,
      appversion: 1.0,
      channel: 'web-app',
      adgroupid: 123
    }
  })
}

/**
 * 获取首页推荐的数据
 * https://mhd.zhuishushenqi.com/comic_v2/customerview?apptype=8&appversion=1.0&channel=web-app&viewtype=1
*/

export const getIndexRecomment = () => {
  return request({
    url: '/api/comic_v2/customerview',
    params: { // 参数拼接参数
      apptype: 8,
      appversion: 1.0,
      channel: 'web-app',
      viewtype: 1
    }
  })
}
