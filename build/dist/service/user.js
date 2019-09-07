import request from '../utils/request';
//登录
export var login = function (params) {
    return request.post('/user/login', params);
};
//# sourceMappingURL=user.js.map