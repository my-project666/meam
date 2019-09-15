
import {action,observable} from "mobx";
import {delelate} from '../../service';
import cons from 'src/router/cons';
//试题详情
class deleLate{
    @observable istypologyAll:boolean  = false;
    @action async deleLate(params:any):Promise<any>{
        //  console.log(params)
          const result = await delelate(params)
          return result;
    }
}



export default deleLate;