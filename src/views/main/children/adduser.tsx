import * as React from 'react'
import { Layout, Tabs, Input, Radio ,Button,Form, Select,} from 'antd';
const { TabPane } = Tabs
const { Content } = Layout
import './css/adduser.css';

class Adduser extends React.Component {
    onChange = (e: any) => {
        console.log(e);
    };
    submit = (e:any) =>{
        console.log(e.target.value)
    }
    render() {
        return (

            <div className="adduser">
                <div className="adduser_layout">
                    <h2 className="adduser_title">添加用户</h2>
                    <div className="adduser_cont">

                        <div className="adduser_con">
                            <div className="addUser_wrapper__3qQDv">
                                <Tabs type="card">
                                    <TabPane className="tabs" tab="添加用户" key="1">
                                        <Input placeholder="请输入账号" allowClear onChange={ this.onChange } />
                                        <Input placeholder="请输入密码" allowClear onChange={ this.onChange } />
                                    </TabPane>

                                    <TabPane className="tabs" tab="跟新用户" key="2">

                                    </TabPane>
                                </Tabs>
                            </div>
                            <div className="addUser_wrapper__3qQDv">
                                <Radio.Group defaultValue="a" buttonStyle="outline">
                                    <Radio.Button value="a">添加身份</Radio.Button>
                                </Radio.Group>
                                <Input placeholder="请输入身份名称" onChange={ this.onChange } />
                                <Button type="primary" className="btns" onClick={this.submit}>确定</Button>
                                <Button>重置</Button>

                            </div>
                            <div className="addUser_wrapper__3qQDv">

                            </div>
                            <div className="addUser_wrapper__3qQDv">

                            </div>
                            <div className="addUser_wrapper__3qQDv">

                            </div>
                            <div className="addUser_wrapper__3qQDv">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}



export default Adduser;