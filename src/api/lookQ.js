//获取所有的考试类型
import instance from '../utils/request'
export function LookQ(){ 
    return instance.get('/exam/examType');
}
//获取所有的课程
export function subject(){ 
    return instance.get('/exam/subject');
}
//按条件获取试题
export function condition(){
    return instance.get('/exam/questions/condition')
}