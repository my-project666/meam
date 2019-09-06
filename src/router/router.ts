// 一级路由
import Login from '../views/login';
import Main from '../views/main'
import addQuestions from '../views/main/children/addQuestions' //添加试题
import classQuestions from '../views/main/children/classQuestions' //试题分类
import lookQuestion from '../views/main/children/lookQuestion' //产看试题
import Adduser from '../views/main/children/adduser'; //添加用户
import userMessage from '../views/main/children/userMessage' //用户信息
import addExamination from "../views/main/children/addExamination" //添加考试
import questionsList from '../views/main/children/questionsList' //试题列表
import classManagement from '../views/main/children/classManagement' //班级管理
import classroomManagement from '../views/main/children/classroomManagement' //教室管理
import studentManaage from '../views/main/children/studentManaage' //学生管理
import awaitingRoom from '../views/main/children/awaitingRoom' //待批班级
// 二级路由
// import Content from '../components/Content';

export default {
    routes: [
        {
        path: '/main',
        component: Main,
        children: [
           { 
              path:"/main/addquestions",
              component:addQuestions 
           },
           {
              path:"/main/classquestions",
              component:classQuestions
           },
           {
              path:"/main/lookquestion",
              component:lookQuestion
           },
           { 
              path:"/main/adduser",
              component:Adduser
           },
           { 
              path:'/main/usermessage',
              component:userMessage
           },
           {
              path: '/main/addExamination',
              component:addExamination
           },
           {
              path:"/main/questionslist",
              component:questionsList
           },
           {
              path:'/main/classmanagement',
              component:classManagement
           },
           {
             path:"/main/classroommanagement",
             component:classroomManagement
           },
           {
             path:"/main/studentmanaage",
             component:studentManaage
           },
           {
             path:"/main/awaitingroom",
             component:awaitingRoom
           },
           {
             from:'/main',
             to:"/main/addquestions"
           }
        ] 
    },
    {
        path: '/login',
        component: Login
    },
    {
       from:"/login",
       to:"/login"
    }
  ]
}