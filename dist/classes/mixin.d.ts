import { ParameterConstructorType } from '../types';
export declare const Mixin: <T extends ParameterConstructorType>(template: T) => <U extends ParameterConstructorType>(target: U) => U;
