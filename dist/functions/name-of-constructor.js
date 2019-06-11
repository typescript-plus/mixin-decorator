"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nameOfConstructor = function (klass) {
    var name = klass.name;
    // tslint:disable-next-line:strict-boolean-expressions
    if (name) {
        return name;
    }
    name = klass.toString().substr('function '.length);
    return name.substr(0, name.indexOf('('));
};
//# sourceMappingURL=name-of-constructor.js.map