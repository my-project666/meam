import {observable,action} from 'mobx'
import {login,adduser,gen,identity,useridentity,addport} from '../../service/index'
import {setToken,removeToken} from '../../utils/index'
import cons from 'src/router/cons';
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
       // console.log(result,'result');
        if(result.code == 1){
            console.log(result)
            if(form.remember){
               // console.log(form)
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
    // 添加用户
    @action async addUser(params:any):Promise<any>{
         const  result = await adduser(params)
         return result;
    }
    //跟新用户信息
    @action async userGen(params:any):Promise<any>{
       const result = await gen(params)
       return result;
    }
    //用户身份数据
    @action async idenTity():Promise<any>{
         const result = await identity()
         return result;
    }
    //添加身份
    @action async identity(params:any):Promise<any>{
        const result = await useridentity(params)
        return result
    }
    //添加接口权限
    @action async addPort(params:any):Promise<any>{
        const result = await addport(params);
        return result;
    }
}

export default User;