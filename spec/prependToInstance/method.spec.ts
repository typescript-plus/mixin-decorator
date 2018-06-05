// tslint:disable:max-classes-per-file
import { Mixer } from '../../src';

const RESULT = {};

class Mixin1 {
  fn() {
    return RESULT;
  }
}

class Target implements Mixin1 {
  fn!: () => {};

  constructor() {
    Mixer.prependToInstance(Mixin1, this);
  }
}

it('prependToInstance - Method', () => {
  const o = new Target();
  // tslint:disable-next-line:no-inferred-empty-object-type
  expect(o.fn()).toBe(RESULT);
});
