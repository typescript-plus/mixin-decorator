"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.prototypePropertiesOf = function (klass) {
    var props = {};
    Object.getOwnPropertyNames(klass.prototype).forEach(function (key) {
        if (key === 'constructor') {
            return;
        }
        props[key] = __assign({}, Object.getOwnPropertyDescriptor(klass.prototype, key));
    });
    return props;
};
//# sourceMappingURL=prototype-properties-of.js.map