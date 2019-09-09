import {observable,action} from 'mobx';
import {api_authority} from '../../api/user';
class api_authod{
    @observable isaddQuestion:boolean = false;
    @action async api_authority():Promise<any>{
        const result =await api_authority();
        return result;
    }
}
export default api_authod;