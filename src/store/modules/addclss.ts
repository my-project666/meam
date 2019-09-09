import {observable,action} from 'mobx';
import {addclass} from '../../service/index'
class addClass{
    @observable isaddQuestion:boolean = false;
    @action async addClass(params:any):Promise<any>{
         if(params.text.trim()===''){
              return {
                  msg:'内容不能为空'
              }
         }else{
             const result = await addclass(params)
             console.log(result)
             return result;
         }
    }
}



export default addClass;