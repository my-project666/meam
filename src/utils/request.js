import axios from 'axios';
import {message} from 'antd';

import {getToken} from './index';
//创建了一个请求头
const instance = axios.create({
    baseURL:'http://169.254.213.176:7001', //是用于请求的服务器URL
    timeout:1000, //请求超时时间  如果请求花费超过了timeout 的时间，请求将被中断
    headers:{authorization:getToken()}//自定义请求头
});

//请求拦截器
//请求拦截器的作用是在请求发送前进行一些操作，列如在每个请求体里面加上token,统一做了处理如果以后要改也非常容易
instance.interceptors.request.use((config)=>{
    return config;
},(error)=>{
    return Promise.reject(error);
});

//响应拦截
//响应拦截器的作用是在接收到相应后进行一些操作，for-editor
instance.interceptors.response.use((response)=>{
    // console.log('response...',response);
    if(response.status!==200){
        message.error(response.statusText);
    }
    return response.data;
},(error)=>{
    // console.log('error',error);
    return Promise.reject(error);
})
export default instance;