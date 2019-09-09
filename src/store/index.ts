//引入子模块
import User from './modules/user';
import addQuestion from './modules/addQuestion'
import addClass from './modules/addclss'
import typoLogyAll from './modules/typologyAll'
import classKc from './modules/classkc'
import questionClass from './modules/questionclass'
import userId from './modules/userid'
import addSt from './modules/addKs'
//实列化模块
const user = new User();
const addquestion = new addQuestion()
const addclass = new addClass()
const typologyall = new typoLogyAll()
const classkc = new classKc()
const questionclass = new questionClass()
const userid = new userId()
const addst = new addSt()
export default{
    user,
    addquestion,
    addclass,
    typologyall,
    classkc,
    questionclass,
    userid,
    addst
}