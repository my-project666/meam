import {observable,action} from 'mobx';
import {StudentManagement} from '../../api/user';
class StudentManagements{
    @observable isaddQuestion:boolean = false;
    @action async StudentManagement():Promise<any>{
        const result = await StudentManagement();
        return result;
    }
}
export default StudentManagements;