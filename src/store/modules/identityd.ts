import {observable,action} from 'mobx';
import {identity} from '../../api/user';
class identitys{
    @observable isaddQuestion:boolean = false;
    @action async identity():Promise<any>{
        const result = await identity();
        return result;
    }
}
export default identitys;