import * as yup from 'yup';
import { setFirstCharToUpper } from 'utils/function/string';

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

  required(
    message = setFirstCharToUpper(`${this.fieldName} is a required field`)
  ) {
    return this.addParams(super.required(message));
  }

  min(
    min,
    message = setFirstCharToUpper(
      `${this.fieldName} length must be ${min} or more`
    )
  ) {
    return this.addParams(super.min(min, message));
  }

  max(
    max,
    message = setFirstCharToUpper(
      `${this.fieldName} length  must be ${max} or less`
    )
  ) {
    return this.addParams(super.max(max, message));
  }

  lessThan(
    less,
    message = setFirstCharToUpper(`${this.fieldName} must be ${less} or less`)
  ) {
    return this.addParams(super.lessThan(less, message));
  }

  moreThan(
    more,
    message = setFirstCharToUpper(`${this.fieldName}  must be ${more} or more`)
  ) {
    return this.addParams(super.moreThan(more, message));
  }

  positive(
    message = setFirstCharToUpper(`${this.fieldName}  must be positive`)
  ) {
    return this.addParams(super.positive(message));
  }

  negative(
    message = setFirstCharToUpper(`${this.fieldName} must be negative`)
  ) {
    return this.addParams(super.negative(message));
  }

  integer(message = setFirstCharToUpper(`${this.fieldName} must be integer`)) {
    return this.addParams(super.integer(message));
  }
}
