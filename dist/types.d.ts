export declare type AbstractConstructorType = Function & {
    prototype: any;
};
export declare type ParameterConstructorType = AbstractConstructorType | ConstructorType;
export interface ConstructorType {
    new (...args: any[]): {};
}
export interface InstanceType {
    constructor: Function;
}
