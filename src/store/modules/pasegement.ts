import {observable,action} from 'mobx';
import {pasegement} from '../../api/user';
class pasegements{
    @observable isaddQuestion:boolean = false;
    @action async pasegement(params:any):Promise<any>{
        const result = await pasegement(params);
        return result;
    }
}
export default pasegements;