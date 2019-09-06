import request from '../utils/request';

//登录
export let login = (params:object)=>{
    return request.post('/user/login',params);
}