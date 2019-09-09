import {observable,action} from 'mobx';
import {grade} from '../../api/user'
class grades{
    @observable isaddQuestion:boolean = false;
    @action async grade():Promise<any>{
        const result =await grade();
        return result;
    }
}
export default grades;