import { ConstructorType } from '../types';

export const nameOfConstructor = (klass: ConstructorType) => {
  let name = klass.name;
  // tslint:disable-next-line:strict-boolean-expressions
  if (name) {
    return name;
  }
  name = klass.toString().substr('function '.length);
  return name.substr(0, name.indexOf('('));
};
