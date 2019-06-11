import { ConstructorType, InstanceType, ParameterConstructorType } from '../types';
export declare class Mixer {
    template: ConstructorType;
    static getFor(template: ConstructorType): Mixer;
    static include(template: ParameterConstructorType, target: ParameterConstructorType): void;
    static prependToInstance(template: ParameterConstructorType, target: InstanceType): void;
    _templateChain: ConstructorType[];
    constructor(template: ConstructorType);
    readonly templateChain: ConstructorType[];
    include(target: ConstructorType): void;
    prependToInstance(target: InstanceType): void;
}
