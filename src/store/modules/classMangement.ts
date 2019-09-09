import {observable,action} from 'mobx';
import {ClassManagement} from '../../api/user'
class ClassManagements{
    @observable isaddQuestion:boolean = false;
    @action async ClassManagement():Promise<any>{
        const result =await ClassManagement();
        return result;
    }
}
export default ClassManagements;