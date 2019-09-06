import * as React from 'react';
import './index.css';
import { Menu, Icon} from 'antd';
import img1 from '../../images/img1.jpg'
const { SubMenu } = Menu;
class LoginPage extends React.Component {
    state = {
        theme: 'dark',
        current: '1',
      };
    
      changeTheme = (value:any) => {
        this.setState({
          theme: value ? 'dark' : 'light',
        });
      };
    
      handleClick = (e:any) => {
        console.log('click ', e);
        this.setState({
          current: e.key,
        });
      };

    render() {
        return (
            <div className="box">
                <div className="box_top">
                    <div className="box_top_img">
                       <img src={img1} alt=""/> 
                    </div>
                    <div className="box_top_right">
                        <p className="box_top_right_p"></p>
                        <span>kaifaxiangmu</span>  
                    </div>
                </div>
                <div>
                    <div>
                        <Menu
                          
                            onClick={this.handleClick}
                            style={{ width: 256 }}
                            defaultOpenKeys={['sub1']}
                            selectedKeys={[this.state.current]}
                            mode="inline"
                        >
                            <SubMenu
                                key="sub1"
                                title={
                                    <span>
                                        <Icon type="mail" />
                                        <span>试题管理</span>
                                    </span>
                                }
                            >
                                <Menu.Item key="1">添加试题</Menu.Item>
                                <Menu.Item key="2">考试分类</Menu.Item>
                                <Menu.Item key="3">查看试题</Menu.Item>
                            </SubMenu>
                            <SubMenu
                                key="sub2"
                                title={
                                    <span>
                                        <Icon type="appstore" />
                                        <span>用户管理</span>
                                    </span>
                                }
                            >
                                <Menu.Item key="5">添加用户</Menu.Item>
                                <Menu.Item key="6">用户展示</Menu.Item>
                            </SubMenu>
                            <SubMenu
                                key="sub4"
                                title={
                                    <span>
                                        <Icon type="setting" />
                                        <span>考试管理</span>
                                    </span>
                                }
                            >
                                <Menu.Item key="9">添加考试</Menu.Item>
                                <Menu.Item key="10">试卷列表</Menu.Item>
                            </SubMenu>
                            <SubMenu
                                key="sub5"
                                title={
                                    <span>
                                        <Icon type="setting" />
                                        <span>班级管理</span>
                                    </span>
                                }
                            >
                                <Menu.Item key="11">班级管理</Menu.Item>
                                <Menu.Item key="12">教室管理</Menu.Item>
                                <Menu.Item key="13">学生管理</Menu.Item>
                            </SubMenu>
                            <SubMenu
                                key="sub6"
                                title={
                                    <span>
                                        <Icon type="setting" />
                                        <span>阅卷管理</span>
                                    </span>
                                }
                            >
                                <Menu.Item key="14">待批班级</Menu.Item>
                            </SubMenu>
                        </Menu>
                    </div>
                </div>
            </div>
        )
    }
}
export default LoginPage;