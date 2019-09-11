import {action,observable} from "mobx";
import {classkc} from '../../service';
//获取所有课程
class typologyAll{
    @observable istypologyAll:boolean  = false;
    @action async classKc():Promise<any>{
          const result = await classkc()
          return result;
    }
}



export default typologyAll;