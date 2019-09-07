//引入子模块
import User from './modules/user';
import addQuestion from './modules/addQuestion';
//实列化模块
var user = new User();
var addquestion = new addQuestion();
export default {
    user: user,
    addquestion: addquestion
};
//# sourceMappingURL=index.js.map