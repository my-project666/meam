import * as React from 'react';
import {Tabs} from 'antd';
const { TabPane } = Tabs;
import Exhibition1 from '../../../component/Exhibition1';
function callback(key:any) {
    console.log(key);
  }
class userQuestions extends React.Component{
        state = {
            type1:"1",
            type2:"2",
            type3:'3',
            type4:'4',
            type5:"5",
            type6:'6'
        }
       render(){
           return (
                <div className="box_userMessage">
                    <div className="box_userMessage_top">
                        <p>用户展示</p>
                    </div>
                    <div className="box_userMessage_biao">
                    <Tabs onChange={callback} type="card">
                        <TabPane tab="用户数据" key={this.state.type1}>
                            <Exhibition1 typea={this.state.type1}/>
                        </TabPane>
                        <TabPane tab="身份数据" key={this.state.type2}>
                            <Exhibition1 typeb={this.state.type2}/>
                        </TabPane>
                        <TabPane tab="api接口权限" key={this.state.type3}>
                            <Exhibition1 typec={this.state.type3}/>
                        </TabPane>
                        <TabPane tab="身份和api接口关系" key={this.state.type4}>
                            <Exhibition1 typed={this.state.type4}/>
                        </TabPane>
                        <TabPane tab="试图接口权限" key={this.state.type5}>
                            <Exhibition1 typee={this.state.type5}/>
                        </TabPane>
                        <TabPane tab="身份和试图权限关系" key={this.state.type6}>
                            <Exhibition1 typef={this.state.type6}/>
                        </TabPane>
                    </Tabs>
                    </div>
                </div>
           )
       }
}
export default userQuestions;