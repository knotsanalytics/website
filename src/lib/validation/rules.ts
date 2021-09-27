// @ts-nocheck
// TODO Add typings. ST.
import * as R from 'ramda';

export const isRequired = v => R.complement(R.isEmpty)(v);
export const isEmail = val =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

export const minLength = min =>
  R.pipe(R.defaultTo(''), R.trim, R.prop('length'), R.flip(R.gte)(min));

export const isEqual = val => R.equals(val);
