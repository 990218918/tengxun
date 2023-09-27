<template>
<!-- LOGO  -->
    <el-header>
        <div class="left">
            <img src="../assets/images/logo.png" alt="">
            <h5>腾讯视频</h5>
        </div>
<!-- 搜索框 -->
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
<!-- 用户区 -->
        <div class="right">
            <i class="iconfont icon-VIP" style="color:#ffac3f"></i>
            <i class="iconfont icon-a-tupianyihuifu-20"></i>
            <i class="iconfont icon-lishi"></i>
            <i class="iconfont icon-shipinbofang"></i>
            <i class="iconfont icon-diannao_o"></i>
            <el-dropdown placement="bottom-end" show-arrow="false">
               <span class="el-dropdown-link">
                  <img class="user" :src="getImgSrc('user')" alt="">
               </span>
               <template #dropdown>
                 <el-dropdown-menu class="userDrop">
                    <el-button class="loginBtn" text @click="dialogVisible = true">立即登录</el-button>
                 </el-dropdown-menu>
               </template>
            </el-dropdown>
<!-- 登录框 -->
            <el-dialog
              v-model="dialogVisible"
              title="账号登录"
              width="30%"
              center
              class="login"
            >
                <span>微信和QQ是两个独立账号,账号信息不互通</span>
                <el-button style="background-color:#54b4ef">QQ登录</el-button>
                <el-button style="background-color:#5fcf73">微信登录</el-button>
                <div class="agree">
                    <el-checkbox />
                    <p>同意<a>《服务协议》</a>、<a>《隐私政策》</a>、<a>《儿童隐私保护声明》</a>、<a>《已采集个人信息清单》</a>和<a>《第三方信息共享清单》</a></p>
                </div>
            </el-dialog>
        </div>
    </el-header>
</template>

<script>
import { ref } from 'vue';

export default {

    setup() {
        const input = ref('');
        const dialogVisible = ref(false);

        const getImgSrc = (user) => {
            return new URL(`../assets/images/${user}.jpg`, import.meta.url).href;
        };

        return {
            input,
            getImgSrc,
            dialogVisible,
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
        cursor: pointer;
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
        // /deep/.el-dropdown-menu__item:not(.is-disabled){
        //     background-color: #000;
        // }
    }
}
</style>

<style lang="less">
  .userDrop{
    width: 200px;
    height: 150px;
    padding: 0;
    background-color: #232330;
    display: flex;
    justify-content: center;
    align-items: center;
    .loginBtn{
        width: 130px;
        height: 28px;
        border-radius: 15px;
        background-image: linear-gradient(to right,#f19f39,#ea3450);
        color: #fff;
        border: none;
    }
    .loginBtn:hover{
        background-image: linear-gradient(to right,#e7b248,#ea3450);
    }
  }
  .el-popper__arrow{
        display: none;
    }
  .el-popper.is-pure{
    border: 0;
    inset:70.6px 36.8px auto auto !important;
    border-radius: 5px;
  }
  .login{
    .el-dialog__body{
        display: flex;
        flex-direction: column;
        span{
            display: flex;
            justify-content: center;
        }
        .el-button{
            width: 200px;
            height: 40px;
            display: flex;
            justify-content: center;
            margin: auto;
            margin-top: 20px;
            border-radius: 25px;
            color: #fff;
        }
        .agree{
            display: flex;
            padding: 50px 80px 0 80px;
            .el-checkbox{
                margin: -10px 5px 0 0;
            }
            a{
                color: #e7b248;
                cursor:pointer;
            }
        }
    }
  }
</style>