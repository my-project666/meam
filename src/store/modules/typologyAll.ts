import {action,observable} from "mobx";
import {typologyall} from '../../service';
class typologyAll{
    @observable istypologyAll:boolean  = false;
    @action async typoLogyall():Promise<any>{
          const result = await typologyall()
          return result;
    }
}



export default typologyAll;
