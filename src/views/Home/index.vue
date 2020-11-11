<template>
  <div class="page-home">
  <index-header></index-header>
    <div class="index-main">
      <Swiper class="my-swiper" v-if="bannerList.length > 0" :autoplay="3000">
          <SwiperItem v-for="item in bannerList" :key="item.id">
            <img :src="item.imageurl" alt />
          </SwiperItem>
        </Swiper>
      <index-nav></index-nav>
      <!-- 生成推荐的漫画数据 -->
       <index-recommend v-for = "item in recommentList" :key = "item.specialid" :info = "item"></index-recommend>
      </div>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from '@/components/Swiper'
import { getBanner, getIndexRecomment } from '@/api/cartoon' // 通过解构解出来函数
import indexHeader from './components/indexHeader'
import indexNav from './components/indexNav'
import indexRecommend from './components/indexRecommend'

export default {
  name: 'Home',
  data () {
    return {
      bannerList: [],
      recommentList: []
    }
  },
  components: {
    Swiper,
    SwiperItem,
    indexHeader,
    indexNav,
    indexRecommend
  },
  methods: {
    changeHandler (payload) {
      console.log('index', payload)
    },
    getBanner () {
      // getBanner().then(res => { console.log(res) })
      // 下载轮播图的数据
      getBanner().then(res => {
        // 漫画岛 的每一个接口 都有 code 的字段
        // 如果字段是 200 的话，这个接口是ok
        if (res.code === 200) {
          this.bannerList = res.info
        } else {
          // 不ok，就在页面上报错
          // 在这里我们先通过 alert 进行报错，后期 我们可以用一下 vant 组件库的组件
          alert(res.code_msg)
        }
      })
        .catch(err => {
          alert('网络异常，请稍后：' + err)
        })
    },
    getIndexRecomment () {
      getIndexRecomment().then(res => {
        if (res.code === 200) {
          this.recommentList = res.info
        } else {
        // 不ok，就在页面上报错
        // 在这里我们先通过 alert 进行报错，后期 我们可以用一下 vant 组件库的组件
          alert(res.code_msg)
        }
      }
      )
        .catch(err => {
          alert('网络异常，请稍后：' + err)
        })
    }

  },
  // mounted(){
  //   console.log(this.$refs.xxx.$el)  //拿到div<Swiper>
  // }
  created () {
    this.getBanner()
    this.getIndexRecomment()
    // 下载数据一般放在这里 使用第三方请求数据方法
    // fetch('https://mhd.zhuishushenqi.com/comic_v2/getproad?apptype=8&appversion=1.0&channel=web-app&adgroupid=123').then(res => res.json()).then(res => { console.log(res) }) // 使.then转换数据
    // 直接请求从是跨域得 https://api.asilu.com/today/
    // fetch('https://api.asilu.com/today/').then(res => res.json()).then(res => {console.log(res)})
    // 依旧node中台 获取数据
    // fetch('http://localhost:9090/migu/today/').then(res => res.json()).then(res => { console.log(res) })
    // vue自己反向代理
    // fetch('http://localhost:8080/migu/today/').then(res => res.json()).then(res => { console.log(res) })
  }
}

</script>

<style lang='scss' scoped>
@import "~@/assets/styles/mixins.scss";
.page-home{
  .index-main {
    flex: 1;
    overflow-y: auto;
  }
  .my-swiper {
    img {
      width: 100%;
    }
  }

  }
</style>
