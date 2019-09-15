import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'mobx-react'
import {BrowserRouter} from 'react-router-dom';
import 'antd/dist/antd.css';
import router from './router/router';
import RouterView from './router/RouterView';
import store from './store';
//import {Router} from 'react-router'
// import {createBrowserHistory} from 'history'
// const history = createBrowserHistory()
import './index.css';
// import gurad from './utils/grauld'
// gurad(history)
ReactDOM.render(
  <Provider {...store}>
    <BrowserRouter>
      <RouterView routes={router.routes}/>
    </BrowserRouter>
  </Provider>,
  
  document.getElementById('root') as HTMLElement
);
// ReactDOM.render(
//   <Provider {...store}>
//      <Router history={history}>
//         <RouterView routes={router.routes}/>
//      </Router>
//   </Provider>,
  
//   document.getElementById('root') as HTMLElement
// );


