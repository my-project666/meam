import {observable,action} from 'mobx';
import {addst} from '../../service/index'
//添加试题
class addSt{
    @observable isaddQuestion:boolean = false;
    @action async addSt(params:any):Promise<any>{
          const result = await addst(params)
          return result
    }
}
export default addSt;