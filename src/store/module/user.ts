 import {observable,action} from "mobx"
 interface FormIcon {
     user_name:string,
     user_pwd:string
 }
 class User {
     @observable isLogin:boolean = false;
     @action async login(form:FormIcon):Promise<object> {
           console.log(form)
           if(form.user_name==='chenmanjie' && form.user_pwd ==='Chenmanjie123!'){
               return {code:1}
           }else{
               return {code:0}
           }
     }   
  
 }


 export default User;