<template>
    <el-header>
        <div class="left">
            <img src="../assets/images/logo.png" alt="">
            <h5>腾讯视频</h5>
        </div>

        <div class="middle">
            <el-input
              v-model="input"
              placeholder="奔跑吧"
            >
                <template #suffix>
                        <i class="iconfont icon-sousuo"></i>
                </template>
            </el-input>
        </div>

        <div class="right">
            <i class="iconfont icon-VIP" style="color:#ffac3f"></i>
            <i class="iconfont icon-a-tupianyihuifu-20"></i>
            <i class="iconfont icon-lishi"></i>
            <i class="iconfont icon-shipinbofang"></i>
            <i class="iconfont icon-diannao_o"></i>
            <el-dropdown placement="bottom-end" show-arrow="false">
               <span class="el-dropdown-link">
                  <img class="user" src="../assets/images/user.jpg" alt="">
               </span>
               <template #dropdown>
                 <el-dropdown-menu class="userDrop">
                    <div>1111</div>
                 </el-dropdown-menu>
               </template>
            </el-dropdown>
        </div>
    </el-header>
</template>

<script>
import { ref } from 'vue'

export default {

    setup() {
        const input = ref('');
        return {
            input
        }
    },
}
</script>

<style lang="less" scoped>
.el-header{
    display: flex;
    position: fixed;
    top: 0;
    align-items: center;
    padding-left: 30px;
    margin-left: -17px;
    justify-content: space-between;
    height: 85px;
    background-color: #2b2b2b;
    color: #fff;
    z-index: 1000;
    .left{
        width: 200px;
        height: 100%;
        display: flex;
        align-items: center;
        font-style:italic;
        font-size: 20px;
        img{
            width: 30px;
            height: 30px;
        }
    }
    .middle{
        width: 500px;
        .el-input{
            height: 50px;
            --el-input-bg-color: #4a4a4a;
            --el-border-radius-base: 30px;
            --el-border-color: none;
            --el-input-hover-border-color: none;
            --el-input-focus-border-color: none;
            --el-text-color-regular:#fff;
            font-size: 15px;
            :deep(.el-input__wrapper){
                padding: 1px 20px 1px 20px;
            }
        }
    }
    .right{
        display: flex;
        align-items: center;
        .iconfont{
            font-size: 35px;
            color: #9d9d9d;
            margin: 10px;
            cursor:pointer;
        }
        :deep(:focus-visible) {
            outline: none; 
        }
        .user{
            width: 40px;
            height: 40px;
            border-radius: 50%;     
            margin: 10px; 
            cursor:pointer;
        }
        /deep/.el-dropdown-menu__item:not(.is-disabled){
            background-color: #000;
        }
    }
}
</style>

<style lang="less">
  .userDrop{
    width: 100px;
    height: 100px;
    padding: 0;
    background-color: #232330;
  }
  .el-popper__arrow{
        display: none;
    }
  .el-popper.is-pure{
    border: 0;
    inset:70.6px 36.8px auto auto !important;
    border-radius: 5px;
  }
</style>