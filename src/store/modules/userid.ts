import {action,observable} from "mobx";
import {userid} from '../../service';
class userId{
    @observable usrId:boolean  = false;
    @action async userId():Promise<any>{
          const result = await userid()
          return result;
    }
}



export default userId;