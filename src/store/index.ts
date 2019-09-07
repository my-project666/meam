//引入子模块
import User from './modules/user';
import addQuestion from './modules/addQuestion'
import addClass from './modules/addclss'


//实列化模块
const user = new User();
const addquestion = new addQuestion()
const addclass = new addClass()
export default{
    user,
    addquestion,
    addclass
}