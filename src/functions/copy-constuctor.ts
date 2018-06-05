import { createClass } from '../functions/create-class';
import { inherit } from '../functions/inherit';
import { nameOfConstructor } from '../functions/name-of-constructor';
import { ConstructorType } from '../types';

export const copyConstructor = (
  superclass: ConstructorType | undefined,
  template: ConstructorType,
  target: ConstructorType
) => {
  const klass = createClass(superclass, `${nameOfConstructor(template)}_into_${nameOfConstructor(target)}`);
  inherit(klass, superclass, template);
  return klass;
};
