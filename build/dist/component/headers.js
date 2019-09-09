import { __extends } from "tslib";
import * as React from 'react';
import "./index.css";
import img1 from '../image/1.png';
var Header = /** @class */ (function (_super) {
    __extends(Header, _super);
    function Header() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Header.prototype.render = function () {
        return (React.createElement("div", { className: "wrap" },
            React.createElement("img", { src: img1, alt: "" }),
            React.createElement("div", { className: "personageMsg" })));
    };
    return Header;
}(React.Component));
export default Header;
//# sourceMappingURL=headers.js.map