import * as Cookie from 'js-cookie';
var key = 'authorization';
export var getToken = function () {
    return Cookie.get(key);
};
export var setToken = function (val) {
    Cookie.set(key, val, { expires: 7 });
};
export var removeToken = function () {
    Cookie.remove(key);
};
//# sourceMappingURL=index.js.map