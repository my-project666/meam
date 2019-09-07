import { __extends } from "tslib";
import * as React from 'react';
import { Layout } from 'antd';
import Headers from '../../component/headers';
import Slider from '../../component/slider';
import "./index.css";
import RouterView from '../../router/RouterView';
var Header = Layout.Header, Sider = Layout.Sider, Content = Layout.Content;
var Main = /** @class */ (function (_super) {
    __extends(Main, _super);
    function Main() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Main.prototype.render = function () {
        var routes = this.props['routes'];
        return (React.createElement(Layout, null,
            React.createElement(Header, null,
                React.createElement(Headers, null)),
            React.createElement(Layout, null,
                React.createElement(Sider, null,
                    React.createElement(Slider, null)),
                React.createElement(Content, null,
                    React.createElement(RouterView, { routes: routes })))));
    };
    return Main;
}(React.Component));
export default Main;
//# sourceMappingURL=index.js.map