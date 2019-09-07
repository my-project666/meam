import request from '../utils/request';
export let addclass  = (params:any)=>{
    return request.get('/exam/insertQuestionsType',{
          params
    });
}