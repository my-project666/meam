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

//获取所有视图数据
export let view_authority=()=>{
    return request.get('/user/view_authority')
}


//根据用户id，返回该用户的视图权限
export let newshitu=(params:any)=>{
    return request.get('/user/new',{params})
}


//展示身份和视图权限关系
export let allshen=()=>{
    return request.get('/user/api_authority')
}

//给身份设置api接口权限

export let addshenfen=(params:any)=>{
    return request.post('/user/setIdentityApi',params)
}

//给身份设定视图权限

export let szshitu=(params:any)=>{
    return request.post('/user/setIdentityView',params)
}