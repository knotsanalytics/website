// @ts-nocheck
import spected from 'spected';
import * as R from 'ramda';

const removeTrueFields = R.reject(R.equals(true));

export const createValidator = rules => values => {
  const validationResult = spected(rules, values);
  const errors = R.pipe(removeTrueFields, R.map(R.head))(validationResult);
  return errors;
};
