import request from '../utils/request';
//获取用户数据
export let userAdd = ()=>{
    const url = '/user/user';
    return request.get(url);
}

export let identity = ()=>{
    const url = '/user/identity';
    return request.get(url);
}
// /user/authorityApi/edit
export let api_authority = ()=>{
    const url = '/user/api_authority';
    return request.get(url);
}

export let identity_api = ()=>{
    const url = '/user/identity_api_authority_relation';
    return request.get(url);
}
export let identity_view= ()=>{
    const url = '/user/identity_view_authority_relation';
    return request.get(url);
}
//添加教室接口    获取所有教室
export let ClassManagement= ()=>{
    const url = '/manger/room';
    return request.get(url);
}
//学生管理
export let StudentManagement= ()=>{
    const url = '/manger/student/new';
    return request.get(url);
}
//班级管理错的[]
export let Class_management= ()=>{
    const url = '/manger/grade/new';
    return request.get(url);
}
//添加班级接口
export let grade= ()=>{
    const url = '/manger/grade';
    return request.get(url);
}
export let pasegement= (params:any)=>{
    const url = '/manger/room';
    return request.post(url,params);
}