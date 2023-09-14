<template>
  <div class="common-layout">
    <el-container  class="is-vertical">
      <common-header />
      <el-container>
        <common-aside />
        <el-container>
          <el-main>
            <router-view />
          </el-main>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import CommonHeader from '../components/CommonHeader.vue';
import CommonAside from '../components/CommonAside.vue';

export default defineComponent({
    components: {
      CommonHeader,
      CommonAside,
    },
});
</script>

<style lang="less" scoped>
.common-layout{
  height: 100%;
  .el-container{
    height: 100%;
  }
  .el-header{
  width: 100%;
  }
  .el-aside{
    margin-top: 85px;
    height: calc(100vh - 85px);
    width: 230px;
    background-color: #2b2b2b;
  }
  .el-main{
    padding: 85px 0 0 0;
    background-color: #fff;
  }
}


</style>