import * as React from 'react';
import { Form,Icon,Input,Button,Checkbox, message} from 'antd';
import {WrappedFormUtils} from 'antd/lib/form/Form';
import './index.css';
import {inject,observer} from 'mobx-react';
//rules 就是校验规则
//validator 自定义校验  function(rule,value,callback)
interface Props {
    form:WrappedFormUtils,
    user:any,
    history:any,
    abc?: string
}
@observer
@inject('user')
//@Form.create
class LoginPage extends React.Component<Props>{
  //FormEvent就是一个类型的声明
    handleSubmit = (e:React.FormEvent) => {
        e.preventDefault();
        this.props.form.validateFields(async(err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
            const {code,msg} =await this.props.user.login(values);
            if(code ===1){
                //跳转路由
                this.props.history.replace('/main');
            }else{
                //提示错误
                message.error(msg);
            }
          }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        const {user_name,user_pwd} = this.props.user.account;
        return(
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item>
              {getFieldDecorator('user_name', {
                validateTrigger:user_name,
                rules: [
                  {validator:(ruler,value,callback)=>{
                    if(/[a-z{5,20}]/.test(value)){
                      callback()
                    }else{
                      callback('Please input valid username!')
                    }
                  }}
                ],
              })(
                <Input
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="Username"
                />,
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('user_pwd', {
                validateTrigger:user_pwd,
                rules: [
                  {validator:(ruler,value,callback)=>{
                    if(/^(?![a-z]+$)(?![A-Z]+$)(?!([^(a-zA-Z\!\*\.\#)])+$)^.{8,16}$/.test(value)){
                      callback()
                    }else{
                      callback('Please input valid password!')
                    }
                  }}
                ],
              })(
                <Input
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="password"
                  placeholder="Password"
                />,
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: true,
              })(<Checkbox>Remember me</Checkbox>)}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('autoLogin', {
                valuePropName: 'checked',
                initialValue: true,
              })(<Checkbox>Auto login in 7 days</Checkbox>)}
            
              <Button type="primary" htmlType="submit" className="login-form-button">
                Log in
              </Button>
           
            </Form.Item>
          </Form>
        );
      }
}   
export default Form.create({ name: 'normal_login' })(LoginPage);
