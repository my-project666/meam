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
export default{
    user,
    addquestion,
    userAddse,
    identitysd,
    api_auths,
    identitys_apis,
    identitys_views,
    ClassManagementd,
    StudentManagementd,
    Class_managementd,
    graded,
    pasegementd
}