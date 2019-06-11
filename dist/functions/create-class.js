"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createClass = function (superclass, name) {
    var exp = '(function (_super) {\
       return function $1() {\
         return _super && _super.apply(this, arguments) || this;\
       };\
     });';
    // tslint:disable-next-line:no-eval
    return eval(exp.replace('$1', name))(superclass);
};
//# sourceMappingURL=create-class.js.map