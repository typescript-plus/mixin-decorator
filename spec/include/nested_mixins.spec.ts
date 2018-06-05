// tslint:disable:max-classes-per-file
import { Mixin } from '../../src';

const RESULT1 = {};
const RESULT2 = {};
const RESULT3 = {};

class Mixin1 {
  f1() {
    return RESULT1;
  }
}

@Mixin(Mixin1)
class Mixin2 implements Mixin1 {
  f1!: () => {};

  f2() {
    return RESULT2;
  }
}

@Mixin(Mixin2)
class Mixin3 implements Mixin2 {
  f1!: () => {};
  f2!: () => {};

  f3() {
    return RESULT3;
  }
}

@Mixin(Mixin3)
class Target implements Mixin3 {
  f1!: () => {};
  f2!: () => {};
  f3!: () => {};
}

it('incude - Nested Mixins', () => {
  const o = new Target();
  // tslint:disable-next-line:no-inferred-empty-object-type
  expect(o.f1()).toBe(RESULT1);
  // tslint:disable-next-line:no-inferred-empty-object-type
  expect(o.f2()).toBe(RESULT2);
  // tslint:disable-next-line:no-inferred-empty-object-type
  expect(o.f3()).toBe(RESULT3);
});
