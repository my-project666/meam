import { __awaiter, __decorate, __extends, __generator } from "tslib";
import * as React from 'react';
import { Form, Icon, Input, Button, Checkbox, message } from 'antd';
import './index.css';
import { inject, observer } from 'mobx-react';
var LoginPage = /** @class */ (function (_super) {
    __extends(LoginPage, _super);
    //@Form.create
    function LoginPage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        //FormEvent就是一个类型的声明
        _this.handleSubmit = function (e) {
            e.preventDefault();
            _this.props.form.validateFields(function (err, values) { return __awaiter(_this, void 0, void 0, function () {
                var _a, code, msg;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            if (!!err) return [3 /*break*/, 2];
                            console.log('Received values of form: ', values);
                            return [4 /*yield*/, this.props.user.login(values)];
                        case 1:
                            _a = _b.sent(), code = _a.code, msg = _a.msg;
                            if (code === 1) {
                                //跳转路由
                                this.props.history.replace('/main');
                            }
                            else {
                                //提示错误
                                message.error(msg);
                            }
                            _b.label = 2;
                        case 2: return [2 /*return*/];
                    }
                });
            }); });
        };
        return _this;
    }
    LoginPage.prototype.render = function () {
        console.log('props', this.props, this.props.user.login);
        var getFieldDecorator = this.props.form.getFieldDecorator;
        var _a = this.props.user.account, user_name = _a.user_name, user_pwd = _a.user_pwd;
        return (React.createElement(Form, { onSubmit: this.handleSubmit, className: "login-form" },
            React.createElement(Form.Item, null, getFieldDecorator('user_name', {
                validateTrigger: user_name,
                rules: [
                    { validator: function (ruler, value, callback) {
                            if (/[a-z{5,20}]/.test(value)) {
                                callback();
                            }
                            else {
                                callback('Please input valid username!');
                            }
                        } }
                ],
            })(React.createElement(Input, { prefix: React.createElement(Icon, { type: "user", style: { color: 'rgba(0,0,0,.25)' } }), placeholder: "Username" }))),
            React.createElement(Form.Item, null, getFieldDecorator('user_pwd', {
                validateTrigger: user_pwd,
                rules: [
                    { validator: function (ruler, value, callback) {
                            if (/^(?![a-z]+$)(?![A-Z]+$)(?!([^(a-zA-Z\!\*\.\#)])+$)^.{8,16}$/.test(value)) {
                                callback();
                            }
                            else {
                                callback('Please input valid password!');
                            }
                        } }
                ],
            })(React.createElement(Input, { prefix: React.createElement(Icon, { type: "lock", style: { color: 'rgba(0,0,0,.25)' } }), type: "password", placeholder: "Password" }))),
            React.createElement(Form.Item, null, getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: true,
            })(React.createElement(Checkbox, null, "Remember me"))),
            React.createElement(Form.Item, null,
                getFieldDecorator('autoLogin', {
                    valuePropName: 'checked',
                    initialValue: true,
                })(React.createElement(Checkbox, null, "Auto login in 7 days")),
                React.createElement("a", { className: "login-form-forgot", href: "" }, "Forgot password"),
                React.createElement(Button, { type: "primary", htmlType: "submit", className: "login-form-button" }, "Log in"),
                "Or ",
                React.createElement("a", { href: "" }, "register now!"))));
    };
    LoginPage = __decorate([
        observer,
        inject('user')
        //@Form.create
    ], LoginPage);
    return LoginPage;
}(React.Component));
export default Form.create({ name: 'normal_login' })(LoginPage);
//# sourceMappingURL=index.js.map