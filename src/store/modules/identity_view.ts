import {observable,action} from 'mobx';
import {identity_view} from '../../api/user';
class identitys_view{
    @observable isaddQuestion:boolean = false;
    @action async identity_view():Promise<any>{
        const result = await identity_view();
        return result;
    }
}
export default identitys_view;