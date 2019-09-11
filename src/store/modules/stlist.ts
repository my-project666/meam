import {observable,action} from 'mobx';
import {shiitlist} from '../../service';
//获取所有试题列表
class shitiList{
    @observable isaddQuestion:boolean = false;
    @action async shiList():Promise<any>{
        const result = await shiitlist();
        return result;
    }
}
export default shitiList;