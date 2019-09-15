import * as React from 'react';
import { Input, Form, Button, message, Radio } from 'antd';
import { inject, observer } from 'mobx-react'
import { WrappedFormUtils } from 'antd/lib/form/Form';
interface Props {
    form: WrappedFormUtils,
    user:any,
    identity:any
}
@observer
@inject('user')
class userIdentity extends React.Component<Props> {
    handleSubmit = (e: any) => {
        e.preventDefault();
        this.props.form.validateFields(async (err, values) => {
               if(values.identity_text==undefined){
                   message.error('请填写内容')
               }else{
                  const res=await this.props.user.identity(values)
                  if(res.code===0){
                      message.error(res.msg,2)
                  }else{
                       message.success(res.msg,1)
                  }
               }
        });
    };
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="warpers" >
                <div className="addUser_input__1QXP8">
                    <Radio.Group defaultValue="a" buttonStyle="outline">
                        <Radio.Button style={ { border: "1px solid blue", color: "blue" } }><label>添加身份</label></Radio.Button>
                    </Radio.Group>
                </div>
                    <Form onSubmit={ this.handleSubmit }>
                        <Form.Item style={{margin:0}}>
                            { getFieldDecorator('identity_text', {
                            })(
                                <Input  placeholder="请输入身份名称"/>,
                            ) }
                        </Form.Item>

                        <Form.Item>
                                 <Button type="primary" htmlType="submit"  style={{width:"100px",marginRight:'15px'}}>
                                     确定
                                 </Button>
                                 <Button>
                                     重置
                                 </Button>
                        </Form.Item>
                    </Form>
            </div>
        )
    }
}
export default Form.create({ name: 'normal_login' })(userIdentity)