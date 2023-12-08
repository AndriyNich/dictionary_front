import * as yup from 'yup';

export const create = function () {
  return new MyNumberSchema();
};

export default class MyNumberSchema extends yup.NumberSchema {
  min(min, message) {
    return super.min(min, message);
  }

  max(max, message) {
    return super.max(max, message);
  }

  lessThan(less, message) {
    return super.lessThan(less, message);
  }

  moreThan(more, message) {
    return super.moreThan(more, message);
  }

  positive(msg) {
    return super.positive(msg);
  }

  integer(message) {
    return super.integer(message);
  }
}
