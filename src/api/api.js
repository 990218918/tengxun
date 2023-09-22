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
    }

}