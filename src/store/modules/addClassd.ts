import {observable,action} from 'mobx';
import {addClassd} from '../../api/user'
//添加试题
class addClassds{
    @observable isaddQuestion:boolean = false;
    @action async addClassd(params:any):Promise<any>{
          const result = await addClassd(params)
          return result
    }
}
export default addClassds;