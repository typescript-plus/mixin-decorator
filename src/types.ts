// tslint:disable-next-line:ban-types
export type AbstractConstructorType = Function & { prototype: any };
export type ParameterConstructorType = AbstractConstructorType | ConstructorType;
export interface ConstructorType {
  new (...args: any[]): {};
}

// tslint:disable-next-line:interface-over-type-literal
export interface InstanceType {
  // tslint:disable-next-line:ban-types
  constructor: Function;
}
