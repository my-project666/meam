import { __extends } from "tslib";
import * as React from 'react';
import { Layout, Tabs, Input, Radio, Button, } from 'antd';
var TabPane = Tabs.TabPane;
var Content = Layout.Content;
import './css/adduser.css';
var Adduser = /** @class */ (function (_super) {
    __extends(Adduser, _super);
    function Adduser() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onChange = function (e) {
            console.log(e);
        };
        _this.submit = function (e) {
            console.log(e.target.value);
        };
        return _this;
    }
    Adduser.prototype.render = function () {
        return (React.createElement("div", { className: "adduser" },
            React.createElement("div", { className: "adduser_layout" },
                React.createElement("h2", { className: "adduser_title" }, "\u6DFB\u52A0\u7528\u6237"),
                React.createElement("div", { className: "adduser_cont" },
                    React.createElement("div", { className: "adduser_con" },
                        React.createElement("div", { className: "addUser_wrapper__3qQDv" },
                            React.createElement(Tabs, { type: "card" },
                                React.createElement(TabPane, { className: "tabs", tab: "\u6DFB\u52A0\u7528\u6237", key: "1" },
                                    React.createElement(Input, { placeholder: "\u8BF7\u8F93\u5165\u8D26\u53F7", allowClear: true, onChange: this.onChange }),
                                    React.createElement(Input, { placeholder: "\u8BF7\u8F93\u5165\u5BC6\u7801", allowClear: true, onChange: this.onChange })),
                                React.createElement(TabPane, { className: "tabs", tab: "\u8DDF\u65B0\u7528\u6237", key: "2" }))),
                        React.createElement("div", { className: "addUser_wrapper__3qQDv" },
                            React.createElement(Radio.Group, { defaultValue: "a", buttonStyle: "outline" },
                                React.createElement(Radio.Button, { value: "a" }, "\u6DFB\u52A0\u8EAB\u4EFD")),
                            React.createElement(Input, { placeholder: "\u8BF7\u8F93\u5165\u8EAB\u4EFD\u540D\u79F0", onChange: this.onChange }),
                            React.createElement(Button, { type: "primary", className: "btns", onClick: this.submit }, "\u786E\u5B9A"),
                            React.createElement(Button, null, "\u91CD\u7F6E")),
                        React.createElement("div", { className: "addUser_wrapper__3qQDv" }),
                        React.createElement("div", { className: "addUser_wrapper__3qQDv" }),
                        React.createElement("div", { className: "addUser_wrapper__3qQDv" }),
                        React.createElement("div", { className: "addUser_wrapper__3qQDv" }))))));
    };
    return Adduser;
}(React.Component));
export default Adduser;
//# sourceMappingURL=adduser.js.map