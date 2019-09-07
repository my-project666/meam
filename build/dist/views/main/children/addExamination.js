import { __extends } from "tslib";
import * as React from 'react';
import { InputNumber, Form, DatePicker, Button } from 'antd';
var RangePicker = DatePicker.RangePicker;
var addExamination = /** @class */ (function (_super) {
    __extends(addExamination, _super);
    function addExamination() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleSubmit = function (e) {
            e.preventDefault();
            _this.props.form.validateFields(function (err, values) {
                if (!err) {
                    console.log('Received values of form: ', values);
                }
            });
        };
        _this.normFile = function (e) {
            console.log('Upload event:', e);
            if (Array.isArray(e)) {
                return e;
            }
            return e && e.fileList;
        };
        return _this;
    }
    addExamination.prototype.render = function () {
        var getFieldDecorator = this.props.form.getFieldDecorator;
        var rangeConfig = {
            rules: [{ type: 'array', required: true, message: 'Please select time!' }],
        };
        return (React.createElement("div", { className: "box_addExam" },
            React.createElement("div", { className: "box_addExam_top" },
                React.createElement("p", null, "\u6DFB\u52A0\u8003\u8BD5")),
            React.createElement("div", { className: "box_addExam_con" },
                React.createElement("p", null, "*\u8BD5\u5377\u540D\u79F0\uFF1A"),
                React.createElement("input", { type: "text", className: "box_addExam_con_int" }),
                React.createElement("p", null, "*\u9009\u62E9\u8003\u8BD5\u7C7B\u578B\uFF1A"),
                React.createElement("select", { name: "", id: "", className: "box_addExam_con_sle" },
                    React.createElement("option", { value: "" }, "\u5468\u8003\u4E00")),
                React.createElement("p", null, "*\u9009\u62E9\u8BFE\u7A0B\uFF1A"),
                React.createElement("select", { name: "", id: "", className: "box_addExam_con_sle" },
                    React.createElement("option", { value: "" }, "\u5468\u8003\u4E00")),
                React.createElement(Form.Item, { label: "\u8BBE\u7F6E\u9898\u91CF" },
                    getFieldDecorator('input-number', { initialValue: 3 })(React.createElement(InputNumber, { min: 1, max: 10 })),
                    React.createElement("span", { className: "ant-form-text" })),
                React.createElement(Form.Item, { label: "\u8003\u8BD5\u65F6\u95F4" }, getFieldDecorator('range-picker', rangeConfig)(React.createElement(RangePicker, null))),
                React.createElement(Form.Item, { wrapperCol: {
                        xs: { span: 24, offset: 0 },
                        sm: { span: 16, offset: 8 },
                    } },
                    React.createElement(Button, { type: "primary", htmlType: "submit" }, "\u521B\u5EFA\u8BD5\u5377")))));
    };
    return addExamination;
}(React.Component));
export default Form.create({ name: 'validate_other' })(addExamination);
//# sourceMappingURL=addExamination.js.map