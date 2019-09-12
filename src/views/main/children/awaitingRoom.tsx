import * as React from 'react'
import { Table } from 'antd';
import { inject, observer } from 'mobx-react';
import { WrappedFormUtils } from 'antd/lib/form/Form';
import { runInThisContext } from 'vm';
const columns = [
    {
        title: '班级名',
        dataIndex: 'name',
    },
    {
        title: '课程名称',
        dataIndex: 'Coursetitle',
    },
    {
        title: '阅卷状态',
        dataIndex: 'Markingstate',
    },
    {
        title: '课程名称',
        dataIndex: 'Coursetitles',
    },
    {
        title: '成材率',
        dataIndex: 'yield',
    },
    {
        title: '操作',
        dataIndex: 'operation',
    },
];
const data = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
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
    form: WrappedFormUtils,
    graded?: any
}
@observer
@inject('graded')
class awaitingRoom extends React.Component<Props>{
    state = {
        data: []
    }
    async componentDidMount() {
        const result = await this.props.graded.grade()
        console.log(result);
        const data = result.data.map((item: any, index: any) => {
            return {
                key: index,
                name: item.grade_name,
                Coursetitle: item.subject_text,
                Markingstate: '',
                Coursetitles: item.subject_text,
                yield: item.room_text,
                operation: <a href="#">批卷</a>,
            }
        })
        this.setState({
            data: data
        })
    }
    render() {
        return (
            <div className="box_awaiting">
                <div className="box_awaiting_top">
                    <p>
                        待批班级
                        </p>
                </div>
                <div className="box_awaiting_con">
                    <div>
                        <Table columns={columns} dataSource={this.state.data} size="middle" />
                    </div>
                </div>

            </div>
        )
    }
}



export default awaitingRoom;