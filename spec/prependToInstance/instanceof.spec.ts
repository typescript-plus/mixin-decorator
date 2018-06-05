// tslint:disable:max-classes-per-file
import { Mixer, Mixin } from '../../src';

class Mixin1 {}

@Mixin(Mixin1)
class Mixin2 {}

class Parent {}

class Target extends Parent {
  constructor() {
    super();
    Mixer.prependToInstance(Mixin2, this);
  }
}

it('prependToInstance - instanceof', () => {
  const o = new Target();
  expect(o instanceof Target).toBe(true);
  expect(o instanceof Parent).toBe(true);
  expect(o instanceof Mixin1).toBe(false);
  expect(o instanceof Mixin2).toBe(false);
});
