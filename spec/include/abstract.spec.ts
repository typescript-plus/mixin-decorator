// tslint:disable:max-classes-per-file
import { Mixin } from '../../src';

let getterCalled = false;
let setterCalled = false;

abstract class Mixin1 {
  // tslint:disable-next-line:variable-name
  _v!: boolean;

  get val() {
    getterCalled = true;
    return this._v;
  }

  set val(v: boolean) {
    setterCalled = true;
    this._v = v;
  }
}

@Mixin(Mixin1)
class Target implements Mixin1 {
  // tslint:disable-next-line:variable-name
  _v = false;
  val!: boolean;
}

it('include - abstract', () => {
  const o = new Target();
  expect(o._v).toBe(false);
  expect(o.val).toBe(false);
  o.val = true;
  expect(o._v).toBe(true);
  expect(o.val).toBe(true);
  expect(getterCalled).toBe(true);
  expect(setterCalled).toBe(true);
});
