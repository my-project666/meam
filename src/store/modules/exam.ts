
import {action,observable} from "mobx";
import {questionexam} from '../../service';
//试题详情
class questionExam{
    @observable istypologyAll:boolean  = false;
    @action async questionExam(params:any):Promise<any>{
          const result = await questionexam(params)
          return result;
    }
}



export default questionExam;