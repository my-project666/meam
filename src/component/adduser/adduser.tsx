import * as React from 'react';
import { WrappedFormUtils } from 'antd/lib/form/Form';
import { Layout, Tabs, Input, Select, Form,Button,message} from 'antd';
import { inject, observer } from 'mobx-react'
import cons from 'src/router/cons';
const { TabPane } = Tabs
const {Option} = Select

interface Propt {
    form: WrappedFormUtils,
    user?: any,
    userAdd:any,
    userAddse:any,
    userGen:any,
    idenTity:any,
    
}
@observer
@inject('user','userAddse')
class AddUser extends React.Component<Propt> {
    async componentDidMount(){
        const result=await this.props.userAddse.userAdd()
        const resq=await this.props.user.idenTity()
        this.setState({
            list:result.data,
            data:resq.data
        })
    }
    state={
        list:[],
        data:[]
    }
    handleSubmit = (e:any) => {
        e.preventDefault();
        this.props.form.validateFields(async (err, values) => {
            
          if (values.user_name==undefined || values.user_pwd==undefined) {
            message.error('请填写参数',1)
          }else{
               const result=await this.props.user.addUser(values)
               if(result.code===0){
                   const msg = result.msg
                   message.error(msg,2)
               }else{
                   message.success('用户添加成功',1)
               }
          }
        });
      };
      handleSubmit1 = (e:any) =>{
          e.preventDefault();
          this.props.form.validateFields(async (err,values)=>{
                 const results = await this.props.user.userGen(values)
                 if(results.code===1){
                     const result=await this.props.userAddse.userAdd()
                     this.setState({
                        list:result.data
                    })
                     message.success(results.msg,2)
                 }else{
                     message.error(results.msg,2)
                 }
          })
      }
    render() {
        const {getFieldDecorator} = this.props.form;
        const {list,data} = this.state
        return (
            <Tabs type="card">
                <TabPane className="tabs" tab="添加用户" key="1">
                    <Form  onSubmit={ this.handleSubmit }>
                        <Form.Item  style={{margin:0}}>
                            { getFieldDecorator('user_name', {
                                // rules: [{ required: true, message: '' }],
                            })(<Input  placeholder="请输入账号"/>) }
                        </Form.Item>
                        <Form.Item  style={{margin:0}}>
                            { getFieldDecorator('user_pwd', {
                               // rules: [{ required: true, message: '' }],
                            })(<Input placeholder="请输入密码" />) }
                        </Form.Item>
                        <Form.Item  style={{margin:0,width:"150px"}}>
                            { getFieldDecorator('identity_id', {
                               // rules: [{ required: true, message: '' }],
                            })(
                                <Select
                                    placeholder="请选择身份id"
                                >
                                    {
                                        data.map((item:any)=>(
                                            <Option key={item.identity_id} value={item.identity_id}>{item.identity_text}</Option>
                                        ))
                                    }
                                </Select>,
                            ) }
                        </Form.Item>
                        <Form.Item  style={{margin:0,marginTop:"5px"}}>
                            <Button type="primary" htmlType="submit" style={{width:"100px",marginRight:'15px'}}>
                                 确定
                           </Button>
                           <Button>
                                重置
                           </Button>
                        </Form.Item>
                    </Form>
                </TabPane>
                <TabPane className="tab" tab="跟新用户" key="2">
                <Form  onSubmit={ this.handleSubmit1 }>
                <Form.Item  style={{margin:0,width:"150px"}}>
                            { getFieldDecorator('user_id', {
                               // rules: [{ required: true, message: '' }],
                            })(
                                <Select placeholder="请选择身份id">
                                {
                                    list.map((item:any)=>(
                                        <Option key={item.user_id} value={item.user_id}>
                                              {item.user_name}
                                        </Option>
                                    ))
                                }
                                </Select>,
                            ) }
                        </Form.Item>
                        <Form.Item  style={{margin:0}}>
                            { getFieldDecorator('user_name', {
                                // rules: [{ required: true, message: '' }],
                            })(<Input  placeholder="请输入账号"/>) }
                        </Form.Item>
                        <Form.Item  style={{margin:0}}>
                            { getFieldDecorator('user_pwd', {
                               // rules: [{ required: true, message: '' }],
                            })(<Input placeholder="请输入密码" />) }
                        </Form.Item>
                        <Form.Item  style={{margin:0,width:"150px"}}>
                            { getFieldDecorator('identity_id', {
                               // rules: [{ required: true, message: '' }],
                            })(
                                <Select placeholder="请选择身份id" >
                                    {
                                        data.map((item:any)=>(
                                            <Option key={item.identity_id} value={item.identity_id}>{item.identity_text}</Option>
                                        ))
                                    }
                                </Select>,
                            ) }
                        </Form.Item>
                        <Form.Item  style={{margin:0,marginTop:"5px"}}>
                            <Button type="primary" htmlType="submit" style={{width:"100px",marginRight:'15px'}}>
                                 确定
                           </Button>
                           <Button>
                                重置
                           </Button>
                        </Form.Item>
                    </Form>
                </TabPane>
            </Tabs>
        )
    }
}
export default Form.create({ name: 'coordinated' })(AddUser);