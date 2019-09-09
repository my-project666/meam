import * as React from 'react';
import Editor from 'for-editor';
import './css/addquestion.css';
import { Form, Icon, Input, Button, Checkbox, Select, Modal } from 'antd';
const { Option } = Select
import { WrappedFormUtils } from 'antd/lib/form/Form';
import { inject, observer } from 'mobx-react'
import { classkc } from 'src/service';
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
                this.state.visible;
                // console.log(params)
                // console.log( await this.props.addst.addSt(params))
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
   
    showModal = () => {
        this.setState({
          visible: true,
        });
      };
      handleOk = (e:any) => {
        console.log(e);
        this.setState({
          visible: false,
        });
      };
    
      handleCancel = (e:any)=> {
        console.log(e);
        this.setState({
          visible: false,
        });
      };
    handleChange(value: any) {
        console.log(value)
        this.setState({
            value
        })
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
                                 onClick={this.showModal}
                                 
                                 >
                                    提交
                                </Button>
                            </Form.Item>
                            <Modal
                                    visible={ this.state.visible }
                                    onOk={ this.handleOk }
                                    onCancel={ this.handleCancel }
                                    cancelText="取消"
                                    okText="确定"
                                >
                                   <p>你确定要添加这道题吗？</p>
                                   <div>真的要添加吗？</div>
                                </Modal>
                        </Form>
                    </div>
                </div>
            </div>
        )
    }
    async componentDidMount() {
        const result = await this.props.typologyall.typoLogyall()
        this.setState({
            classList: result.data
        })
        const classKc = await this.props.classkc.classKc()
        this.setState({
            classKc: classKc.data
        })
        const questionclass = await this.props.questionclass.questionClass()
        this.setState({
            questionClass: questionclass.data
        })
        const userid = await this.props.userid.userId()
        this.setState({
            userId: userid.data.user_id
        })
    }
}
export default Form.create({ name: 'normal_login' })(addQuestions);