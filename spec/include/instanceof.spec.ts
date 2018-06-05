// tslint:disable:max-classes-per-file
import { Mixin } from '../../src';

class Mixin1 {}

@Mixin(Mixin1)
class Mixin2 {}

class Parent {}

@Mixin(Mixin2)
class Target extends Parent {}

it('include - instanceof', () => {
  const o = new Target();
  expect(o instanceof Target).toBe(true);
  expect(o instanceof Parent).toBe(true);
  expect(o instanceof Mixin1).toBe(false);
  expect(o instanceof Mixin2).toBe(false);
});
