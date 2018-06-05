import { ConstructorType } from '../types';

export const createClass = (superclass: ConstructorType | undefined, name: string) => {
  const exp =
    '(function (_super) {\
       return function $1() {\
         return _super && _super.apply(this, arguments) || this;\
       };\
     });';
  // tslint:disable-next-line:no-eval
  return (eval(exp.replace('$1', name)) as (superclass: any) => ConstructorType)(superclass);
};
