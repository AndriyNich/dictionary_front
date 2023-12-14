import * as myYup from 'validation/myYup';

const login = (nameValidationObject = '') => {
  return myYup.string().named(nameValidationObject).required().min(3).max(10);
};

const yupSchemas = {
  login,
};

export default yupSchemas;
