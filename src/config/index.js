/* 
环境配置文件
开发环境
测试环境
线上环境
*/
// 当前环境
const env = import.meta.env.MODE || 'prod';

const EnvConfig = {
    development: {
        baseApi: '/api',
        mockApi: 'https://www.fastmock.site/mock/1c2b96dd4dc18861c6bb409860f7b671/api',
    },
    test: {
        // 未来会给的地址：
        baseApi: '//test.future.com/api',
        mockApi: 'https://www.fastmock.site/mock/1c2b96dd4dc18861c6bb409860f7b671/api',
    },
    prod: {
        // 未来会给的地址：
        baseApi: '//future.com/api',
        mockApi: 'https://www.fastmock.site/mock/1c2b96dd4dc18861c6bb409860f7b671/api',
    },
}

export default {
    env,
    // mock的总开关
    mock: true,
    ...EnvConfig[env]
}