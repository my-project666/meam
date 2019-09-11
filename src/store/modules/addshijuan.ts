import {action,observable} from "mobx";
import {addshiti} from '../../service';
//添加试题
class addShi_ti{
    @observable istypologyAll:boolean  = false;
    @action async addShiti(params:any):Promise<any>{
          console.log(params)
              const result = await addshiti(params)
              return result;
    }
}



export default addShi_ti;