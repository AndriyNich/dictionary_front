import * as yup from 'yup';
import { setFirstCharToUpper } from 'utils/function/string';

export const create = function () {
  return new MyStringSchema();
};

export default class MyStringSchema extends yup.StringSchema {
  fieldName = '';

  named(fieldName = '') {
    this.fieldName = fieldName !== '' ? `"${fieldName}"` : '';
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

  length(
    length,
    message = setFirstCharToUpper(
      `${this.fieldName} must be at least ${length} characters`
    )
  ) {
    return this.addParams(super.length(length, message));
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

  matches(regex, options) {
    // треба буде розписати options на message і інші, та реалізувати збірку і прокидування далі
    return this.addParams(super.matches(regex, options));
  }

  email(message = setFirstCharToUpper(`${this.fieldName} is not email`)) {
    return this.addParams(super.email(message));
  }

  uuid(message = setFirstCharToUpper(`${this.fieldName}`)) {
    return this.addParams(super.uuid(message));
  }

  trim(message = setFirstCharToUpper(`${this.fieldName}`)) {
    return this.addParams(super.trim(message));
  }

  lowercase(message = setFirstCharToUpper(`${this.fieldName}`)) {
    return this.addParams(super.lowercase(message));
  }

  uppercase(message = setFirstCharToUpper(`${this.fieldName}`)) {
    return this.addParams(super.uppercase(message));
  }
}
