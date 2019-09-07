import {observable,action} from 'mobx';
import {addquestion} from '../../service/index'

class addQuestion{
    @observable isaddQuestion:boolean = false;
    @action async addQuestion():Promise<any>{
          const result = await addquestion()
          
          return result
    }
}



export default addQuestion;