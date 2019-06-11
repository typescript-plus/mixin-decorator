"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var create_class_1 = require("../functions/create-class");
var inherit_1 = require("../functions/inherit");
var name_of_constructor_1 = require("../functions/name-of-constructor");
exports.copyConstructor = function (superclass, template, target) {
    var klass = create_class_1.createClass(superclass, name_of_constructor_1.nameOfConstructor(template) + "_into_" + name_of_constructor_1.nameOfConstructor(target));
    inherit_1.inherit(klass, superclass, template);
    return klass;
};
//# sourceMappingURL=copy-constuctor.js.map