<template>
  <div class="page-classify">
    <normal-header title = '分类'></normal-header>
    <div class="classify-main">
      <header-type :types = "types" @click = "onChange"></header-type>
      <!-- 这里的types是个数组 -->
      <cartoon-list :list = "list"></cartoon-list>
      <!-- 下载数据 -->
    </div>
  </div>
</template>

<script>

import NormalHeader from '@/components/NormalHeader'
import HeaderType from '@/components/HeaderType'
import CartoonList from '@/components/CartoonList'
import { getTypes, getTypesList } from '@/api/cartoon'
import { unformat } from '@/utils/apiHelp'

export default {
  name: 'Classify',
  components: {
    NormalHeader,
    HeaderType,
    CartoonList

  },
  data () {
    return {
      types: [], // 被绑定的值
      cartoonList: []
    }
  },
  computed: {
    list () {
      return this.cartoonList.map(item => { // 也是一个重点
        return {
          id: item.bigbook_id,
          name: item.bigbook_name,
          author: item.bigbook_author,
          coverurl: item.bigcoverurl,
          view: item.bigbookview
        }
      })
    }
  },
  methods: {
    onChange (payload) {
      console.log(payload) // 要去看看   把数据传递过来 "onChange"传过来就是payload  自定义直接传对象  导航的数据
      this.getTypesList(payload.data.targetargument)
    },
    getTypes () {
      return getTypes().then(res => { // 这里我们需要把下载的数据返回过来才能拿到数据
        if (res.code === 200) {
          // console.log(res.info)
          this.types = res.info
        } else {
          alert(res.code_msg)
        }
      }).catch(err => {
        console.log(err)
        alert('网络异常，请稍后重试')
      })
    }, // 先使用异步加载先全部下载数据再切换
    getTypesList (subject) {
      getTypesList(subject).then(res => {
        if (res.code === 200) {
          console.log(JSON.parse(unformat(res.info)).comicsList)
          this.cartoonList = JSON.parse(unformat(res.info)).comicsList
        } else {
          console.log(res.code_msg)
        }
      }).catch(err => {
        console.log(err)
        alert('网络异常，请稍后重试')
      })
    }
  },
  async created () {
    await this.getTypes()
    this.getTypesList(this.types[0].targetargument) // 里面的参数就是subject
  }
}
</script>

<style lang="scss" scoped>
.page-classify {
  display: flex;
  flex-direction: column;
  height: 100%;

  .classify-main {
    flex: 1;
    overflow-y: auto;
  }
}
</style>
