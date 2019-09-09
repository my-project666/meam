import {action,observable} from "mobx";
import {questionclass} from '../../service';
class typologyAll{
    @observable istypologyAll:boolean  = false;
    @action async questionClass():Promise<any>{
          const result = await questionclass()
          return result;
    }
}



export default typologyAll;