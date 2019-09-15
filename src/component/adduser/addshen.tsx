import * as React from 'react';
import {Radio,Form,Button,Select,message} from 'antd';
const {Option} = Select;
import {inject,observer} from 'mobx-react'
import {WrappedFormUtils} from 'antd/lib/form/Form';
interface Props {
    form:WrappedFormUtils,
    user:any,
    idenTity:any,
    shenalla:any,
    addshenFen:any
}
@observer
@inject('user')
class addAttempt extends React.Component<Props> {
    async componentDidMount(){
        const result = await this.props.user.idenTity();
        const res = await this.props.user.shenall()
        console.log(res)
        this.setState({
            list:result.data,
            data:res.data
        })
    }
    state={
        list:[],
        data:[]
    }
    handleSubmit = (e: any) => {
        e.preventDefault();
        this.props.form.validateFields(async (err, values) => {
             if(values.identity_id ==undefined || values.api_authority_id==undefined){
                message.error('请选择类型',2)
             }else{
                const result = await this.props.user.addshenFen(values)
                if(result.code===0){
                    message.error(result.msg,1)
                }else{
                    message.success(result.msg,1)
                }
             }
        });
    };
    render() {
        const { getFieldDecorator } = this.props.form;
        const {list,data} = this.state;
        return (
            <div>
                <div className="addUser_input__1QXP8">
                    <Radio.Group defaultValue="a" buttonStyle="outline">
                        <Radio.Button style={ { border: "1px solid blue", color: "blue" } }><label>给身份设置api接口权限</label></Radio.Button>
                    </Radio.Group>
                </div>
                <Form onSubmit={ this.handleSubmit }>
                        <Form.Item style={{margin:0}}>
                            { getFieldDecorator('identity_id', {
                            })(
                                <Select placeholder="请选择已有试图" style={{width:"150px"}} >
                                      {
                                          list.map((item:any)=>{
                                              return <Option key={item.identity_id} value={item.identity_id}>
                                                  {item.identity_text}
                                              </Option>
                                          })
                                      }
                                </Select>
                            ) }
                        </Form.Item>
                        <Form.Item style={{margin:0}}>
                            { getFieldDecorator('api_authority_id', {
                            })(
                                <Select placeholder="请选择已有试图" style={{width:"150px"}} >
                                      {
                                          data.map((item:any)=>{
                                              return <Option key={item.api_authority_id} value={item.api_authority_id}>
                                                  {item.api_authority_text}
                                              </Option>
                                          })
                                      }
                                </Select>
                            ) }
                        </Form.Item>
                        <Form.Item style={{marginTop:"10px"}}>
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
export default Form.create({ name: 'normal_login' })(addAttempt) ;