import * as React from 'react'
import { Pagination, Table } from 'antd';
import {inject,observer} from 'mobx-react'
const columns = [
    {
        title: '班级',
        dataIndex: 'name',
    },
    {
        title: '课程名称',
        dataIndex: 'age',
    },
    {
        title: '阅卷状态',
        dataIndex: 'address',
    },
    {
        title: '课程名称',
        dataIndex: 'question',
    },
    {
        title: '成材率',
        dataIndex: 'lv',
    },
    {
        title: '操作',
        dataIndex: 'cao',
    },
];
const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      question:"333",
      lv:"55",
      cao:66

    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',

    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    },
  ];
interface Props {
    approval:any
}
@observer
@inject('approval')
class awaitingRoom extends React.Component<Props> {
    state: {
        pageCont: 10
    }
    onChange(pageNumber: any) {
        let pagecont= 10;
        let pageconts = (pageNumber-1)*pagecont
        console.log(pageconts)
        console.log('Page: ', pageNumber);
    }
    
    render() {
       console.log(this.props)
        return (
            <div>
                <div className="daiWrap">
                <div>
                    <Table columns={ columns } dataSource={ data } size="middle" /> 
                </div>
                    <Pagination showQuickJumper total={15} onChange={this.onChange}  
                     defaultPageSize={10}
                    />
                </div>
            </div>
        )
    }
    async componentDidMount(){
        console.log(await this.props.approval.appRoval())
    }
}



export default awaitingRoom;