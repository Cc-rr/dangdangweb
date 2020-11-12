// 处理漫画数据的  相关接口          （获取数据需要获得相关接口）
import request from '../utils/request'
import { format } from '@/utils/apiHelp'
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

/**
 * 获取分类的类型
 * https://mhd.zhuishushenqi.com/comic_v2/getproad?apptype=8&appversion=1.0&channel=web-app&adgroupid=125
*/
export const getTypes = () => {
  return request({
    url: '/api/comic_v2/getproad',
    params: {
      apptype: 8,
      appversion: 1.0,
      channel: 'web-app',
      adgroupid: 125
    }
  })
}
/**
 * 获取分类的类型
 * https://mhd.zhuishushenqi.com/comic_v2/comicsfilterlist_v2?apptype=8&appversion=1.0&channel=web-app
*/
export const getTypesList = (subject, pageno = 1, pagesize = 20) => { // 配置参数设置默认值
  return request({
    url: '/api/comic_v2/comicsfilterlist_v2',
    method: 'POST',
    params: {
      apptype: 8,
      appversion: 1.0,
      channel: 'web-app'
    },
    data: format({ // format参数通过data数据来传值 穿过来的一部分值
      subject,
      pageno,
      pagesize
    })
  })
}
/**
 * 获取排行的数据
 * https://mhd.zhuishushenqi.com/comic_v2/comicsrank?apptype=8&appversion=1.0&channel=web-app
*/
export const getRankList = (ranktype, pageno = 1, pagesize = 20) => { // 配置参数设置默认值
  return request({
    url: '/api/comic_v2/comicsrank',
    method: 'POST',
    params: {
      apptype: 8,
      appversion: 1.0,
      channel: 'web-app'
    },
    data: format({ // format参数通过data数据来传值 穿过来的一部分值
      ranktype,
      pageno,
      pagesize
    })
  })
}
