import {observable,action} from 'mobx';
import {deletea} from '../../api/user'
class deletead{
    @observable isaddQuestion:boolean = false;
    @action async deletea(params:any):Promise<any>{
        const result =await deletea(params);
        return result;
    }
}
export default deletead;