//创建试卷
import request from '../utils/request'
import cons from 'src/router/cons'

export let addshiti=(params:any)=>{
    console.log(params)
    return request.post('/exam/exam',params)
}
//获取试卷列表
export let shiitlist=()=>{
    return request.get('/exam/exam')
}
//获取试题详情列表

export let questionexam=(params:any)=>{
    console.log(params)
    return request.get(`/exam/exam/${params}`)
}

