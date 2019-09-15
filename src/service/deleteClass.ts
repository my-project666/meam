  //删除教室
import request from '../utils/request';
export let delelate=(params:any)=>{
    console.log
    return request.delete('/manger/room/delete', {data:params} )
}
