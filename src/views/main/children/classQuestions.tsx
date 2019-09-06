import * as React from 'react'
import { inject, observer } from "mobx-react";
import './css/index.css';
import { Table, Button, Radio, Modal, Input } from 'antd';
// import Titles from '../../../component/title'
const columns = [
     {
          title: '类型ID',
          dataIndex: 'name',
     },
     {
          title: '类型名称',
          dataIndex: 'age',
     },
     {
          title: '操作',
          dataIndex: 'address',
     },
];

interface Props {
     user: any,
     abc?: any,
     addquestion: any,
}

@observer
@inject('addquestion')
class classQuestions extends React.Component<Props>{
     state = {
          visible: false,
          data: []
     };

     showModal = () => {
          this.setState({
               visible: true,
          });
     };

     handleOk = (e: any) => {
          console.log(e.value);
          this.setState({
               visible: false,
          });
     };

     handleCancel = (e: any) => {
          console.log(e.target.value);
          this.setState({
               visible: false,
          });
     };
     onChange = (e: any) => {
          console.log(e.target.value);
     };
     render() {
          const { data } = this.state
          const obj = data.map((item, index) => {
               return {
                    key: item['questions_type_sort'],
                    name: item['questions_type_id'],
                    age: item['questions_type_text'],
                    address: '',
               }
          })
          return (
               <div className="quetion-wrap">
                    <div className="question-content">
                          <div className="title">
                               <h2>试题分类</h2>
                          </div>
                          {/* <Titles></Titles> */}
                         <div className="question-cont">
                              <div>
                                   <Button type="primary" onClick={ this.showModal } className="btn">
                                        +添加类型
                                    </Button>
                                   <Modal
                                        title="创建新类型"
                                        visible={ this.state.visible }
                                        onOk={ this.handleOk }
                                        onCancel={ this.handleCancel }
                                        maskClosable={ false }
                                        okText="确定"
                                        cancelText="取消"
                                        centered={true}
                                   >
                                   <div className="ipt_wraper">
                                       <input type="text" placeholder="请输入类型" className="style_ipt"/>
                                   </div>
                                   
                                   </Modal>
                              </div>
                              <Table className="cont-tablt" columns={ columns } dataSource={ obj } size="default"
                                   pagination={ false }
                              />
                         </div>
                    </div>
               </div>
          )
     }
     async componentDidMount() {
          const result = await this.props.addquestion.addQuestion();
          console.log(result)
          this.setState({
               data: result.data
          })
     }
}



export default classQuestions;