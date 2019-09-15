import * as React from 'react';
import {inject,observer} from 'mobx-react';
import {Form,Radio,Button,Input,message} from 'antd';
import {WrappedFormUtils} from 'antd/lib/form/Form'
interface Props{
    user:any,
    addPort:any,
    form:WrappedFormUtils
}
@observer
@inject('user')
class addPort extends React.Component<Props>{
    handleSubmit = (e: any) => {
        e.preventDefault();
        this.props.form.validateFields(async (err, values) => {
              if(values.api_authority_text==undefined||values.api_authority_url==undefined||values.api_authority_method==undefined){
                  message.error('请填写内容')
              }else{
                  const result = await this.props.user.addPort(values)
                  if(result.code==0){
                      message.error(result.msg,2)
                  }else{
                      message.success(result.msg,2)
                  }
              }    
        });
    };
     render(){
         const {getFieldDecorator} = this.props.form
         return (
             <div>
                 <div className="addUser_input__1QXP8">
                    <Radio.Group defaultValue="a" buttonStyle="outline">
                        <Radio.Button style={ { border: "1px solid blue", color: "blue" } }><label>添加api接口权限</label></Radio.Button>
                    </Radio.Group>
                </div>
                <Form onSubmit={ this.handleSubmit }>
                        <Form.Item style={{margin:0}}>
                            { getFieldDecorator('api_authority_text', {
                            })(
                                <Input  placeholder="请输入api接口权限名称"/>,
                            ) }
                        </Form.Item>
                        <Form.Item style={{margin:0}}>
                            { getFieldDecorator('api_authority_url', {
                            })(
                                <Input  placeholder="请输入api接口权限url"/>,
                            ) }
                        </Form.Item>
                        <Form.Item style={{margin:0}}>
                            { getFieldDecorator('api_authority_method', {
                            })(
                                <Input  placeholder="请输入api接口权限方法"/>,
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

export default Form.create({ name: 'normal_login' })(addPort);