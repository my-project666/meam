import { __awaiter, __decorate, __generator, __metadata } from "tslib";
import { observable, action } from 'mobx';
import { login } from '../../service/index';
import { setToken, removeToken } from '../../utils/index';
//@observable是一个装饰器
//@action 表示行为  在里面做异步操作
var account = {};
if (window.localStorage.getItem('account')) {
    account = JSON.parse(window.localStorage.getItem('account') + '');
}
var User = /** @class */ (function () {
    function User() {
        this.isLogin = false;
        this.account = account;
    }
    User.prototype.login = function (form) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, login(form)];
                    case 1:
                        result = _a.sent();
                        console.log(result, 'result');
                        if (result.code == 1) {
                            console.log(result);
                            if (form.remember) {
                                console.log(form);
                                window.localStorage.setItem('account', JSON.stringify(form));
                            }
                            else {
                                window.localStorage.removeItem('account');
                            }
                            //判断是否七天免登陆
                            if (form.autoLogin) {
                                setToken(result.token);
                            }
                        }
                        return [2 /*return*/, result];
                }
            });
        });
    };
    //退出登陆
    User.prototype.logout = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                removeToken();
                return [2 /*return*/];
            });
        });
    };
    __decorate([
        observable,
        __metadata("design:type", Boolean)
    ], User.prototype, "isLogin", void 0);
    __decorate([
        observable,
        __metadata("design:type", Object)
    ], User.prototype, "account", void 0);
    __decorate([
        action,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], User.prototype, "login", null);
    __decorate([
        action,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], User.prototype, "logout", null);
    return User;
}());
export default User;
//# sourceMappingURL=user.js.map