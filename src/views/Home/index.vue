<template>
  <div>
    <div class="header">
      <el-row :gutter="20">
        <el-col :span="8"><a href="mine.html?cpid=0"><div class="grid-content bg-purple user-btn"></div></a></el-col>
        <el-col :span="12"><div class="grid-content bg-purple"><div class="header-logo"></div></div></el-col>
        <el-col :span="2"><div class="grid-content bg-purple"><div class="header-search"></div></div></el-col>
      </el-row>
    </div>
    <Swiper :autoplay="2000" :loop="true" @change="changeHandler" ><!-- 也可以在这自定义组件写 ref ='xxx'   -->
      <SwiperItem>1</SwiperItem>
      <SwiperItem>2</SwiperItem>
      <SwiperItem>3</SwiperItem>
    </Swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from '@/components/Swiper'
export default {
  name: 'Home',
  components: {
    Swiper,
    SwiperItem
  },
  methods: {
    changeHandler (payload) {
      console.log('index', payload)
    }
  },
  // mounted(){
  //   console.log(this.$refs.xxx.$el)  //拿到div<Swiper>
  // }
  created () {
    // 下载数据一般放在这里 使用第三方请求数据方法
    fetch('https://mhd.zhuishushenqi.com/comic_v2/getproad?apptype=8&appversion=1.0&channel=web-app&adgroupid=123').then(res => res.json()).then(res => { console.log(res) }) // 使.then转换数据
  }
}

</script>

<style lang='scss' scoped>
@import "~@/assets/styles/mixins.scss";
  .header{
    max-width: 540PX;
    height: 100%;
    margin: 0 auto;
    // border: 1px solid red;
    padding-left: 20px;
    @include border-bottom;
  .user-btn{
      width: 25px;
      height: 25px;
      background: url(~@/assets/icon/user-btn.png);
      background-size: 100%;
    }
  .header-logo{
    width: 92px;
    height: 28px;
    background: url( ~@/assets/logo.png) no-repeat;
    background-size: 100%;
  }
  .header-search{
      width: 25px;
      height: 25px;
      background: url(~@/assets/icon/header-search.png);
      background-size: 100%;
    }
  }
</style>
