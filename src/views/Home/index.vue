<template>
  <div class="header">
    <el-row :gutter="20">
      <el-col :span="10"><a href="mine.html?cpid=0"><div class="grid-content bg-purple user-btn"></div></a></el-col>
      <el-col :span="12"><div class="grid-content bg-purple"><div class="header-logo"></div></div></el-col>
      <el-col :span="1"><div class="grid-content bg-purple"><div class="header-search"></div></div></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style lang='scss' scoped>
  .header{
    width: 600px;
    height: 100%;
    margin: 0 auto;
  }
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

</style>
