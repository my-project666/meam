import { __awaiter, __decorate, __generator, __metadata } from "tslib";
import { observable, action } from 'mobx';
import { addquestion } from '../../service/index';
var addQuestion = /** @class */ (function () {
    function addQuestion() {
        this.isaddQuestion = false;
    }
    addQuestion.prototype.addQuestion = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, addquestion()];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    __decorate([
        observable,
        __metadata("design:type", Boolean)
    ], addQuestion.prototype, "isaddQuestion", void 0);
    __decorate([
        action,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], addQuestion.prototype, "addQuestion", null);
    return addQuestion;
}());
export default addQuestion;
//# sourceMappingURL=addQuestion.js.map