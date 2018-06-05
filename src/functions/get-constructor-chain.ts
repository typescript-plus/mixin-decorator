import { ConstructorType } from '../types';

export const getConstructorChain = (child: ConstructorType) => {
  const chain: ConstructorType[] = [];
  let current: any = child;
  do {
    chain.unshift(current as ConstructorType);
    current = Object.getPrototypeOf(current);
  } while (typeof current === 'function');
  return chain;
};
