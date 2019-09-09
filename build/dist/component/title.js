import { __extends } from "tslib";
import * as React from 'react';
var Title = /** @class */ (function (_super) {
    __extends(Title, _super);
    function Title() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Title.prototype.render = function () {
        console.log(this.props);
        return (React.createElement("div", { className: "title", style: { padding: "30 0" } },
            React.createElement("h2", null, "333")));
    };
    return Title;
}(React.Component));
export default Title;
//# sourceMappingURL=title.js.map