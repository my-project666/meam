import request from '../utils/request';
//获取所有考试类型接口
export let classkc = ()=>{
    return request.get('/exam/subject');
}
//获取所有试题类型接口
export let questionclass= ()=>{
    return request.get('/exam/getQuestionsType');
}
//获取所有考试类型接口
export let typologyall = ()=>{
    return request.get('/exam/examType');
}

//获取用户id 接口 

export let userid = ()=>{
    return request.get('/user/userInfo');
}

//添加试题接口

export let addst=(params:any)=>{
    return request.post('/exam/questions',params);
}
