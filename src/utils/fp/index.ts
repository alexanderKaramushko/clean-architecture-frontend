import curry from 'lodash/fp/curry';
import constant from 'lodash/fp/constant';

export const not = curry(
  (predicate: (...ags: any[]) => boolean, ...rest: any[]) => constant(!predicate(...rest)),
);
