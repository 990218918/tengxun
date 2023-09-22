/* 
整个项目api管理
*/
import request from "./request";

export default {
    getPart2Data(params) {
        return request({
            url: '/basketball/getPart2Data',
            method: 'get',
            data: params,
            mock: true
        })
    }
}