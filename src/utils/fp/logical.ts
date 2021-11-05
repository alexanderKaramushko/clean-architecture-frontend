import isEqual from 'lodash/fp/isEqual';
import curry from 'lodash/fp/curry';
import { not } from 'crocks';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const notEqual = curry((a: any) => not(isEqual(a)));
