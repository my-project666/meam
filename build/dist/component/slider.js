import { __extends } from "tslib";
import * as React from 'react';
import { config } from '../config';
import { Menu, Icon } from 'antd';
import { NavLink } from "react-router-dom";
var SubMenu = Menu.SubMenu;
var Silder = /** @class */ (function (_super) {
    __extends(Silder, _super);
    function Silder() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            collapsed: false,
        };
        _this.toggleCollapsed = function () {
            _this.setState({
                collapsed: !_this.state.collapsed,
            });
        };
        return _this;
    }
    Silder.prototype.render = function () {
        return (React.createElement("div", { style: { width: 200 } },
            React.createElement(Menu, { mode: "inline", theme: "dark" }, config.map(function (item) { return (React.createElement(SubMenu, { key: item.id, title: React.createElement("span", null,
                    React.createElement(Icon, { type: item.icon }),
                    React.createElement("span", null, item.name)) }, item.children.map(function (ite) { return (React.createElement(Menu.Item, { key: ite.id },
                React.createElement(NavLink, { key: ite.id, to: ite.path }, ite.name))); }))); }))));
    };
    return Silder;
}(React.Component));
export default Silder;
//# sourceMappingURL=slider.js.map