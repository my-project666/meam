import {observable,action} from 'mobx';
import {identity_api} from '../../api/user'
class identitys_api{
    @observable isaddQuestion:boolean = false;
    @action async identity_api():Promise<any>{
        const result =await identity_api();
        return result;
    }
}
export default identitys_api;