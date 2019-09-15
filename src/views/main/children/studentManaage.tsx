import * as React from 'react'
import { Input, Select, Button, Table } from 'antd';
import { WrappedFormUtils } from 'antd/lib/form/Form';
import { inject, observer } from 'mobx-react'
import cons from 'src/router/cons';
const { Option } = Select;
function onChange(value: any) {
    console.log(`selected ${value}`);
}

function onBlur() {
    console.log('blur');
}

function onFocus() {
    console.log('focus');
}

function onSearch(val: any) {
    console.log('search:', val);
}
interface Props {
    form: WrappedFormUtils,
    StudentManagementd?: any
}
const columns = [
    {
        title: '姓名',
        dataIndex: 'name',
    },
    {
        title: '学号',
        dataIndex: 'StudentID',
    },
    {
        title: '班级',
        dataIndex: 'className',
    },
    {
        title: '教室',
        dataIndex: 'Classroom',
    },
    {
        title: '密码',
        dataIndex: 'password',
    },
    {
        title: '学号',
        dataIndex: 'Students',
    },
];
@observer
@inject('StudentManagementd')
class studentManaage extends React.Component<Props> {
    state={
        data:[],
        value:""
    }
    async componentDidMount() {
        const result = await this.props.StudentManagementd.StudentManagement()
        const studentM =result.data.map((item: any, index: any) => {
           
            return {
                key: index,
                name: item.student_name,
                StudentID:item.student_id,
                className: 'aaaaaa',
                Classroom: 'aaaaa',
                password:item.student_pwd,
                Students: 'aaaaaa'
            }
        })
        this.setState({
            data:studentM
        })
    }
    search=(e:any)=>{
       this.setState({
           value:e.target.value
       })
    }
    onsearch=()=>{
         let {value,data} = this.state;
         let datas:any = data.filter((item:any)=>{
              if(item.name == value){
                  return item
              }
         })
         if(datas.length){
             this.setState({data:datas})
         }else{
             console.log('没有此用户')
         }
    }
    render() {
        const {value} = this.state
        return (
            <div className="box_student">
                <div className="box_student_top">
                    <p>学生管理</p>
                </div>
                <div className="box_student_int">
                    <div className="box_student_int_con">
                        <Input size="large" placeholder="输入学生名字" className="int" value={value} onChange={this.search}/>
                        <Select
                            showSearch
                            style={{ width: 200 }}
                            placeholder="请选择教室号"
                            optionFilterProp="children"
                            onChange={onChange}
                            onFocus={onFocus}
                            onBlur={onBlur}
                            onSearch={onSearch}
                            filterOption={(input, option: any) =>
                                option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            } className="selest">
                            <Option value="jack">Jack</Option>
                            <Option value="lucy">Lucy</Option>
                            <Option value="tom">Tom</Option>
                        </Select>
                        <Select
                            showSearch
                            style={{ width: 200 }}
                            placeholder="班级名"
                            optionFilterProp="children"
                            onChange={onChange}
                            onFocus={onFocus}
                            onBlur={onBlur}
                            onSearch={onSearch}
                            filterOption={(input, option: any) =>
                                option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            } className="selest">
                            <Option value="jack">Jack</Option>
                            <Option value="lucy">Lucy</Option>
                            <Option value="tom">Tom</Option>
                        </Select>
                        <Button type="primary" className="btn" onClick={this.onsearch}>搜索</Button>
                        <Button type="primary" className="btn">重置</Button>
                    </div>
                    <div>
                        <Table columns={columns} dataSource={this.state.data} size="middle" />
                    </div>
                </div>
            </div>
        )
    }
}
export default studentManaage;