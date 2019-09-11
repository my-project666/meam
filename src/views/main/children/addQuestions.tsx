import * as React from 'react'
import { Form, Icon, Input, Button, Checkbox, Select, message } from 'antd';
import Editor from 'for-editor';
import './css/addquestion.css';
const { Option } = Select
import { WrappedFormUtils } from 'antd/lib/form/Form';
import { inject, observer } from 'mobx-react'
interface Props {
    form: WrappedFormUtils,
    abc?: string,
    typologyall: any,
    exam_id: any,
    classkc: any,
    questionclass: any,
    userid: any,
    addst: any
}
@observer
@inject('typologyall', 'classkc', 'questionclass', 'userid', 'addst')
class addQuestions extends React.Component<Props> {
    handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        this.props.form.validateFields(async (err, values) => {
            if (!err) {
                const params = { ...values, user_id: this.state.userId }
                const result= await this.props.addst.addSt(params)
                console.log(result)
                if(result.code===1){
                    message.success(result.msg);
                }
            }
        });
    };
    state = {
        value: '',
        classList: [],
        classKc: [],
        questionClass: [],
        userId: '',
        visible: false
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        const { value, classList, classKc, questionClass } = this.state;
        return (
            <div className="addQuestion_wrap">
                <h2>添加试题</h2>
                <div className="addQuestion_conent">
                    <p className="addQuestion_title">题目信息</p>
                    <div className="addQuestion_subject">
                        <Form onSubmit={ this.handleSubmit }>
                            <Form.Item>
                                <span>题干</span><br />
                                { getFieldDecorator('questions_stem', {
                                    rules: [{ required: true, message: '请填写内容' }],
                                })(
                                    <Input
                                        style={ { width: "500px", height: "40px" } }
                                        placeholder="请输入题目标题"
                                    />,
                                ) }
                            </Form.Item>
                            <span>题目主题</span>
                            <Form.Item label="">
                                { getFieldDecorator('title', {
                                    rules: [{ required: true, message: '请填写内容' }],
                                })(
                                    <Editor />
                                ) }
                            </Form.Item>
                            <Form.Item label="请选择考试类型">
                                { getFieldDecorator('exam_id', {
                                    rules: [{ required: true, message: 'Please select your gender!' }],
                                })(
                                    <Select
                                        placeholder="周考1"
                                        style={ { width: "200px" } }
                                    >
                                        {
                                            classList.map((item: any) => (
                                                <Option key={ item.exam_id } value={ item.exam_id }>{ item.exam_name }</Option>
                                            ))
                                        }
                                    </Select>,
                                ) }
                            </Form.Item>
                            <Form.Item label="请选择课程类型：">
                                { getFieldDecorator('subject_id', {
                                    rules: [{ required: true, message: 'Please select your gender!' }],
                                })(
                                    <Select
                                        placeholder="javaSript上"
                                        style={ { width: "200px" } }
                                    >
                                        {
                                            classKc.map((item: any) => (
                                                <Option key={ item.subject_id } value={ item.subject_id }>{ item.subject_text }</Option>
                                            ))
                                        }
                                    </Select>,
                                ) }
                            </Form.Item>
                            <Form.Item label="请选择题目类型：">
                                { getFieldDecorator('questions_type_id', {
                                    rules: [{ required: true, message: 'Please select your gender!' }],
                                })(
                                    <Select
                                        placeholder="简答题"
                                        style={ { width: "200px" } }
                                    >
                                        {
                                            questionClass.map((item: any) => (
                                                <Option key={ item.questions_type_id } value={ item.questions_type_id }>{ item.questions_type_text }</Option>
                                            ))
                                        }
                                    </Select>,
                                ) }
                            </Form.Item>
                            <span>答案信息</span>
                            <Form.Item label="">
                                { getFieldDecorator('questions_answer', {
                                    rules: [{ required: true, message: '请填写内容' }],
                                })(
                                    <Editor />
                                ) }
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" htmlType="submit" 
                                 className="login-form-button"
                                 style={ { marginTop: "30px" } }  
                                 >
                                    提交
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </div>
        )
    }
    async componentDidMount() {
        const result = await this.props.typologyall.typoLogyall()
        const classKc = await this.props.classkc.classKc()
        const questionclass = await this.props.questionclass.questionClass()
        const userid = await this.props.userid.userId()
        this.setState({
             classList: result.data,
             classKc: classKc.data,
             questionClass: questionclass.data,
             userId: userid.data.user_id
        })
    }
}
export default Form.create({ name: 'normal_login' })(addQuestions);