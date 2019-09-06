import * as React from 'react'
import {Layout} from 'antd'
import Headers from '../../component/headers';
console.log(Headers)
import Slider from '../../component/slider'
import "./index.css";
import RouterView from '../../router/RouterView';
const {Header,Sider,Content} = Layout

interface Props {
     routes:any,
     location:any
}
class Main extends React.Component<Props> {

     render(){
  
          const routes=this.props['routes']
          console.log(routes)
          return (
           <Layout>
               <Header>
                   <Headers/>
               </Header>
               <Layout>
                 <Sider>
                      <Slider></Slider>
                 </Sider>
                 <Content>
                      <RouterView routes={routes}/>
                 </Content>
               </Layout>
             </Layout>
          )
     }
     componentDidMount() {
          console.log(this.props);
     }
}

export default Main;