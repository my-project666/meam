//引入子模块
import User from './modules/user';
import addQuestion from './modules/addQuestion'
import userAdds from './modules/userAdd';
import identitys from './modules/identityd';
import api_auth from './modules/api_auth';
import identitys_api from './modules/identity_api';
import identitys_view from './modules/identity_view';
import ClassManagements from './modules/classMangement';
import StudentManagements from './modules/studentManagement';
import Class_managements from './modules/classmanagement';
import grades from './modules/grade';
import pasegements from './modules/pasegement';
import addClass from './modules/addclss' //添加类型 
import typoLogyAll from './modules/typologyAll'  //考试类型
import classKc from './modules/classkc'  //考试类型实例
import questionClass from './modules/questionclass' // 问题类型
import userId from './modules/userid'  //获取用户ID
import addSt from './modules/addKs' //添加试题实例
import appRoval from './modules/daipi' //
import addShiti from './modules/addshijuan'  //添加试题
import shitiList from './modules/stlist'  //获取所有试题列表
import questionExam from './modules/exam'
//实列化模块
const user = new User();
const addquestion = new addQuestion()
const userAddse = new userAdds()
const identitysd = new identitys()
const api_auths =new api_auth()
const identitys_apis = new identitys_api()
const identitys_views = new identitys_view()
const ClassManagementd = new ClassManagements()
const StudentManagementd = new StudentManagements()
const Class_managementd = new Class_managements()
const graded = new grades()
const pasegementd = new pasegements()
const addclass = new addClass()  //添加类型 
const typologyall = new typoLogyAll()   //考试类型
const classkc = new classKc()  //考试类型实例
const questionclass = new questionClass()  // 问题类型
const userid = new userId()  //获取用户ID 实例
const addst = new addSt()  //添加试题实例
const approval = new appRoval()
const addshiti = new addShiti()  //添加考试
const shitilist = new shitiList()  // 获取试题列表
const questionexam = new questionExam() //试卷详情
export default{
    user,  //用户登录
    addquestion,
    addclass,  //添加班级
    typologyall, //所有考试类型
    classkc,  //添加课程
    questionclass,
    userid, //获取用火狐id
    addst,   //添加试题
    userAddse,
    identitysd,
    api_auths,
    identitys_apis,
    identitys_views,
    ClassManagementd,
    StudentManagementd,
    Class_managementd,
    graded,
    pasegementd,
    approval,
    addshiti,    //添加试题
    shitilist  ,  //所有试题列表
    questionexam  //试卷列表

}