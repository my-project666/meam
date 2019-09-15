import * as React from 'react';
import {Radio,Form,Button,Select,message} from 'antd';
const {Option} = Select;
import {inject,observer} from 'mobx-react'
import {WrappedFormUtils} from 'antd/lib/form/Form';
interface Props {
    form:WrappedFormUtils,
    user:any,
    allview:any,
    newSt:any
}
@observer
@inject('user')
class addAttempt extends React.Component<Props> {
    async componentDidMount(){
        const result = await this.props.user.allview()
        this.setState({
            list:result.data
        })
    }
    state={
        list:[]
    }
    handleSubmit = (e: any) => {
        e.preventDefault();
        this.props.form.validateFields(async (err, values) => {
             if(values.view_id==undefined){
                message.error('请选择类型',2)
             }else{
                 
             }
            //  console.log(values)
        });
    };
    add=()=>{

    }
    render() {
        const { getFieldDecorator } = this.props.form;
        const {list} = this.state;
        return (
            <div>
                <div className="addUser_input__1QXP8">
                    <Radio.Group defaultValue="a" buttonStyle="outline">
                        <Radio.Button style={ { border: "1px solid blue", color: "blue" } }><label>添加视图接口权限</label></Radio.Button>
                    </Radio.Group>
                </div>
                <Form onSubmit={ this.handleSubmit }>
                        <Form.Item style={{margin:0}}>
                            { getFieldDecorator('view_id', {
                            })(
                                <Select placeholder="请选择已有试图" style={{width:"150px"}} >
                                      {
                                         list.map((item:any)=>{
                                            return  <Option key={item.view_authority_id}
                                                        value={item.view_id} >
                                                        {item.view_authority_text}
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