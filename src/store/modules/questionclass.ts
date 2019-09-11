import {action,observable} from "mobx";
import {questionclass} from '../../service';
//所有试题类型
class typologyAll{
    @observable istypologyAll:boolean  = false;
    @action async questionClass():Promise<any>{
          const result = await questionclass()
          return result;
    }
}



export default typologyAll;