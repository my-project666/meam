import { __assign } from "tslib";
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'mobx-react';
import { BrowserRouter } from 'react-router-dom';
import 'antd/dist/antd.css';
import router from './router/router';
import RouterView from './router/RouterView';
import store from './store';
import './index.css';
ReactDOM.render(React.createElement(Provider, __assign({}, store),
    React.createElement(BrowserRouter, null,
        React.createElement(RouterView, { routes: router.routes }))), document.getElementById('root'));
//# sourceMappingURL=index.js.map