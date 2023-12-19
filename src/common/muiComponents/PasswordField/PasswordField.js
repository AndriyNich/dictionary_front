import * as React from 'react';
import { useState } from 'react';

import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const PasswordField = React.forwardRef(function PasswordField(
  { params, ...field },
  ref
) {
  const [showPassword, setShowPassword] = useState(false);

  const {
    controlName = '',
    label = '',
    placeholder = ' ',
    errors = {},
    additionalErrorType = '',
  } = params;

  const handleClickShowPassword = () => setShowPassword(show => !show);

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  function messageForHelperText() {
    // console.log(`additionalErrorType: ${additionalErrorType}`);
    if (errors[controlName]) {
      return errors[controlName].message;
    }

    if (errors[additionalErrorType]) {
      return errors[additionalErrorType].message;
    }

    return '';
  }

  function isError() {
    if (!!errors[controlName]) {
      return true;
    }

    if (!!errors[additionalErrorType]) {
      return true;
    }

    return false;
  }

  return (
    <TextField
      fullWidth
      type={showPassword ? 'text' : 'password'}
      label={label}
      id={controlName}
      name={controlName}
      placeholder={placeholder}
      error={isError()}
      helperText={messageForHelperText()}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        ),
      }}
      {...field}
    />
  );
});

export default PasswordField;
