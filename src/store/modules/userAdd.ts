import {observable,action} from 'mobx';
import {userAdd} from '../../api/user';
//获取用户信息
class userAdds{
    @observable isaddQuestion:boolean = false;
    @action async userAdd():Promise<any>{
        const result = await userAdd()
        return result
    }
}
export default userAdds;