import { __awaiter, __decorate, __extends, __generator } from "tslib";
import * as React from 'react';
import { inject, observer } from "mobx-react";
import './css/index.css';
import { Table, Button, Modal, Input } from 'antd';
var columns = [
    {
        title: '类型ID',
        dataIndex: 'name',
    },
    {
        title: '类型名称',
        dataIndex: 'age',
    },
    {
        title: '操作',
        dataIndex: 'address',
    },
];
var classQuestions = /** @class */ (function (_super) {
    __extends(classQuestions, _super);
    function classQuestions() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            visible: false,
            data: [],
            value: ""
        };
        _this.showModal = function () {
            _this.setState({
                visible: true,
            });
        };
        _this.handleOk = function () {
            console.log(_this.state.value);
        };
        _this.handleCancel = function (e) {
            console.log(e.target.value);
            _this.setState({
                visible: false,
            });
        };
        _this.handChange = function (e) {
            _this.setState({
                value: e.target.value
            });
        };
        return _this;
    }
    classQuestions.prototype.render = function () {
        var data = this.state.data;
        var obj = data.map(function (item, index) {
            return {
                key: item['questions_type_sort'],
                name: item['questions_type_id'],
                age: item['questions_type_text'],
                address: '',
            };
        });
        return (React.createElement("div", { className: "quetion-wrap" },
            React.createElement("div", { className: "question-content" },
                React.createElement("div", { className: "title" },
                    React.createElement("h2", null, "\u8BD5\u9898\u5206\u7C7B")),
                React.createElement("div", { className: "question-cont" },
                    React.createElement("div", null,
                        React.createElement(Button, { type: "primary", onClick: this.showModal, className: "btn" }, "+\u6DFB\u52A0\u7C7B\u578B"),
                        React.createElement(Modal, { title: "\u521B\u5EFA\u65B0\u7C7B\u578B", visible: this.state.visible, onOk: this.handleOk, onCancel: this.handleCancel, maskClosable: false, okText: "\u786E\u5B9A", cancelText: "\u53D6\u6D88", centered: true },
                            React.createElement(Form, { labelCol: { span: 5 }, wrapperCol: { span: 12 }, onSubmit: this.handleSubmit },
                                React.createElement(Form.Item, { label: "Note" }, getFieldDecorator('note', {
                                    rules: [{ required: true, message: 'Please input your note!' }],
                                })(React.createElement(Input, null))),
                                React.createElement(Form.Item, { label: "Gender" }, getFieldDecorator('gender', {
                                    rules: [{ required: true, message: 'Please select your gender!' }],
                                })(React.createElement(Select, { placeholder: "Select a option and change input text above", onChange: this.handleSelectChange },
                                    React.createElement(Option, { value: "male" }, "male"),
                                    React.createElement(Option, { value: "female" }, "female")))),
                                React.createElement(Form.Item, { wrapperCol: { span: 12, offset: 5 } },
                                    React.createElement(Button, { type: "primary", htmlType: "submit" }, "Submit"))))),
                    React.createElement(Table, { className: "cont-tablt", columns: columns, dataSource: obj, size: "default", pagination: false })))));
    };
    classQuestions.prototype.componentDidMount = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.props.addquestion.addQuestion()];
                    case 1:
                        result = _a.sent();
                        console.log(result);
                        this.setState({
                            data: result.data
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    classQuestions = __decorate([
        observer,
        inject('addquestion')
    ], classQuestions);
    return classQuestions;
}(React.Component));
export default Form.create({ name: 'coordinated' })(classQuestions);
//# sourceMappingURL=classQuestions.js.map