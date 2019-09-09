import * as React from 'react'
import { Table, Modal, Button, Input } from 'antd';
import { inject, observer } from 'mobx-react';
import { WrappedFormUtils } from 'antd/lib/form/Form';
const columns = [
     {
          title: '班级名',
          dataIndex: 'className',
     },
     {
          title: '课程名',
          dataIndex: 'curriculum',
     },
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
     Class_managementd?: any,
     graded?: any
}
@observer
@inject('Class_managementd', 'graded')
class classManagement extends React.Component<Props> {
     state = {
          loading: false,
          visible: false,
          data:[]
     };
     showModal = () => {
          this.setState({
               visible: true,
          });
     };

     handleOk = () => {
          this.setState({ loading: true });
          setTimeout(() => {
               this.setState({ loading: false, visible: false });
          }, 3000);
     };
     async componentDidMount() {
          const result = await this.props.graded.grade();
          console.log(result, "+++++++++");
          const classMangage = result.data.map((item: any, index: any) => {
               return {
                    key: index,
                    className: item.grade_name,
                    curriculum:item.subject_text,
                    Classroom: item.room_text,
                    operation:<p><a href="#">修改</a>|<a href="#">删除</a></p>
               }
          })
          this.setState({
               data: classMangage
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
                         <p>班级管理</p>
                    </div>
                    <div className="box_classMang_con">
                         <div className="box_classMang_con_btn">
                              <div>
                                   <div>
                                        <Button type="primary" onClick={this.showModal}>
                                             +添加班级
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
                                             ]} className="Modals">
                                             <p>*班级名:</p>
                                             <Input placeholder="班级名" />
                                             <p>*教室名:</p>
                                             <Input placeholder="请选择教室号" />
                                             <p>*课程名:</p>
                                             <Input placeholder="课程名" />
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