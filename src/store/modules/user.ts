import {observable,action} from 'mobx'
import {login} from '../../service/index'
import {setToken,removeToken} from '../../utils/index'
//@observable是一个装饰器
//@action 表示行为  在里面做异步操作
let account = {};
if(window.localStorage.getItem('account')){
    account = JSON.parse(window.localStorage.getItem('account')+''); 
}
class User{
    @observable isLogin: boolean = false;
    @observable account: any = account;
    @action async login(form:any):Promise<any>{
        let result:any = await login(form);
        console.log(result,'result');
        if(result.code == 1){
            console.log(result)
            if(form.remember){
                console.log(form)
                window.localStorage.setItem('account',JSON.stringify(form));
            }else{
                window.localStorage.removeItem('account');
            }
            //判断是否七天免登陆
            if(form.autoLogin){
                setToken(result.token);
            }
        }
        return result;
      
        
    }
    //退出登陆
    @action async logout():Promise<any>{
        removeToken();
    }
}

export default User;