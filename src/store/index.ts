//引入子模块
import User from './modules/user';
import addQuestion from './modules/addQuestion'



//实列化模块
const user = new User();
const addquestion = new addQuestion()
export default{
    user,
    addquestion
}