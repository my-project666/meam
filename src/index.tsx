import * as React from 'react';
import * as ReactDOM from 'react-dom';

import RouterView from './router/RouterView';
import router from './router/router';
import {BrowserRouter} from 'react-router-dom';

import {Provider} from 'mobx-react';
import store from './store'

import './index.css';
import 'antd/dist/antd.css'
ReactDOM.render(
  <Provider {...store}>
    <BrowserRouter>
      <RouterView routes={router.routes}/>
    </BrowserRouter>
  </Provider>,
  
  document.getElementById('root') as HTMLElement
);

