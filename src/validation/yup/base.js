import * as myYup from 'validation/myYup';

const regex = {
  number: ['(?=.*[0-9])', 'must contain at least one digit'],
  specialcharacter: [
    '(?=.*[!@#$%^&*])',
    'must contain at least one special character',
  ],
  letterLowerCase: [
    '(?=.*[a-z])',
    'must contain at least one lowercase letter',
  ],
  letterUpperCase: [
    '(?=.*[A-Z])',
    'must contain at least one uppercase letter',
  ],
  length(number) {
    return [
      `[0-9a-zA-Z!@#$%^&*]{${number},}`,
      `must contain more than ${number} characters`,
    ];
  },
};

const login = (nameValidationObject = '') => {
  return myYup
    .string()
    .named(nameValidationObject)
    .required()
    .min(5)
    .max(50)
    .email();
};

const nickname = (nameValidationObject = '') => {
  return myYup.string().named(nameValidationObject).required().min(3).max(50);
};

const password = (nameValidationObject = '') => {
  return myYup.string().named(nameValidationObject).required().min(6).max(50);
  // .matches(regex.number[0], regex.number[1])
  // .matches(regex.specialcharacter[0], regex.specialcharacter[1])
  // .matches(regex.letterLowerCase[0], regex.letterLowerCase[1])
  // .matches(regex.letterUpperCase[0], regex.letterUpperCase[1])
  // .matches(regex.length(6)[0], regex.length(6)[1]);
};

const yupSchemas = {
  login,
  nickname,
  password,
};

export default yupSchemas;
