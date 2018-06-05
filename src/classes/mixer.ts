import { copyConstructor } from '../functions/copy-constuctor';
import { getConstructorChain } from '../functions/get-constructor-chain';
import { inherit } from '../functions/inherit';
import { ConstructorType, InstanceType, ParameterConstructorType } from '../types';

const cache = new Map<ConstructorType, Mixer>();

export class Mixer {
  static getFor(template: ConstructorType) {
    let mixer = cache.get(template);
    if (!mixer) {
      mixer = new Mixer(template);
      cache.set(template, mixer);
    }
    return mixer;
  }

  static include(template: ParameterConstructorType, target: ParameterConstructorType) {
    this.getFor(template as ConstructorType).include(target as ConstructorType);
  }

  static prependToInstance(template: ParameterConstructorType, target: InstanceType) {
    this.getFor(template as ConstructorType).prependToInstance(target);
  }

  // tslint:disable-next-line:variable-name
  _templateChain!: ConstructorType[];

  constructor(public template: ConstructorType) {}

  get templateChain() {
    // tslint:disable-next-line:strict-boolean-expressions
    return this._templateChain || (this._templateChain = getConstructorChain(this.template).slice(1));
  }

  include(target: ConstructorType) {
    const targetChain = getConstructorChain(target).slice(1);
    const chain: ConstructorType[] = [];
    // tslint:disable-next-line:no-magic-numbers
    let superclass: ConstructorType = targetChain[targetChain.length - 2];
    this.templateChain.forEach(template => {
      superclass = copyConstructor(superclass, template, target);
      chain.push(superclass);
    });
    inherit(target, chain[chain.length - 1], target);
  }

  prependToInstance(target: InstanceType) {
    const targetConstructor = target.constructor as ConstructorType;
    const chain: ConstructorType[] = [];
    let superclass = targetConstructor;
    this.templateChain.forEach(template => {
      superclass = copyConstructor(superclass, template, targetConstructor);
      chain.push(superclass);
    });
    Object.setPrototypeOf(target, chain[chain.length - 1].prototype as object);
  }
}
