 import * as React from 'react';
 import {WrappedFormUtils} from 'antd/lib/form/Form';
 import { Form, Icon, Input, Button, Checkbox } from 'antd';
 import {inject, observer} from 'mobx-react';
 import './index.css'
 interface Props {
   form: WrappedFormUtils,
   user: any,
   abc?: string
 }
@inject("user")
@observer
 class Login extends React.Component<Props> {
    handleSubmit = (e:React.FormEvent ) => {
        e.preventDefault();
        this.props.form.validateFields(async (err, values) => {
          if (!err) {
             const result = await this.props.user.login(values)
             console.log(result)
          }
        });
      };
     render() {
      const { getFieldDecorator } = this.props.form;
        // console.log(this.props.user.login)
         return (
             
              <Form onSubmit={this.handleSubmit} className="login-form">
                 {/* <span>{this.props.user.isLogin?'true':'false'}</span> */}
                <Form.Item>
                  {getFieldDecorator('user_name', {
                    validateTrigger:"onBlur",
                    rules: [
                      { required: true, message: 'Please input your username!' },
                      {
                        validator:(rule,value,callback)=>{
                            if(/[a-z]{5,20}/.test(value)){
                               callback()
                            }else{
                              callback('Please input your username!')
                            }
                        }
                      }
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
                    validateTrigger:"onBlur",
                    rules: [
                      { required: true, message: 'Please input your Password!' },
                      {
                        validator:(rule,value,callback)=>{
                          if(/^(?![0-9]+$)(?![a-z]+$)(?![A-Z]+$)(?!([^(0-9a-zA-Z)])+$).{6,16}$/.test(value)){
                             callback()
                          }else{
                            callback('Please input your username!')
                          }
                        }
                      }
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
                  <a className="login-form-forgot" href="">
                    Forgot password
                  </a>
                  <Button type="primary" htmlType="submit" className="login-form-button">
                    Log in
                  </Button>
                  Or <a href="">register now!</a>
                </Form.Item>
              </Form>
         )
     }
 }

 export default  Form.create()(Login)