import axios from 'axios';
import {message} from 'antd';
import {getToken} from './index'

const instance = axios.create({
    baseURL:'http://169.254.19.11:7001',
    timeout:1000,
    headers:{'authorization':getToken()}
});

//请求拦截器
instance.interceptors.request.use((config)=>{
    return config;
},(error)=>{
    return Promise.reject(error);
});

//响应拦截
instance.interceptors.response.use((response)=>{
    console.log('response...',response);
    if(response.status!==200){
        message.error(response.statusText);
    }
    return response.data;
},(error)=>{
    console.log('error',error);
    return Promise.reject(error);
})
export default instance;