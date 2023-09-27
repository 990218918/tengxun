<template>
    <div class="nanlan">
<!-- 页面第一部分 -->
        <div class="part1">
            <div class="img">
                <el-carousel :interval="4000" type="card" height="auto" v-if="part1ImgData[0]!=null">
                    <el-carousel-item v-for="item in part1ImgData" :key="item" style="height:auto">
                       <img :src="getImgURL(item.url)" alt="" />
                    </el-carousel-item>
                </el-carousel>
            </div>
        </div>
<!-- 页面第二部分 -->
        <div class="common part2">
            <div class="title">
                <h1>赛程<i class="iconfont icon-guanjun"></i>全场次免费</h1>
                <h1 style="color:#0ca5ff;font-family: 方正姚体">安慕希</h1>
            </div>
            <el-carousel
              height="180px" 
              arrow="always" 
              :autoplay="false" 
              :loop="false"
              indicator-position="none"         
            >
                <el-carousel-item
                  v-for="item in part2ImgData"
                  :key="item"  
                >
                    <div
                      v-for="item1 in item.listitem" 
                      :key="item1"
                      class="info"
                    >
                        <img :src="getImgURL(item1.url)" alt=""/>
                    </div>
                </el-carousel-item>
            </el-carousel>
        </div>
<!-- 页面第三部分 -->
        <div class="common part3">
            <h1>重磅  5-8名排位赛对阵</h1>
                <el-carousel
                  height="240px"
                  arrow="always" 
                  :autoplay="false" 
                  :loop="false"
                  indicator-position="none"
                >
                    <el-carousel-item
                      v-for="item in part3ImgData"
                      :key="item"
                    >
                        <div v-for="item1 in item.listitem" :key="item1" class="info">
                            <img :src="getImgURL(item1.url)" alt="">
                            <h2>{{item1.txt1}}</h2>
                            <span class="note">{{item1.txt2}}</span>
                        </div>
                        </el-carousel-item>
                </el-carousel>           
        </div>
<!-- 页面第四部分 -->
        <div class="common part4">
            <h1>球星集锦</h1> 
            <el-carousel
                  height="240px"
                  arrow="always" 
                  :autoplay="false" 
                  :loop="false"
                  indicator-position="none"
                >
                    <el-carousel-item
                      v-for="item in part4ImgData"
                      :key="item"
                    >
                        <div v-for="item1 in item.listitem" :key="item1" class="info">
                            <img :src="getImgURL(item1.url)" alt="">
                            <h2>{{item1.txt1}}</h2>
                            <span class="note">{{item1.txt2}}</span>
                        </div>
                        </el-carousel-item>
                </el-carousel> 
        </div>
<!-- 页面第五部分 -->
        <div class="common part5">
            <h1>独家原创</h1>
            <div>
                <el-tabs
                   class="demo-tabs" 
                   v-model="activeName"
                >
                    <el-tab-pane v-for="item in part5ImgData" :key="item" :label="item.label" :name="item.name">
                        <el-carousel 
                          height="240px"
                          arrow="always" 
                          :autoplay="false" 
                          :loop="false"
                          indicator-position="none"
                        >
                            <el-carousel-item v-for="item1 in item.page" :key="item1">
                                <div class="info" v-for="item2 in item1.listitem" :key="item2">
                                    <div class="single">
                                        <img :src="getImgURL(item2.url)" alt="">
                                        <h2>{{item2.txt1}}</h2>
                                        <span class="note">{{ item2.txt2 }}</span>
                                    </div>
                                </div>
                            </el-carousel-item>
                        </el-carousel>
                    </el-tab-pane>
                </el-tabs>
            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent, getCurrentInstance, onMounted, ref } from 'vue';

