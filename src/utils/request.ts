// import { ElMessage } from 'element-plus'
// axios 二次封装
import axios from "axios";

const request = axios.create({
    baseURL: "http://syt.atguigu.cn/api",
    timeout: 5000
})

// 请求拦截器
request.interceptors.request.use((config) => {

    return config
})

// 响应拦截器
request.interceptors.response.use((res) => {
    return res.data
}, (err) => {
    // switch(err.response.message){
    //     case 404:
    //         ElMessage({
    //             type: 'error',
    //             message: '请求路径有误'
    //         })
    //         break;
    //     case 500 | 501 | 502 | 503 | 504 | 505:
    //         ElMessage({
    //             type: 'error',
    //             message: '服务器出现错误'
    //         })
    // }
    return Promise.reject(new Error(err.message))
})

export default request
