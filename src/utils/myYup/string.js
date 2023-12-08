import * as yup from 'yup';

export const create = function () {
  return new MyStringSchema();
};

export default class MyStringSchema extends yup.StringSchema {
  required(message = 'Error: a value must be specified') {
    return super.required(message);
  }

  length(length, message = `Error: the string length must be ${length}`) {
    return super.length(length, message);
  }

  min(min, message = `Error: the number of symbols must be ${min} or more`) {
    return super.min(min, message);
  }

  max(max, message = `Error: the number of symbols must be ${max} or less`) {
    return super.max(max, message);
  }

  matches(regex, options) {
    // треба буде розписати options на message і інші, та реалізувати збірку і прокидування далі
    return super.matches(regex, options);
  }

  email(message = 'Error: ') {
    return super.email(message);
  }

  uuid(message = 'Error: ') {
    return super.uuid(message);
  }

  trim(message = 'Error: ') {
    return super.trim(message);
  }

  lowercase(message) {
    return super.lowercase(message);
  }

  uppercase(message) {
    return super.uppercase(message);
  }
}