export default defineComponent({
    setup() {
        const { proxy } = getCurrentInstance();

        const activeName = ref('first');

        const part1ImgData = ref([]);
        const part2ImgData = ref([]);
        const part3ImgData = ref([]);
        const part4ImgData = ref([]);
        const part5ImgData = ref([]);

        const getPart1Url = async () => {
            let res = await proxy.$api.getPart1Data();
            // console.log(res);
            part1ImgData.value = res
        };

        const getPart2Url = async () => {
            let res = await proxy.$api.getPart2Data();
            // console.log(res);
            // console.log(res.list);
            part2ImgData.value = res.page
        };

        const getPart3Url = async () => {
            let res = await proxy.$api.getPart3Data();
            // console.log(res);
            // console.log(res.list);
            part3ImgData.value = res.page
        };

        const getPart4Url = async () => {
            let res = await proxy.$api.getPart4Data();
            // console.log(res);
            part4ImgData.value = res.page
        };

        const getPart5Url = async () => {
            let res = await proxy.$api.getPart5Data();
            // console.log(res);
            part5ImgData.value = res.title
        };


        const getImgURL = url => {
            return new URL(`../../assets/images/${url}.png`, import.meta.url).href
        }

        onMounted(() => {
            getPart1Url();
            getPart2Url();
            getPart3Url();
            getPart4Url();
            getPart5Url();
        });

        return {
            part1ImgData,
            part2ImgData,
            part3ImgData,
            part4ImgData,
            part5ImgData,
            getImgURL,
            activeName
        }
    },
}) 

</script>

<style lang="less" scoped>
.nanlan{
    display: flex;
    flex-direction: column;
    .part1{
        height: 450px;
        background-image: linear-gradient(#222fa8,#fff);
        display: flex;
        justify-content: center;
        .img{
            width: 1500px;
            img{
                width: 750px;
                height: 400px;
                border-radius: 10px;
                // margin: 0 15px;
            }
        }
    }
    .common{
        display: flex;
        justify-content: center;
        padding: 0 150px;
        flex-direction: column;
        margin-bottom: 30px;
        h1{
            font-size: 25px;
            font-weight: bold;
            padding: 0 40px;
        }
        :deep(.el-carousel__arrow--left){
            background-color: transparent;
            left: 10px;
           .el-icon{
                color: #666;
                font-size: 35px;
            }
           .el-icon:hover{
                color: #000;
            }
        }
        :deep(.el-carousel__arrow--right){
            background-color: transparent;
            right: 10px;
           .el-icon{
                color: #666;
                font-size: 35px;
            }
            .el-icon:hover{
                color: #000;
            }
        }
        .el-carousel__item{
            display: flex;
            justify-content: center;
        }
        .info{
            display: flex;
            justify-content: center;
            flex-direction: column;
            img{
                width: 260px;
                height: 160px;
                border-radius: 5px;
                margin: 15px;
                cursor:pointer;
            }
            h2{
            font-size: 16px;
            padding: 0 20px;
            margin-bottom: 10px;
            }
            .note{
                font-size: 14px;
                padding: 0 20px;
                color: #8f8d99;
            }
        }
    }
    .part2{
        .title{
            display: flex;
            justify-content: space-between;
            width: 100%;
            .iconfont{
                font-size: 25px;
                color: #ffac3f;
            }
        }

    }
    .part5{
        .el-tabs{
            // margin-left: 40px;
            :deep(.el-tabs__header){
                margin-left: 40px;
                margin-top: 10px;
            }
            :deep(.el-tabs__item){
                    background-color: #d0e2f6;
                    margin-right: 20px;
                    border-radius: 20px;
                    padding: 0 20px;
                    color: #0619b2;
                }
            :deep(.el-tabs__active-bar){
                background-color: #0619b2;
                transition: none;
            }
            :deep(.el-tabs__item:hover){
                 background-color: #0619b2;
                  color: #fff;
              }
            :deep(.el-tabs__item.is-active){
                 background-color: #0619b2;
                  color: #fff;
              }
            :deep(.el-tabs__nav-wrap::after){
                background-color: #fff;
            }
        }
    }
}
</style>