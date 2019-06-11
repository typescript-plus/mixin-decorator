"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var copy_constuctor_1 = require("../functions/copy-constuctor");
var get_constructor_chain_1 = require("../functions/get-constructor-chain");
var inherit_1 = require("../functions/inherit");
var cache = new Map();
var Mixer = /** @class */ (function () {
    function Mixer(template) {
        this.template = template;
    }
    Mixer.getFor = function (template) {
        var mixer = cache.get(template);
        if (!mixer) {
            mixer = new Mixer(template);
            cache.set(template, mixer);
        }
        return mixer;
    };
    Mixer.include = function (template, target) {
        this.getFor(template).include(target);
    };
    Mixer.prependToInstance = function (template, target) {
        this.getFor(template).prependToInstance(target);
    };
    Object.defineProperty(Mixer.prototype, "templateChain", {
        get: function () {
            // tslint:disable-next-line:strict-boolean-expressions
            return this._templateChain || (this._templateChain = get_constructor_chain_1.getConstructorChain(this.template).slice(1));
        },
        enumerable: true,
        configurable: true
    });
    Mixer.prototype.include = function (target) {
        var targetChain = get_constructor_chain_1.getConstructorChain(target).slice(1);
        var chain = [];
        // tslint:disable-next-line:no-magic-numbers
        var superclass = targetChain[targetChain.length - 2];
        this.templateChain.forEach(function (template) {
            superclass = copy_constuctor_1.copyConstructor(superclass, template, target);
            chain.push(superclass);
        });
        inherit_1.inherit(target, chain[chain.length - 1], target);
    };
    Mixer.prototype.prependToInstance = function (target) {
        var targetConstructor = target.constructor;
        var chain = [];
        var superclass = targetConstructor;
        this.templateChain.forEach(function (template) {
            superclass = copy_constuctor_1.copyConstructor(superclass, template, targetConstructor);
            chain.push(superclass);
        });
        Object.setPrototypeOf(target, chain[chain.length - 1].prototype);
    };
    return Mixer;
}());
exports.Mixer = Mixer;
//# sourceMappingURL=mixer.js.map