//对axios进行封装
import axios from "axios";
import { GET_TOKEN } from "@/utils/token";

const service = axios.create({
    baseURL: "http://localhost:8080",
    timeout: 5000//模拟时间延迟
});
//请求拦截器
service.interceptors.request.use((config) => {
    if (GET_TOKEN()) {
        
        config.headers.token = GET_TOKEN();
    }
    return config;
}, (error) => {
    console.log
    ({
        type: "error",
        message: ""
    });
    return Promise.reject(error);
});
//响应拦截器
service.interceptors.response.use((response) => {
    const result = response.data;
    console.log(result);
    if (result.success) {
        return result;
    } else {
        console.log
        ({
            type: "error",
            message: result.message || "请求错误"
        });
        return Promise.reject(new Error(result.message || "请求错误"));
    }
}, (error) => {
    console.log({
        type: "error",
        message: "请求错误"
    });
    return Promise.reject(error);
});

export default service;
