import * as React from 'react'
import { inject, observer } from 'mobx-react';
import { WrappedFormUtils } from 'antd/lib/form/Form';
import { Radio, Table, Select ,Form,Button} from 'antd';
import './css/questionlist.css';
import { NavLink } from 'react-router-dom';
import columns from '../../../config/ksconfig';
const { Option } = Select;
interface Props {
     shitilist: any,
     form:WrappedFormUtils,
     classkc:any
}
@observer
@inject('shitilist','classkc')
class questionsList extends React.Component<Props>{
     state = {
          list: [],
          ks:[]
     }
     handleSubmit = (e:any) => {
          e.preventDefault();
          this.props.form.validateFields((err, values) => {
            if (!err) {
              console.log('Received values of form: ', values);
            }
          });
        };
     render() {
          const { list ,ks} = this.state;
          console.log(list)
          const datas = list.map((item: any, index) => {
               const arr = item.grade_name.map((it: any, index: any) => (
                    <span key={ index }>{ it }</span>
               ))
               return {
                    key: item.exam_exam_id,
                    title: [<h5 key={ index }>{ item.title }</h5>, <span key={ index += 1 }>考试时间：0:0:6</span>, <span key={ index += 1 }>3道题作弊0分</span>],
                    grade_name: [<h5 key={ index }>考试班级</h5>, arr],
                    user_name: item.user_name,
                    start_time: item.start_time,
                    end_time: item.end_time,
                    cao: <NavLink to={ `/main/exam/id=${item.exam_exam_id}` }>详情</NavLink>
               }
          })
          const { getFieldDecorator } = this.props.form;
          return (
               <div className='questions_wrap'>
                    <h2 className="questions_title">试卷列表</h2>
                    <div className="search">
                         <Form onSubmit={ this.handleSubmit } style={{display:'flex',paddingTop:"20px",paddingLeft:"40px"}}>
                              <Form.Item label="考试类型:" style={{display:'flex',paddingRight:"15px"}}>
                                        <Select placeholder="" style={{width:"200px"}}>
                                        <Option value="周考一">周考一</Option>
                                        <Option value="周考二">周考二</Option>
                                        <Option value="周考三">周考三</Option>
                                        <Option value="月考">月考</Option>
                                      </Select>,
                              </Form.Item>
                              <Form.Item label="课程:" style={{display:'flex'}}>
                                        <Select placeholder="" style={{width:"200px",paddingRight:"15px"}}>
                                        {
                                             ks.map((item:any)=>(
                                                  <Option key={item.subject_id} value={item.subject_text}>{item.subject_text}</Option>
                                             ))
                                        }
                                      </Select>
                              </Form.Item>
                              <Form.Item>
                                   <Button type="primary" htmlType="submit">
                                       搜索
                                   </Button>
                              </Form.Item>
                         </Form>
                    </div>
                    <div className="questions_cont">
                         <div className="box" style={ { "display": "flex" } }>
                              <h4>试题列表</h4>
                              <Radio.Group  defaultValue="a">
                                   <Radio.Button value="q">全部</Radio.Button>
                                   <Radio.Button value="b">进行中</Radio.Button>
                                   <Radio.Button value="c">已结束</Radio.Button>
                              </Radio.Group>
                         </div>
                         <Table columns={ columns } dataSource={ datas } size="middle" />
                    </div>
               </div>
          )
     }
     async componentDidMount() {
          const result = await this.props.shitilist.shiList()
          console.log(result)
          const res = await this.props.classkc.classKc()
          console.log(res)
          this.setState({
               list: result.exam,
               ks:res.data
          })
     }
}
export default Form.create({ name: 'coordinated' })(questionsList);