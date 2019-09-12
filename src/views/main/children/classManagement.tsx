import * as React from 'react'
import { Table, Modal, Button, Input } from 'antd';
import { inject, observer } from 'mobx-react';
import { WrappedFormUtils } from 'antd/lib/form/Form';
import './css/index.css';
import { runInThisContext } from 'vm';
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
     graded?: any,
     deleteads?: any,
     addClassdx?: any
}
@observer
@inject('Class_managementd', 'graded', 'deleteads', 'addClassdx')
class classManagement extends React.Component<Props> {
     state = {
          loading: false,
          visible: false,
          data: [],
          int2: '',
          int1: '',
          int3: '',
          room_id: '',
          subject_id: "",
          flag: false,
          curriculum:'',
          grade_name:'',
          curriculums:'',
          Classroom:'',
          int4:'',
          Classrooms:''

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
          }, 0);
          const int1 = this.state.int1;
          const int2 = this.state.int2;
          const int3 = this.state.int3;
          console.log(int1, int2, int3)
          this.pawnd({ grade_name: int1, room_id: this.state.room_id, subject_id: this.state.subject_id })
          this.pase()
     };
     async pawnd(params: any) {
          const result = await this.props.addClassdx.addClassd(params)
          console.log(result);

     }
     async componentDidMount() {
          this.pase()
     }
     async pase() {
          const result = await this.props.graded.grade();
          console.log(result, "+++++++++");
          const classMangage = result.data.map((item: any, index: any) => {
               return {
                    key: index,
                    className: item.grade_name,
                    curriculum: item.subject_text,
                    Classroom: item.room_text,
                    operation: <p><a href="#" onClick={this.xiug.bind(this,item)}>修改</a>|<a href="#" onClick={this.deletes.bind(this, item)}>删除</a></p>
               }
          })
          this.setState({
               data: classMangage,
               room_id: result.data[0].room_id,
               subject_id: result.data[0].subject_id,
          })
     }
     xiug = (item:any) => {
          console.log(item)
          this.setState({
               grade_name:item.grade_name
          })
          
          this.setState({
               flag: true,
               
          });


     }
     quxiao = () => {
          this.setState({
               flag: false,
          });
     }
     deletes = (item: any) => {
          console.log(item.grade_id)
          this.delde({ grade_id: item.grade_id })
          this.pase()
     }
     async delde(grade_id: any) {
          await this.props.deleteads.deletea(grade_id);
     }
     handleCancel = () => {
          this.setState({ visible: false });
     };
     int1 = (e: any) => {
          this.setState({
               int1: e.target.value
          })
     }
     int2 = (e: any) => {
          this.setState({
               int2: e.target.value
          })
     }
     int3 = (e: any) => {
          this.setState({
               int3: e.target.value
          })
     }
     conmit=()=>{
         
          
     }
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
                                             <Input placeholder="班级名" onBlur={this.int1} />
                                             <p>*教室名:</p>
                                             <Input placeholder="请选择教室号" onBlur={this.int2} />
                                             <p>*课程名:</p>
                                             <Input placeholder="课程名" onBlur={this.int3} />
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
                    <div>
                         {this.state.flag ?
                              <div className="mask">

                                   <div className="mask-div">

                                        <div>
                                             <p>
                                                  
                                                       <input className="inp" type="text" placeholder=" 班级名" value={this.state.grade_name}/>  
                                                  
                                             </p>
                                             <p>
                                                  <select name="" id="classNumber">
                                                       <option value="">请选择教室号</option>
                                                       {
                                                            this.state.data.map((item: any, index: any) => {
                                                      
                                                                 return <option key={index}>{item.Classroom}</option>

                                                            })
                                                       }


                                                  </select>
                                             </p>
                                             <p>
                                                  <select name="" id="curriculumName">
                                                       <option value="">课程名</option>
                                                       {
                                                            this.state.data.map((item: any, index: any) => {
                                                         
                                                                 return <option key={index}>{item.curriculum}</option>

                                                            })
                                                       }


                                                  </select>
                                             </p>
                                             <p id="mask-btn">
                                                  <button id="mask-cancel" onClick={this.quxiao}>取消</button><button id="mask-submit" onClick={this.conmit}>提交</button>
                                             </p>
                                        </div>
                                   </div>


                              </div> : ''}


                    </div>
               </div>
          )
     }
}



export default classManagement;