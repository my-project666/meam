import {observable,action} from 'mobx';
import {Class_management} from '../../api/user'
class Class_managements{
    @observable isaddQuestion:boolean = false;
    @action async Class_management():Promise<any>{
        const result =await Class_management();
        return result;
    }
}
export default Class_managements;