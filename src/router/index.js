import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        component: () => import('../views/Main.vue'),
        redirect: '/basketball',
        children: [
            {
                path: '/home',
                name: 'home',
                component: () => import('../views/home/Home.vue')
            },
            {
                path: '/mvideo',
                name: 'mvideo',
                component: () => import('../views/home/Mvideo.vue')
            },
            {
                path: '/tv',
                name: 'tv',
                component: () => import('../views/home/Tv.vue')
            },
            {
                path: '/movie',
                name: 'movie',
                component: () => import('../views/home/Movie.vue')
            },
            {
                path: '/show',
                name: 'show',
                component: () => import('../views/home/Show.vue')
            },
            {
                path: "/comic",
                name: "comic",
                component: () => import('../views/home/Comic.vue')
            },
            {
                path: "/gamecentre",
                name: "gamecentre",
                component: () => import('../views/home/GameCentre.vue')
            },
            {
                path: "/child",
                name: "child",
                component: () => import('../views/home/Child.vue')
            },
            {
                path: "/basketball",
                name: "basketball",
                component: () => import('../views/home/Basketball.vue')
            },
            {
                path: "/sport",
                name: "sport",
                component: () => import('../views/home/Sport.vue')
            },
            {
                path: "/documentary",
                name: "documentary",
                component: () => import('../views/home/Documentary.vue')
            },
            {
                path: "/NBA",
                name: "NBA",
                component: () => import('../views/home/Nba.vue')
            },
            {
                path: "/VIP",
                name: "VIP",
                component: () => import('../views/home/Vip.vue')
            },
            {
                path: "/game",
                name: "game",
                component: () => import('../views/home/Game.vue')
            },
            {
                path: "/gamelibrary",
                name: "gamelibrary",
                component: () => import('../views/home/GameLibrary.vue')
            },
            {
                path: "/technology",
                name: "technology",
                component: () => import('../views/home/Technology.vue')
            },
            {
                path: "/music",
                name: "music",
                component: () => import('../views/home/Music.vue')
            },
            {
                path: "/football",
                name: "football",
                component: () => import('../views/home/Football.vue')
            },
        ]
    },
    {
        path: '/login',
        component: () => import('../views/Login.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router