// tslint:disable:max-classes-per-file
import { Mixin } from '../../src';

const RESULT = {};

class Mixin1 {
  fn() {
    return RESULT;
  }
}

@Mixin(Mixin1)
class Target implements Mixin1 {
  fn!: () => {};
}

it('include - Method', () => {
  const o = new Target();
  // tslint:disable-next-line:no-inferred-empty-object-type
  expect(o.fn()).toBe(RESULT);
});
