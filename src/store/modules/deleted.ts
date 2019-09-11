import {observable,action} from 'mobx';
import {deleted} from '../../api/user'
class deleteds{
    @observable isaddQuestion:boolean = false;
    @action async deleted(student_id:any):Promise<any>{
        const result =await deleted(student_id);
        return result;
    }
}
export default deleteds;