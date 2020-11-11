<template>
<div>
  <div class="header">
      <el-row :gutter="20">
        <el-col :span="8"><a href="mine.html?cpid=0"><div class="grid-content bg-purple user-btn"></div></a></el-col>
        <el-col :span="12"><div class="grid-content bg-purple"><div class="header-logo"></div></div></el-col>
        <el-col :span="2"><div class="grid-content bg-purple"><div class="header-search"></div></div></el-col>
      </el-row>
    </div>
</div>
</template>

<script>
export default {
  name: 'indexHeader'
}
</script>

<style lang="scss" scoped>
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
