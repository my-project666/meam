import * as React from 'react'
import { InputNumber, Form, DatePicker,Button } from 'antd';
import { WrappedFormUtils } from 'antd/lib/form/Form';
const { RangePicker } = DatePicker;
interface Props {
    form: WrappedFormUtils,
}
class addExamination extends React.Component<Props> {
    handleSubmit = (e: any) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };

    normFile = (e: any) => {
        console.log('Upload event:', e);
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
    };
    render() {
        const { getFieldDecorator } = this.props.form;
        const rangeConfig = {
            rules: [{ type: 'array', required: true, message: 'Please select time!' }],
        };
        return (
            <div className="box_addExam">
                <div className="box_addExam_top">
                    <p>添加考试</p>
                </div>
                <div className="box_addExam_con">
                    <p>*试卷名称：</p>
                    <input type="text" className="box_addExam_con_int"/>
                    <p>*选择考试类型：</p>
                    <select name="" id="" className="box_addExam_con_sle">
                        <option value="">周考一</option>
                    </select>
                    <p>*选择课程：</p>
                    <select name="" id="" className="box_addExam_con_sle">
                        <option value="">周考一</option>
                    </select>
                    <Form.Item label="设置题量">
                        {getFieldDecorator('input-number', { initialValue: 3 })(<InputNumber min={1} max={10} />)}
                        <span className="ant-form-text"></span>
                    </Form.Item>
                    <Form.Item label="考试时间">
                        {getFieldDecorator('range-picker', rangeConfig)(<RangePicker />)}
                    </Form.Item>
                    <Form.Item
                        wrapperCol={{
                            xs: { span: 24, offset: 0 },
                            sm: { span: 16, offset: 8 },
                        }}
                    >
                        <Button type="primary" htmlType="submit">
                            创建试卷
                        </Button>
                    </Form.Item>
                </div>

            </div>

        )
    }
}

export default Form.create({ name: 'validate_other' })(addExamination);                                                                                                                                      