import * as React from 'react'
import { InputNumber, Form, DatePicker, Button, Select, Input } from 'antd';
import { WrappedFormUtils } from 'antd/lib/form/Form';
import { inject, observer } from "mobx-react"
const { Option } = Select
const { RangePicker } = DatePicker;
interface Props {
    form: WrappedFormUtils,
    typologyall: any,
    classkc: any,
    addshiti:any
}
@observer
@inject('typologyall', 'classkc','addshiti')
class addExamination extends React.Component<Props> {
    handleSubmit = (e: any) => {
        e.preventDefault();
        this.props.form.validateFields(async (err, values) => {
            if (!err) {
                const params = { ...values, start_time: values.start_time * 1, end_time: values.end_time * 1 }
                console.log(await this.props.addshiti.addShiti(params))
            }
        });
    };
    async componentDidMount() {
       
        const result = await this.props.typologyall.typoLogyall()
        const reqs = await this.props.classkc.classKc()
        this.setState({
            list: result.data,
            clas: reqs.data
        })  
    }
    state = {
        list: [],
        clas: []
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        const config = {
            rules: [{ type: 'object', required: true, message: 'Please select time!' }],
        };
        const { list, clas } = this.state;
        return (
            <div className="box_addExam">
                <div className="box_addExam_top">
                    <p>添加考试</p>
                </div>
                <div className="box_addExam_con">
                    <Form onSubmit={ this.handleSubmit }>
                        <Form.Item label="试卷名称：" >
                            { getFieldDecorator('title', {
                                rules: [{ required: true, message: '请输入名称' }],
                            })(<Input style={ { width: "300px" } } />) }
                        </Form.Item>
                        <Form.Item label="选择考试类型：">
                            { getFieldDecorator('exam_id', {
                                rules: [{ required: true, message: '请选择考试类型' }],
                            })(
                                <Select
                                    placeholder="请选择"
                                    style={ { width: "100px" } }
                                >
                                    {
                                        list.map((item: any) => (
                                            <Option key={ item.exam_id } value={ item.exam_id }>{ item.exam_name }</Option>
                                        ))
                                    }
                                </Select>,
                            ) }
                        </Form.Item>
                        <Form.Item label="选择课程：">
                            { getFieldDecorator('subject_id', {
                                rules: [{ required: true, message: '请选择课程' }],
                            })(
                                <Select
                                    placeholder="请选择"
                                    style={ { width: "100px" } }
                                >
                                    {
                                        clas.map((item: any) => (
                                            <Option key={ item.subject_id } value={ item.subject_id }>{ item.subject_text }</Option>
                                        ))
                                    }
                                </Select>,
                            ) }
                        </Form.Item>
                        <Form.Item label="设置题量">
                            { getFieldDecorator('number', { initialValue: 3 })(<InputNumber min={ 4 } max={ 2000 } />) }
                            <span className="ant-form-text"></span>
                        </Form.Item>
                        <p>开始时间：</p>
                        <div style={{display:"flex"}}>
                            <Form.Item>
                                { getFieldDecorator('start_time', config)(
                                    <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" />,

                                ) }
                                —
                            </Form.Item>
                            <Form.Item>
                               { getFieldDecorator('end_time', config)(
                                    <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" />,

                                ) }
                            </Form.Item>
                        </div>
                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                立即创建
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        )
    }
}
export default Form.create({ name: 'validate_other' })(addExamination);                                                                                                                                      