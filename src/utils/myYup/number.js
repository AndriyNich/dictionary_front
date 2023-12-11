import * as yup from 'yup';

export const create = function () {
  return new MyNumberSchema();
};

export default class MyNumberSchema extends yup.NumberSchema {
  fieldName = '';

  named(fieldName = '') {
    this.fieldName = `"${fieldName}"`;
    return this;
  }

  addParams(result = {}) {
    result.fieldName = this.fieldName;
    return result;
  }

  min(min, message) {
    return this.addParams(super.min(min, message));
  }

  max(max, message) {
    return this.addParams(super.max(max, message));
  }

  lessThan(less, message) {
    return this.addParams(super.lessThan(less, message));
  }

  moreThan(more, message) {
    return this.addParams(super.moreThan(more, message));
  }

  positive(message) {
    return this.addParams(super.positive(message));
  }

  negative(message) {
    return this.addParams(super.negative(message));
  }

  integer(message) {
    return this.addParams(super.integer(message));
  }
}
