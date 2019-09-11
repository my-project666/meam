import request from '../utils/request';

//待批班级
export let approval=()=>{
    return request.get('/exam/student')
}