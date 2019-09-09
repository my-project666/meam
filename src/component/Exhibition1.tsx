import * as React from 'react';
import { Table } from 'antd';
import { inject, observer } from 'mobx-react';
interface Props {
    userAddse?: any,
    identitysd?: any,
    api_auths?:any,
    identitys_apis?:any,
    identitys_views?:any
    typea?: any,
    typeb?: any,
    typec?:any,
    typed?:any,
    typee?:any,
    typef?:any,
    
}
@observer
@inject('userAddse', 'identitysd','api_auths','identitys_apis','identitys_views')
class Exhibition extends React.Component<Props>{
    state = {
        data: [],
        type1: '1',
        type2: '2',
        type3:'3',
        type4:"4",
        type5:'5',
        type6:'6',
        columns:[],
        name:''
    }
    async componentDidMount() {
        if (this.props.typea == this.state.type1) {
            //用户数据
            const { data } = await this.props.userAddse.userAdd();
            let newdata = data.map((item: any, inex: any) => {
                return {
                    key: inex,
                    name: item.user_name,
                    age: item.user_pwd,
                    address: item.identity_text,
                    type: this.state.type1
                }
            })
            const typea = this.props.typea;
            const newcolumns = [
                {
                    title: '用户名',
                    dataIndex: 'name',
                    type: 1,
                },
                {
                    title: '密码',
                    dataIndex: 'age',
                    type: 1,
                },
                {
                    title: '身份',
                    dataIndex: 'address',
                    type: 1,
                }
            ] 
            this.setState({
                data: newdata,
                type1: typea,
                columns:newcolumns,
                name:'用户数据'
            })

        } else if (this.props.typeb == this.state.type2) {
            //身份数据
            const result = await this.props.identitysd.identity();
            const iden = result.data.map((item: any, index: any) => {
                return {
                    key: index,
                    name: item.identity_text,
                    type: this.state.type2
                }
            })
            const typeb = this.props.typeb;
            const newcolumns = [
                {
                    title: '身份名称',
                    dataIndex: 'name',
                    type: 1,
                }
            ]
            this.setState({
                data: iden,
                type2: typeb,
                columns:newcolumns,
                name:'身份数据'
            })
        }else if(this.props.typec == this.state.type3){
            const result = await this.props.api_auths.api_authority();
            const api_ = result.data.map((item:any,index:any)=>{
                return{
                    key: index,
                    name: item.api_authority_text,
                    age: item.api_authority_url,
                    address: item.api_authority_method,
                    type: this.state.type3
                }
            })
            const typec = this.props.typec;
            const newcolumns = [
                {
                    title: 'api权限名称',
                    dataIndex: 'name',
                    type: 3,
                },
                {
                    title: 'api权限url',
                    dataIndex: 'age',
                    type: 3,
                },
                {
                    title: 'api权限方法',
                    dataIndex: 'address',
                    type: 3,
                }
            ] 
            this.setState({
                data:api_,
                type3:typec,
                columns:newcolumns,
                name:'api接口权限'
            })
        }else if(this.props.typed == this.state.type4){
            const result = await this.props.identitys_apis.identity_api();
            const identity_ap = result.data.map((item:any,index:any)=>{
                return{
                    key: index,
                    name: item.identity_text,
                    age: item.api_authority_text,
                    address: item.api_authority_url,
                    pase:item.api_authority_method,
                    type: this.state.type1
                }
            })
            
            const typed = this.props.typed;
            const newcolumns = [
                {
                    title: '身份名称',
                    dataIndex: 'name',
                    type: 4,
                },
                {
                    title: 'api权限名称',
                    dataIndex: 'age',
                    type: 4,
                },
                {
                    title: 'api权限url',
                    dataIndex: 'address',
                    type: 4,
                },
                {
                    title: 'api权限方法',
                    dataIndex: 'pase',
                    type: 4,
                }
            ]
            this.setState({
                data:identity_ap,
                type4:typed,
                columns:newcolumns,
                name:'身份和api接口关系'
            })
        }else if(this.props.typee == this.state.type5){
            const result = await this.props.identitys_views.identity_view();
            const identity_views = result.data.map((item:any,index:any)=>{
                return{
                    key: index,
                    name: item.view_authority_text,
                    age: item.view_id,
                    type: this.state.type5
                }
            })
            console.log(result,'++++++++++++++++');
            const typee = this.props.typee;
            const newcolumns = [
                {
                    title: '身份',
                    dataIndex: 'name',
                    type: 6,
                },
                {
                    title: '试图名称',
                    dataIndex: 'age',
                    type: 6,
                }
            ] 
            this.setState({
                data:identity_views,
                type6:typee,
                columns:newcolumns,
                name:'试图接口权限'
            })
        }else if(this.props.typef == this.state.type6){
            const result = await this.props.identitys_views.identity_view();
            const identity_views = result.data.map((item:any,index:any)=>{
                return{
                    key: index,
                    name: item.identity_text,
                    age: item.view_authority_text,
                    address: item.view_id,
                    type: this.state.type6
                }
            })
            console.log(result,'++++++++++++++++');
            const typef = this.props.typef;
            const newcolumns = [
                {
                    title: '身份',
                    dataIndex: 'name',
                    type: 6,
                },
                {
                    title: '试图名称',
                    dataIndex: 'age',
                    type: 6,
                },
                {
                    title: '试图id',
                    dataIndex: 'address',
                    type: 6,
                }
            ] 
            this.setState({
                data:identity_views,
                type6:typef,
                columns:newcolumns,
                name:'身份和试图权限关系'
            })
        }
        
    }
    render() {
        return (
            <div>
                <div className="box_userMessage_biao_b">
                    {this.state.name}
                </div>
                <div>
                    <Table columns={this.state.columns} dataSource={this.state.data} size="middle" />
                </div>
            </div>
        )
    }
}
export default Exhibition;