import * as React from 'react'
import './css/adduser.css';
import AddUser from '../../../component/adduser/adduser';
import UserIdentity from '../../../component/adduser/useridentity';
import AddPort from '../../../component/adduser/addport'
import {WrappedFormUtils} from 'antd/lib/form/Form'
import {inject,observer} from 'mobx-react'
interface Props {
    form:WrappedFormUtils,
    user:any,
    addUser:any,
    userAddse:any,
}
@observer
@inject('user','userAddse')
class Adduser extends React.Component<Props> {
    render() {
       // console.log(this.props.user.addUser())
        return (
            <div className="adduser">
                <div className="adduser_layout">
                    <h2 className="adduser_title">添加用户</h2>
                    <div className="adduser_cont">
                        <div className="adduser_con">
                            <div className="addUser_wrapper__3qQDv">
                                   <AddUser />
                            </div>
                            <div className="addUser_wrapper__3qQDv">
                                <UserIdentity></UserIdentity>
                            </div>
                            <div className="addUser_wrapper__3qQDv">
                                  <AddPort></AddPort>
                            </div>
                            <div className="addUser_wrapper__3qQDv">

                            </div>
                            <div className="addUser_wrapper__3qQDv">

                            </div>
                            <div className="addUser_wrapper__3qQDv">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}



export default Adduser;