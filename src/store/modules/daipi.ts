import {observable,action} from 'mobx';
import {approval} from '../../service'
class appRoval{
    @observable isaddQuestion:boolean = false;
    @action async appRoval():Promise<any>{
        const result =await approval();
        return result;
    }
}
export default appRoval;