import * as React from 'react'
import { inject, observer } from "mobx-react";
import './css/index.css';
import { Table, Button, Modal , message} from 'antd';
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
     addclass:any
}
@observer
@inject('addquestion','addclass')
class classQuestions extends React.Component<Props>{
     state = {
          visible: false,
          data: [],
          value:""
     };
     showModal = () => {
          this.setState({
               visible: true,
          });
     };
      handleOk = async () => {
        let sort = this.state.data.length;
        let text = this.state.value; 
        const resq = await this.props.addclass.addClass({
          text,
          sort:sort+=1
        })
        if(resq.code==1){
           const datas=await this.props.addquestion.addQuestion()
               this.setState({
                    data:datas.data,
                    visible:false,
                    value:''
               })
               message.success('添加成功')
        }else if(resq.code===0){
           message.error(resq.msg)
        }
         else{
           message.error(resq.msg)
        }
     };
     handleCancel = (e: any) => {
          this.setState({
               visible: false,
               value:''
          });
     };
     handChange=(e:any)=>{
        this.setState({
             value:e.target.value
        })
     }
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
                         <div className="question-cont">
                              <div>
                                   <Button type="primary" onClick={ this.showModal } className="btn">
                                        +添加类型
                                    </Button>
                                   <Modal
                                        title="创建新类型"
                                        visible={ this.state.visible }
                                        onOk={this.handleOk }
                                        onCancel={ this.handleCancel }
                                        maskClosable={ false }
                                        okText="确定"
                                        cancelText="取消"
                                        centered={true}
                                   >
                                   <div className="ipt_wraper">
                                       <input type="text" placeholder="请输入类型" className="style_ipt" value={this.state.value}
                                         onChange={this.handChange}
                                       /> 
                                   </div>
                                   </Modal>
                              </div>
                              <Table className="cont-tablt" columns={ columns } dataSource={ obj } size="default"
                                   pagination={{ pageSize: 4 }} 
                              />
                         </div>
                    </div>
               </div>
          )
     }
     async componentDidMount() {
          const result = await this.props.addquestion.addQuestion();
          this.setState({
               data: result.data
          })
          
     }
}
export default classQuestions;