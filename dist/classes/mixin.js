"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mixer_1 = require("./mixer");
// tslint:disable-next-line:variable-name
exports.Mixin = function (template) { return function (target) {
    mixer_1.Mixer.getFor(template).include(target);
    return target;
}; };
//# sourceMappingURL=mixin.js.map