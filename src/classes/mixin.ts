// tslint:disable:max-classes-per-file
import { ConstructorType, ParameterConstructorType } from '../types';
import { Mixer } from './mixer';

// tslint:disable-next-line:variable-name
export const Mixin = <T extends ParameterConstructorType>(template: T) => <U extends ParameterConstructorType>(
  target: U
) => {
  Mixer.getFor(template as ConstructorType).include(target as ConstructorType);
  return target;
};
