import { ConstructorType } from '../types';

export const prototypePropertiesOf = (klass: ConstructorType) => {
  const props: PropertyDescriptorMap = {};
  Object.getOwnPropertyNames(klass.prototype).forEach(key => {
    if (key === 'constructor') {
      return;
    }
    props[key] = { ...(Object.getOwnPropertyDescriptor(klass.prototype, key) as PropertyDescriptor) };
  });
  return props;
};
