import * as React from 'react'
import { Table, Button, Modal,Input } from 'antd';
import { inject, observer } from 'mobx-react';
import { WrappedFormUtils } from 'antd/lib/form/Form';
const columns = [
     {
          title: '教室号',
          dataIndex: 'Classroom',
     },
     {
          title: '操作',
          dataIndex: 'operation',
     }
];
interface Props {
     form: WrappedFormUtils,
     ClassManagementd?: any,
     pasegementd?:any
}
@observer
@inject('ClassManagementd','pasegementd')
class classManagement extends React.Component<Props>{

     state = {
          data: [],
          loading: false,
          visible: false,
          value:""
     }
     componentDidMount(){
          this.CManagementd()
     }    
     async CManagementd(){
          const result = await this.props.ClassManagementd.ClassManagement();
          const classMangage = result.data.map((item: any, index: any) => {
               return {
                    key: index,
                    Classroom: item.room_text,
                    operation: '操作'
               }
          })
          this.setState({
               data: classMangage
          })
     }
     showModal = () => {
          this.setState({
               visible: true,
          });
     };
     async clicks(params:any){
          //console.log({params},'=======================')
          const resut = await this.props.pasegementd.pasegement(params)
          this.CManagementd()
          console.log(resut);
     }
     handleOk = () => {
          this.setState({ loading: true });
          setTimeout(() => {
               this.setState({ loading: false, visible: false });
          }, 3000);
          const value = this.state.value;
          this.clicks({room_text:value})
     };
     changes = (e:any)=>{
          console.log(e.target.value);
          this.setState({
               value:e.target.value
          })
     }
     handleCancel = () => {
          this.setState({ visible: false });
     };
     render() {
          const { visible, loading } = this.state;
          return (
               <div className="box_classMang">
                    <div className="box_classMang_top">
                         <p>教室管理</p>
                    </div>
                    <div className="box_classMang_con">
                         <div className="box_classMang_con_btn">
                              <div>
                                   <div>
                                        <Button type="primary" onClick={this.showModal}>
                                             +添加教室
                                        </Button>
                                        <Modal
                                             visible={visible}
                                             title="添加班级"
                                             onOk={this.handleOk}
                                             onCancel={this.handleCancel}
                                             footer={[
                                                  <Button key="back" onClick={this.handleCancel}>
                                                       取消
                                                  </Button>,
                                                  <Button key="submit" type="primary" loading={loading} onClick={this.handleOk}>
                                                       确定
                                                  </Button>,
                                             ]}>
                                             <p>*教室号:</p>
                                             <Input placeholder="教室名" onBlur={this.changes}/>
                                        </Modal>
                                   </div>
                              </div>
                         </div>
                         <div className="box_classMang_con_c">
                              <div>
                                   <Table columns={columns} dataSource={this.state.data} size="middle" />
                              </div>
                         </div>
                    </div>
               </div>
          )
     }
}



export default classManagement;