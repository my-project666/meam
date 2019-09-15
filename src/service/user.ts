import request from '../utils/request';

//登录
export let login = (params:object)=>{
    return request.post('/user/login',params);
}

//甜腻加用户

export let adduser = (params:any)=>{
    console.log(params)
     return request.post('/user',params)
}

//跟新用户
export let gen =(params:any)=>{
    console.log(params)
   return request.put('/user/user',params)
}

//用户身份数据
export let identity=()=>{
    return request.get('/user/identity')
}

//添加身份

export let useridentity =(params:any)=>{
    return request.get('/user/identity/edit',{params})
}

//添加api接口权限

export let addport = (params:any) =>{
    return request.get('/user/authorityApi/edit',{params})
}