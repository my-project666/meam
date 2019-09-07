import * as React from 'react'
class userQuestions extends React.Component{
       render(){
           return (
                <div className="box_userMessage">
                    <div className="box_userMessage_top">
                        <p>用户展示</p>
                    </div>
                    <div className="box_userMessage_biao">
                        <span>用户数据</span>
                        <span>身份数据</span>
                        <span>api接口权限</span>
                        <span>身份和api接口关系</span>
                        <span>试图接口权限</span>
                        <span>身份和试图权限关系</span>
                    </div>
                    <div className="box_userMessage_biao_b">
                        用户数据
                    </div>

                    <div className="box_userMessage_content">
                        <div className="box_userMessage_content_top">
                            <p>api权限名称</p>
                            <p>api权限url</p>
                            <p>api权限方法</p>
                        </div>
                    </div>

                    <div className="box_userMessage_content1">
                        <div className="box_userMessage_content_top1">
                            <p>获取所有的考试类型</p>
                            <p>api权限url</p>
                            <p>api权限方法</p>
                        </div>
                    </div>
                    <div className="box_userMessage_content1">
                        <div className="box_userMessage_content_top1">
                            <p>获取所有的考试类型</p>
                            <p>api权限url</p>
                            <p>api权限方法</p>
                        </div>
                    </div>
                    <div className="box_userMessage_content1">
                        <div className="box_userMessage_content_top1">
                            <p>获取所有的考试类型</p>
                            <p>api权限url</p>
                            <p>api权限方法</p>
                        </div>
                    </div>
                </div>
           )
       }
}



export default userQuestions;