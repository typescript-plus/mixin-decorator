import { ConstructorType } from '../types';
import { prototypePropertiesOf } from './prototype-properties-of';

export const inherit = (klass: ConstructorType, superclass: ConstructorType | undefined, template: ConstructorType) => {
  // tslint:disable-next-line:no-null-keyword strict-boolean-expressions
  klass.prototype = Object.create((superclass && (superclass.prototype as object)) || null, {
    constructor: {
      configurable: true,
      enumerable: false,
      value: klass,
      writable: true
    },
    ...prototypePropertiesOf(template)
  });
  if (superclass) {
    Object.setPrototypeOf(klass, superclass);
  }
};
