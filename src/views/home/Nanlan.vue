<template>
    <div class="nanlan">
        <div class="part1">
            <div class="img">
                <el-carousel :interval="4000" type="card" height="auto">
                    <el-carousel-item v-for="item in imgData" :key="item" style="height:auto">
                       <img :src="item.url" alt="" />
                    </el-carousel-item>
                </el-carousel>
            </div>
        </div>
        <div class="common part2">
            <div class="title">
                <h1>赛程<i class="iconfont icon-guanjun"></i>全场次免费</h1>
                <h1 style="color:#0ca5ff;font-family: 方正姚体">安慕希</h1>
            </div>
            <div class="info">
                <img src="../../assets/images/part2-1.png" alt="">
                <img src="../../assets/images/part2-1.png" alt="">
                <img src="../../assets/images/part2-1.png" alt="">
                <img src="../../assets/images/part2-1.png" alt="">
                <img src="../../assets/images/part2-1.png" alt="">
            </div>
        </div>
        <div class="common part3">
            <h1>重磅  5-8名排位赛对阵</h1>
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
        </div>
        <div class="common part4">
            <h1>球星集锦</h1> 
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
        </div>
        <div class="common part5">
            <h1>独家原创</h1>
            <div>
                <el-tabs
                   v-model="activeName" 
                   class="demo-tabs" 
                   @tab-click="handleClick"
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
        <div class="part6"></div>
    </div>
</template>

<script>
import { reactive } from 'vue'
export default {
    setup() {
        const imgData = reactive([
            { url: new URL('../../assets/images/part1-1.png', import.meta.url).href },
            { url: new URL('../../assets/images/part1-2.png', import.meta.url).href },
            { url: new URL('../../assets/images/part1-1.png', import.meta.url).href },
            { url: new URL('../../assets/images/part1-2.png', import.meta.url).href },
        ]);
        return {
            imgData,
        }
    },
}
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
        .info{
            display: flex;
            justify-content: center;
            img{
                width: 260px;
                height: 160px;
                border-radius: 5px;
                margin: 15px;
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