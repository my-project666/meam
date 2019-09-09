import { __extends } from "tslib";
import * as React from 'react';
import { LookQ, subject, condition } from '../../../api/lookQ';
var lookQuestions = /** @class */ (function (_super) {
    __extends(lookQuestions, _super);
    function lookQuestions() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            data: [],
            //课程
            curriculum: [],
            condition: []
        };
        return _this;
    }
    lookQuestions.prototype.componentDidMount = function () {
        var _this = this;
        //获取所有的考试类型
        LookQ().then(function (res) {
            _this.setState({
                data: res.data
            });
        });
        //获取所有的课程
        subject().then(function (res) {
            _this.setState({
                curriculum: res.data
            });
        });
        //按条件获取试题
        condition().then(function (res) {
            console.log(res.data, 'res');
            _this.setState({
                condition: res.data
            });
        });
    };
    lookQuestions.prototype.render = function () {
        return (React.createElement("div", { className: "look_box" },
            React.createElement("div", { className: "look_box_top" },
                React.createElement("p", null, "\u67E5\u770B\u8BD5\u9898")),
            React.createElement("div", { className: "look_box_cha" },
                React.createElement("div", { className: "look_box_cha_top" },
                    React.createElement("div", { className: "look_box_cha_top_l" },
                        React.createElement("h4", null, "\u8BFE\u7A0B\u7C7B\u578B:")),
                    React.createElement("div", { className: "look_box_cha_top_r" },
                        React.createElement("ul", null, this.state.curriculum.map(function (item) {
                            return React.createElement("li", { key: item.subject_id }, item.subject_text);
                        })))),
                React.createElement("div", { className: "look_box_cha_buttom" },
                    React.createElement("h4", null, "\u8003\u8BD5\u7C7B\u578B\uFF1A"),
                    React.createElement("select", { className: "look_box_cha_buttom_select" }, this.state.data && this.state.data.map(function (item) {
                        return React.createElement("option", { key: item.exam_id }, item.exam_name);
                    })),
                    React.createElement("h4", null, "\u9898\u76EE\u7C7B\u578B\uFF1A"),
                    React.createElement("select", { className: "look_box_cha_buttom_select" },
                        React.createElement("option", { value: "\u7B80\u7B54\u9898" }, "\u7B80\u7B54\u9898"),
                        React.createElement("option", { value: "\u4EE3\u7801\u9605\u8BFB\u9898" }, "\u4EE3\u7801\u9605\u8BFB\u9898"),
                        React.createElement("option", { value: "\u4EE3\u7801\u8865\u5168" }, "\u4EE3\u7801\u8865\u5168"),
                        React.createElement("option", { value: "\u4FEE\u6539bug" }, "\u4FEE\u6539bug"),
                        React.createElement("option", { value: "\u624B\u5199\u4EE3\u7801" }, "\u624B\u5199\u4EE3\u7801")),
                    React.createElement("button", null, "\u67E5\u8BE2"))),
            React.createElement("div", { className: "look_box_content" }, this.state.condition.map(function (item, index) {
                return React.createElement("div", { className: "look_box_content_con", key: index },
                    React.createElement("div", { className: "look_box_content_con_left" },
                        React.createElement("p", null, item.title),
                        React.createElement("div", { className: "look_box_content_con_left_spn" },
                            React.createElement("span", { className: "spn1" }, item.questions_type_text),
                            React.createElement("span", { className: "spn2" }, item.subject_text),
                            React.createElement("span", { className: "spn3" }, item.exam_name)),
                        React.createElement("div", { className: "look_box_content_con_left_p" },
                            React.createElement("p", null,
                                item.user_name,
                                "\u53D1\u5E03"))),
                    React.createElement("div", { className: "look_box_content_con_right" }, "\u7F16\u8F91"));
            }))));
    };
    return lookQuestions;
}(React.Component));
export default lookQuestions;
//# sourceMappingURL=lookQuestion.js.map