import { __assign } from "tslib";
import * as React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
export default (function (props) {
    // console.log('props...', props);
    return React.createElement(Switch, null, props.routes.map(function (item, index) {
        if (item.path) {
            return React.createElement(Route, { key: index, path: item.path, render: function (props) {
                    if (item.children) {
                        /** 渲染组件，类似于<Tab/>
                         *  ...props 把路由信息展开传递下去
                         *  item.children 把子路由配置传递下去
                         */
                        return React.createElement(item.component, __assign({}, props, { routes: item.children }));
                    }
                    else {
                        return React.createElement(item.component, __assign({}, props));
                    }
                } });
        }
        return React.createElement(Redirect, { key: index, exact: true, from: "/", to: "/login" });
    }));
});
//# sourceMappingURL=RouterView.js.map