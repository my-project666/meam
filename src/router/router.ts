
import Login from '../views/login';
import Main from '../views/main';
import Pase from '../components/pase';
export default {
    routes:[
        {
            path:'/main',
            component:Main,
            children:[
                {
                    path:'/main/pase',
                    component:Pase
                }
            ]
        },{
            path:'/login',
            component:Login
        }
    ]
}