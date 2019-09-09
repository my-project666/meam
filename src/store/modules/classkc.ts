import {action,observable} from "mobx";
import {classkc} from '../../service';
class typologyAll{
    @observable istypologyAll:boolean  = false;
    @action async classKc():Promise<any>{
          const result = await classkc()
          return result;
    }
}



export default typologyAll;