import request from '../utils/request';

//添加靠hi类型接口
export let addclass  = (params:any)=>{
    return request.get('/exam/insertQuestionsType',{
          params
    });
}