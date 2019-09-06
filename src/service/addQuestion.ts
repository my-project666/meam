import request from '../utils/request';

export let addquestion  = ()=>{
    return request.get('/exam/getQuestionsType');
}