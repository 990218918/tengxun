<template>
    <div class="nanlan">
        <div class="part1">
            <div class="img">
                <el-carousel :interval="4000" type="card" height="auto" v-if="part1ImgData[0]!=null">
                    <el-carousel-item v-for="item in part1ImgData" :key="item" style="height:auto">
                       <img :src="getImgURL(item.url)" alt="" />
                    </el-carousel-item>
                </el-carousel>
            </div>
        </div>
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
                    <div class="info">
                        <img
                         v-for="item1 in item.listitem" 
                         :key="item1" 
                         :src="getImgURL(item1.url)" 
                         alt="" 
                        />
                    </div>
                </el-carousel-item>
            </el-carousel>
        </div>
        <div class="common part3">
            <h1>重磅  5-8名排位赛对阵</h1>
                <el-carousel
                  height="240px"
                  arrow="always" 
                  :autoplay="false" 
                  :loop="false"
                  indicator-position="none"
                >
                    <el-carousel-item>
                            <div class="info">
                                <div class="single">
                                    <img src="../../assets/images/part3-1.png" alt="">
                                    <h2>19:30  美国vs德国</h2>
                                    <span class="note">巅峰对决！梦之队冲决赛</span>
                                </div>
                                <div class="single">
                                    <img src="../../assets/images/part3-1.png" alt="">
                                    <h2>19:30  美国vs德国</h2>
                                    <span class="note">巅峰对决！梦之队冲决赛</span>
                                </div>
                                <div class="single">
                                    <img src="../../assets/images/part3-1.png" alt="">
                                    <h2>19:30  美国vs德国</h2>
                                    <span class="note">巅峰对决！梦之队冲决赛</span>
                                </div>
                                <div class="single">
                                    <img src="../../assets/images/part3-1.png" alt="">
                                    <h2>19:30  美国vs德国</h2>
                                    <span class="note">巅峰对决！梦之队冲决赛</span>
                                </div>
                                <div class="single">
                                    <img src="../../assets/images/part3-1.png" alt="">
                                    <h2>19:30  美国vs德国</h2>
                                    <span class="note">巅峰对决！梦之队冲决赛</span>
                                </div>
                            </div>
                        </el-carousel-item>
                    <el-carousel-item>
                            <div class="info">
                                <div class="single">
                                    <img src="../../assets/images/part3-1.png" alt="">
                                    <h2>19:30  美国vs德国</h2>
                                    <span class="note">巅峰对决！梦之队冲决赛</span>
                                </div>
                                <div class="single">
                                    <img src="../../assets/images/part3-1.png" alt="">
                                    <h2>19:30  美国vs德国</h2>
                                    <span class="note">巅峰对决！梦之队冲决赛</span>
                                </div>
                                <div class="single">
                                    <img src="../../assets/images/part3-1.png" alt="">
                                    <h2>19:30  美国vs德国</h2>
                                    <span class="note">巅峰对决！梦之队冲决赛</span>
                                </div>
                                <div class="single">
                                    <img src="../../assets/images/part3-1.png" alt="">
                                    <h2>19:30  美国vs德国</h2>
                                    <span class="note">巅峰对决！梦之队冲决赛</span>
                                </div>
                                <div class="single">
                                    <img src="../../assets/images/part3-1.png" alt="">
                                    <h2>19:30  美国vs德国</h2>
                                    <span class="note">巅峰对决！梦之队冲决赛</span>
                                </div>
                            </div>
                        </el-carousel-item>
                    <el-carousel-item>
                            <div class="info">
                                <div class="single">
                                    <img src="../../assets/images/part3-1.png" alt="">
                                    <h2>19:30  美国vs德国</h2>
                                    <span class="note">巅峰对决！梦之队冲决赛</span>
                                </div>
                                <div class="single">
                                    <img src="../../assets/images/part3-1.png" alt="">
                                    <h2>19:30  美国vs德国</h2>
                                    <span class="note">巅峰对决！梦之队冲决赛</span>
                                </div>
                                <div class="single">
                                    <img src="../../assets/images/part3-1.png" alt="">
                                    <h2>19:30  美国vs德国</h2>
                                    <span class="note">巅峰对决！梦之队冲决赛</span>
                                </div>
                                <div class="single">
                                    <img src="../../assets/images/part3-1.png" alt="">
                                    <h2>19:30  美国vs德国</h2>
                                    <span class="note">巅峰对决！梦之队冲决赛</span>
                                </div>
                                <div class="single">
                                    <img src="../../assets/images/part3-1.png" alt="">
                                    <h2>19:30  美国vs德国</h2>
                                    <span class="note">巅峰对决！梦之队冲决赛</span>
                                </div>
                            </div>
                        </el-carousel-item>
                </el-carousel>           
        </div>
        <div class="common part4">
            <h1>球星集锦</h1> 
                <el-carousel 
                  height="240px"
                  arrow="always" 
                  :autoplay="false" 
                  :loop="false"
                  indicator-position="none"
                >
                    <el-carousel-item>
                        <div class="info">
                            <div class="single">
                                <img src="../../assets/images/part4-1.png" alt="">
                                <h2>施罗德vs塞尔维亚集锦</h2>
                                <span class="note">决赛独揽28分荣膺MVP</span>
                            </div>
                            <div class="single">
                                <img src="../../assets/images/part4-1.png" alt="">
                                <h2>施罗德vs塞尔维亚集锦</h2>
                                <span class="note">决赛独揽28分荣膺MVP</span>
                            </div>
                            <div class="single">
                                <img src="../../assets/images/part4-1.png" alt="">
                                <h2>施罗德vs塞尔维亚集锦</h2>
                                <span class="note">决赛独揽28分荣膺MVP</span>
                            </div>
                            <div class="single">
                                <img src="../../assets/images/part4-1.png" alt="">
                                <h2>施罗德vs塞尔维亚集锦</h2>
                                <span class="note">决赛独揽28分荣膺MVP</span>
                            </div>
                            <div class="single">
                                <img src="../../assets/images/part4-1.png" alt="">
                                <h2>施罗德vs塞尔维亚集锦</h2>
                                <span class="note">决赛独揽28分荣膺MVP</span>
                            </div>
                        </div>
                    </el-carousel-item>
                    <el-carousel-item>
                        <div class="info">
                            <div class="single">
                                <img src="../../assets/images/part4-1.png" alt="">
                                <h2>施罗德vs塞尔维亚集锦</h2>
                                <span class="note">决赛独揽28分荣膺MVP</span>
                            </div>
                            <div class="single">
                                <img src="../../assets/images/part4-1.png" alt="">
                                <h2>施罗德vs塞尔维亚集锦</h2>
                                <span class="note">决赛独揽28分荣膺MVP</span>
                            </div>
                            <div class="single">
                                <img src="../../assets/images/part4-1.png" alt="">
                                <h2>施罗德vs塞尔维亚集锦</h2>
                                <span class="note">决赛独揽28分荣膺MVP</span>
                            </div>
                            <div class="single">
                                <img src="../../assets/images/part4-1.png" alt="">
                                <h2>施罗德vs塞尔维亚集锦</h2>
                                <span class="note">决赛独揽28分荣膺MVP</span>
                            </div>
                            <div class="single">
                                <img src="../../assets/images/part4-1.png" alt="">
                                <h2>施罗德vs塞尔维亚集锦</h2>
                                <span class="note">决赛独揽28分荣膺MVP</span>
                            </div>
                        </div>
                    </el-carousel-item>
                    <el-carousel-item>
                        <div class="info">
                            <div class="single">
                                <img src="../../assets/images/part4-1.png" alt="">
                                <h2>施罗德vs塞尔维亚集锦</h2>
                                <span class="note">决赛独揽28分荣膺MVP</span>
                            </div>
                            <div class="single">
                                <img src="../../assets/images/part4-1.png" alt="">
                                <h2>施罗德vs塞尔维亚集锦</h2>
                                <span class="note">决赛独揽28分荣膺MVP</span>
                            </div>
                            <div class="single">
                                <img src="../../assets/images/part4-1.png" alt="">
                                <h2>施罗德vs塞尔维亚集锦</h2>
                                <span class="note">决赛独揽28分荣膺MVP</span>
                            </div>
                            <div class="single">
                                <img src="../../assets/images/part4-1.png" alt="">
                                <h2>施罗德vs塞尔维亚集锦</h2>
                                <span class="note">决赛独揽28分荣膺MVP</span>
                            </div>
                            <div class="single">
                                <img src="../../assets/images/part4-1.png" alt="">
                                <h2>施罗德vs塞尔维亚集锦</h2>
                                <span class="note">决赛独揽28分荣膺MVP</span>
                            </div>
                        </div>
                    </el-carousel-item>
                </el-carousel>          
        </div>
        <div class="common part5">
            <h1>独家原创</h1>
            <div>
                <el-tabs
                   class="demo-tabs" 
                   v-model="activeName"
                >
                    <el-tab-pane label="十二分之一" name="first">
                        <div class="info">
                            <div class="single">
                                <img src="../../assets/images/part5-1.png" alt="">
                                <h2>第五期：张镇麟</h2>
                                <span class="note">为国出战是一种荣誉</span>
                            </div>
                            <div class="single">
                                <img src="../../assets/images/part5-1.png" alt="">
                                <h2>第五期：张镇麟</h2>
                                <span class="note">为国出战是一种荣誉</span>
                            </div>
                            <div class="single">
                                <img src="../../assets/images/part5-1.png" alt="">
                                <h2>第五期：张镇麟</h2>
                                <span class="note">为国出战是一种荣誉</span>
                            </div>
                            <div class="single">
                                <img src="../../assets/images/part5-1.png" alt="">
                                <h2>第五期：张镇麟</h2>
                                <span class="note">为国出战是一种荣誉</span>
                            </div>
                            <div class="single">
                                <img src="../../assets/images/part5-1.png" alt="">
                                <h2>第五期：张镇麟</h2>
                                <span class="note">为国出战是一种荣誉</span>
                            </div>
                        </div>            
                    </el-tab-pane>
                    <el-tab-pane label="破晓之光" name="second">
                        <div class="info">
                            <div class="single">
                                <img src="../../assets/images/part5-2.png" alt="">
                                <h2>第一集：无名之战</h2>
                                <span class="note">王仕鹏朱芳雨任导师</span>
                            </div>
                            <div class="single">
                                <img src="../../assets/images/part5-2.png" alt="">
                                <h2>第一集：无名之战</h2>
                                <span class="note">王仕鹏朱芳雨任导师</span>
                            </div>
                            <div class="single">
                                <img src="../../assets/images/part5-2.png" alt="">
                                <h2>第一集：无名之战</h2>
                                <span class="note">王仕鹏朱芳雨任导师</span>
                            </div>
                            <div class="single">
                                <img src="../../assets/images/part5-2.png" alt="">
                                <h2>第一集：无名之战</h2>
                                <span class="note">王仕鹏朱芳雨任导师</span>
                            </div>
                            <div class="single">
                                <img src="../../assets/images/part5-2.png" alt="">
                                <h2>第一集：无名之战</h2>
                                <span class="note">王仕鹏朱芳雨任导师</span>
                            </div>
                        </div> 
                    </el-tab-pane>
                    <el-tab-pane label="篮场风暴" name="third">
                        <div class="info">
                            <div class="single">
                                <img src="../../assets/images/part5-3.png" alt="">
                                <h2>EP6：石学念率队出战</h2>
                                <span class="note">永不言弃的篮球精神</span>
                            </div>
                            <div class="single">
                                <img src="../../assets/images/part5-3.png" alt="">
                                <h2>EP6：石学念率队出战</h2>
                                <span class="note">永不言弃的篮球精神</span>
                            </div>
                            <div class="single">
                                <img src="../../assets/images/part5-3.png" alt="">
                                <h2>EP6：石学念率队出战</h2>
                                <span class="note">永不言弃的篮球精神</span>
                            </div>
                            <div class="single">
                                <img src="../../assets/images/part5-3.png" alt="">
                                <h2>EP6：石学念率队出战</h2>
                                <span class="note">永不言弃的篮球精神</span>
                            </div>
                            <div class="single">
                                <img src="../../assets/images/part5-3.png" alt="">
                                <h2>EP6：石学念率队出战</h2>
                                <span class="note">永不言弃的篮球精神</span>
                            </div>
                        </div> 
                    </el-tab-pane>
                    <el-tab-pane label="战术笔记" name="fourth">
                        <div class="info">
                            <div class="single">
                                <img src="../../assets/images/part5-4.png" alt="">
                                <h2>世界杯战术笔记EP03</h2>
                                <span class="note">男篮的进攻哪里出了问题</span>
                            </div>
                            <div class="single">
                                <img src="../../assets/images/part5-4.png" alt="">
                                <h2>世界杯战术笔记EP03</h2>
                                <span class="note">男篮的进攻哪里出了问题</span>
                            </div>
                            <div class="single">
                                <img src="../../assets/images/part5-4.png" alt="">
                                <h2>世界杯战术笔记EP03</h2>
                                <span class="note">男篮的进攻哪里出了问题</span>
                            </div>
                            <div class="single">
                                <img src="../../assets/images/part5-4.png" alt="">
                                <h2>世界杯战术笔记EP03</h2>
                                <span class="note">男篮的进攻哪里出了问题</span>
                            </div>
                            <div class="single">
                                <img src="../../assets/images/part5-4.png" alt="">
                                <h2>世界杯战术笔记EP03</h2>
                                <span class="note">男篮的进攻哪里出了问题</span>
                            </div>
                        </div> 
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

        const getPart1Url = async () => {
            let res = await proxy.$api.getPart1Data();
            // console.log(res);
            part1ImgData.value = res
        };

        const getPart2Url = async () => {
            let res = await proxy.$api.getPart2Data();
            console.log(res);
            // console.log(res.list);
            part2ImgData.value = res.page
        };


        const getImgURL = url => {
            return new URL(`../../assets/images/${url}.png`, import.meta.url).href
        }

        onMounted(() => {
            getPart1Url();
            getPart2Url()
        });

        return {
            part1ImgData,
            part2ImgData,
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
        .info{
            display: flex;
            justify-content: center;
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