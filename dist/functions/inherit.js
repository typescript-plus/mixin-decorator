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
var prototype_properties_of_1 = require("./prototype-properties-of");
exports.inherit = function (klass, superclass, template) {
    // tslint:disable-next-line:no-null-keyword strict-boolean-expressions
    klass.prototype = Object.create((superclass && superclass.prototype) || null, __assign({ constructor: {
            configurable: true,
            enumerable: false,
            value: klass,
            writable: true
        } }, prototype_properties_of_1.prototypePropertiesOf(template)));
    if (superclass) {
        Object.setPrototypeOf(klass, superclass);
    }
};
//# sourceMappingURL=inherit.js.map