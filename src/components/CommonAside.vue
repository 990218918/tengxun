<template>
    <el-aside width="200px">
        <el-menu class="el-menu-vertical-demo">
          <el-menu-item
           :index="item.path" 
           v-for="item in list"
           :key="item.path"
           @click="clickMenu(item)"
        >
            <span>
                <i class="iconfont" :class="item.icon"></i>
            </span>
            <span>{{ item.label }}</span>
          </el-menu-item>
        </el-menu>
        <div class="under">
            <div class="up">
                <a href="">腾讯视频隐私保护指引</a>
                <a href="">腾讯视频用户服务协议</a>
                <a href="">腾讯视频第三方信息共享清单</a>
                <a href="">腾讯视频已收集个人信息清单</a>
                <a href="">腾讯儿童隐私保护声明</a>
                <a href="">腾讯视频系列会员服务协议</a>
            </div>
            <div class="down">
                <a href="">粤网文[2023]6138-1457号</a>
                <a href="">网络视听许可证1231号</a>
                <a href="">粤公网安备<br />44859043865934号</a>
                <a href="">增值电信业务经营许可证：<br />粤B2-5435355435</a>
                <a href="">关于腾讯</a>
                <a href="">服务条款</a>
                <a href="">腾讯招聘</a>
                <a href="">客服中心</a>
                <a href="">网站导航</a>
                <a href="">Copyr © 1998 - 2023 Tencent.All Rights Reserved.</a>
                <a href="">腾讯公司 版权所有</a>
                <a href="">工商网监</a>
            </div>
        </div>
    </el-aside>
</template>

<script>
import { useRouter } from 'vue-router';

export default {
    setup() {
        const list = [
            {
                path: "/home",
                name: "home",
                label: "首页",
                icon: "icon-shoucang",
                url: "",
            },
            {
                path: "/mvideo",
                name: "mvideo",
                label: "中视频",
                icon: "icon-duanshipinhuati",
                url: "",
            },
            {
                path: "/tv",
                name: "tv",
                label: "电视剧",
                icon: "icon-dianshizhibo",
                url: "",
            },
            {
                path: "/movie",
                name: "movie",
                label: "电影",
                icon: "icon-film-line",
                url: "",
            },
            {
                path: "/show",
                name: "show",
                label: "综艺",
                icon: "icon-maikefeng",
                url: "",
            },
            {
                path: "/comic",
                name: "comic",
                label: "动漫",
                icon: "icon-dongman",
                url: "",
            },
            {
                path: "/gamecentre",
                name: "gamecentre",
                label: "游戏中心",
                icon: "icon-a-tupianyihuifu-20",
                url: "",
            },
            {
                path: "/child",
                name: "child",
                label: "少儿",
                icon: "icon-shaoer",
                url: "",
            },
            {
                path: "/basketball",
                name: "basketball",
                label: "男篮世界杯",
                icon: "icon-lanqiu1",
                url: "",
            },
            {
                path: "/sport",
                name: "sport",
                label: "体育",
                icon: "icon-lanqiu1",
                url: "",
            },
            {
                path: "/documentary",
                name: "documentary",
                label: "纪录片",
                icon: "icon-shipinbofang",
                url: "",
            },
            {
                path: "/NBA",
                name: "NBA",
                label: "NBA",
                icon: "icon-lanqiu",
                url: "",
            },
            {
                path: "/VIP",
                name: "VIP",
                label: "VIP会员",
                icon: "icon-VIP",
                url: "",
            },
            {
                path: "/game",
                name: "game",
                label: "游戏",
                icon: "icon-a-tupianyihuifu-20",
                url: "",
            },
            {
                path: "/gamelibrary",
                name: "gamelibrary",
                label: "传奇游戏库",
                icon: "icon-youxitubiao",
                url: "",
            },
            {
                path: "/technology",
                name: "technology",
                label: "科技",
                icon: "icon-keji",
                url: "",
            },
            {
                path: "/music",
                name: "music",
                label: "音乐",
                icon: "icon-yinle",
                url: "",
            },
            {
                path: "/football",
                name: "football",
                label: "中超",
                icon: "icon-zuqiu",
                url: "",
            },
        ];

        const router = useRouter();

        const clickMenu = (item) => {
            router.push({
                name: item.name,
            })
        }

        return {
            list,
            clickMenu
        }
    },
}
</script>

<style lang="less" scoped>
.el-menu{
    display: flex;
    flex-direction: column;
    background-color: #2b2b2b;
    border-right: 0;
    span{
        display: flex;
        color: #bdbdbd;
        height: 100%;
        align-items: center;
    }
    i{
        display: flex;
        align-items: center;
        margin: 15px;
    }
    .iconfont{
        font-size: 20px;
        margin-right: 20px;
        width: 20px;
        height: 20px;
        padding: 0;
    }
    .el-menu-item:hover {
        background-color: #2b2b2b;
    }
}
.under{
    display: flex;
    flex-direction: column;
    padding-left: 20px;
    font-size: 12px;
    color: #7c7c7c;
    a{
        display: block;
        margin: 15px 0;
    }
    .up{
        border-top: 1px solid #545454;
        border-bottom: 1px solid #545454;
        margin-top: 10px;
    }
}
</style>