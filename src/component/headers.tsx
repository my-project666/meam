import * as React from 'react';
import "./index.css"
import { Menu, Dropdown, Icon } from 'antd';
import img1 from '../image/1.png'
class Header extends React.Component {
     render() {
          return (
               <div className="wrap">
               
                        <img src={img1} alt=""/>
                   
                    <div className="personageMsg">
                         
                    </div>
               </div>
          )
     }
}




export default Header;
