import request from '../utils/request';
//获取所有试题类型接口
export let addquestion  = ()=>{
    return request.get('/exam/getQuestionsType');
}