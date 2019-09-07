import * as React from 'react';
import {LookQ,subject,condition} from '../../../api/lookQ';
class lookQuestions extends React.Component {
    state = {
        data:[],
        //课程
        curriculum:[],
        condition:[]
    }
    componentDidMount(){
        //获取所有的考试类型
        LookQ().then(res=>{
            this.setState({
                data:res.data
            })
        })
        //获取所有的课程
        subject().then(res=>{
            this.setState({
                curriculum:res.data
            })
        })
        //按条件获取试题
        condition().then(res=>{
            console.log(res.data,'res');
            this.setState({
                condition:res.data
            })
        })
    }
    render() {
        return (
            <div className="look_box">
                <div className="look_box_top">
                    <p>查看试题</p>
                </div>
                <div className="look_box_cha">
                    <div className="look_box_cha_top">
                        <div className="look_box_cha_top_l">
                            <h4>课程类型:</h4>
                        </div>
                        <div className="look_box_cha_top_r">
                            <ul>
                                {
                                    this.state.curriculum.map((item:any)=>{
                                        return <li key={item.subject_id}>{item.subject_text}</li>
                                    })
                                }
                                
                            
                            </ul>
                        </div>
                    </div>
                    <div className="look_box_cha_buttom">
                        <h4>考试类型：</h4>
                        
                            <select className="look_box_cha_buttom_select">
                                {
                                   this.state.data && this.state.data.map((item:any)=>{
                                        return <option key={item.exam_id}>{item.exam_name}</option>
                                    })
                                }
                                
                            </select>
                       
                        <h4>题目类型：</h4>
                       
                            <select className="look_box_cha_buttom_select">
                                <option value="简答题">简答题</option>
                                <option value="代码阅读题">代码阅读题</option>
                                <option value="代码补全">代码补全</option>
                                <option value="修改bug">修改bug</option>
                                <option value="手写代码">手写代码</option>
                            </select>
                     
                        <button>查询</button>
                    </div>
                </div>
                <div className="look_box_content">
                    {
                        this.state.condition.map((item:any,index:number)=>{
                            return <div className="look_box_content_con" key={index}>
                                <div className="look_box_content_con_left">
                                    <p>{item.title}</p>
                                    <div className="look_box_content_con_left_spn">
                                        <span className="spn1">{item.questions_type_text}</span>
                                        <span className="spn2">{item.subject_text}</span>
                                        <span className="spn3">{item.exam_name}</span>
                                    </div>
                                    <div className="look_box_content_con_left_p">
                                        <p>{item.user_name}发布</p>
                                    </div>
                                </div>
                                <div className="look_box_content_con_right">
                                    编辑
                                </div>
                            </div>
                        })
                    }
                    

             

                </div>
            </div>
        )
    }
}

export default lookQuestions;

