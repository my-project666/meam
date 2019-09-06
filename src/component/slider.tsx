import * as  React from 'react';
import { config } from '../config'
import { Menu, Icon, Button } from 'antd';
import {NavLink} from "react-router-dom"
const { SubMenu } = Menu;
class Silder extends React.Component {
  state = {
    collapsed: false,
  };
  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  render() {
    return (
      <div style={ { width: 200 } }>
        <Menu
          mode="inline"
          theme="dark"
        >
           {
             config.map(item=>(
                 <SubMenu key={item.id}
                   title={
                       <span>
                           <Icon type={item.icon} />
                           <span>{item.name}</span>
                       </span>
                   }
                 >
                  {
                    item.children.map(ite=>(
                        <Menu.Item key={ite.id}><NavLink key={ite.id} to={ite.path}>{ite.name}</NavLink></Menu.Item>
                    ))
                  }
                 </SubMenu>
             ))
           }
        </Menu>
      </div>
    )
  }
}



export default Silder;
