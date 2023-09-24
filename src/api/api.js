/* 
整个项目api管理
*/
import request from "./request";

export default {
    getPart1Data(params) {
        return request({
            url: '/basketball/getPart1Data',
            method: 'get',
            data: params,
            mock: true
        })
    },

    getPart2Data(params) {
        return request({
            url: '/basketball/getPart2Data',
            method: 'get',
            data: params,
            mock: true
        })
    },

    getPart3Data(params) {
        return request({
            url: '/basketball/getPart3Data',
            method: 'get',
            data: params,
            mock: true
        })
    },

    getPart4Data(params) {
        return request({
            url: '/basketball/getPart4Data',
            method: 'get',
            data: params,
            mock: true
        })
    },

    getPart5Data(params) {
        return request({
            url: '/basketball/getPart5Data',
            method: 'get',
            data: params,
            mock: true
        })
    },

}