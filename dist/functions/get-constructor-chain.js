"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getConstructorChain = function (child) {
    var chain = [];
    var current = child;
    do {
        chain.unshift(current);
        current = Object.getPrototypeOf(current);
    } while (typeof current === 'function');
    return chain;
};
//# sourceMappingURL=get-constructor-chain.js.map