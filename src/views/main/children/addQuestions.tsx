import * as React from 'react';
import Editor from 'for-editor';
import './css/addquestion.css';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import {WrappedFormUtils} from 'antd/lib/form/Form';
interface Props {
    form:WrappedFormUtils,
    abc?: string,
}
class addQuestions extends React.Component<Props> {
    handleSubmit = (e:React.FormEvent) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };
    state={
        value: ''
    }
    
   handleChange(value:any) {
        console.log(value)
        this.setState({
          value
        })
      }
    render() {
        const { getFieldDecorator } = this.props.form;
        const { value } = this.state
        return (
            <div className="addQuestion_wrap">
                <h2>添加试题</h2>
                <div className="addQuestion_conent">
                    <p className="addQuestion_title">题目信息</p>
                    <div className="addQuestion_subject">
                        <Form onSubmit={ this.handleSubmit }>
                            <Form.Item>
                                <span>题干</span><br/>
                                { getFieldDecorator('username', {
                                    rules: [{ required: true, message: 'Please input your title!' }],
                                })(
                                    <Input
                                        style={{width:"500px",height:"40px"}}
                                        placeholder="请输入题目标题"
                                    />,
                                ) }
                            </Form.Item>
                            <span>题目主题</span>
                            <Editor value={value} onChange={()=> this.handleChange(5)} />
                            <Form.Item>
                                <Button type="primary" htmlType="submit" className="login-form-button">
                                    Log in
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </div>
        )
    }
}
export default  Form.create({ name: 'normal_login' })(addQuestions);