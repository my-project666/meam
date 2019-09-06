import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'mobx-react'
import {BrowserRouter} from 'react-router-dom';
import 'antd/dist/antd.css';
import router from './router/router';
import RouterView from './router/RouterView';
import store from './store'
ReactDOM.render(
  <Provider {...store}>
    <BrowserRouter>
      <RouterView routes={router.routes}></RouterView>
   </BrowserRouter>
  </Provider>
  ,
  document.getElementById('root') as HTMLElement
);

