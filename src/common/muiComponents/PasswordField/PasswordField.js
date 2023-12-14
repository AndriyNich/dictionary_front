import * as React from 'react';
import { useState } from 'react';

import IconButton from '@mui/material/IconButton';
//import OutlinedInput from '@mui/material/OutlinedInput';
//import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
// import FormHelperText from '@mui/material/FormHelperText';
//import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const PasswordField = React.forwardRef(function PasswordField(
  { params, ...field },
  ref
) {
  const [showPassword, setShowPassword] = useState(false);

  const { id = '', label = '', placeholder = ' ', errors = {} } = params;

  const handleClickShowPassword = () => setShowPassword(show => !show);

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  return (
    <TextField
      label={label}
      id={id}
      name={id}
      placeholder={placeholder}
      error={!!errors[id]}
      helperText={errors[id] ? errors[id].message : ''}
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
      // variant="standard"
    />

    //   <FormControl variant="outlined">
    //     <InputLabel htmlFor={`${id}`}>{label}</InputLabel>
    //     <OutlinedInput
    //       id={id}
    //       name={id}
    //       label={label}
    //       type={showPassword ? 'text' : 'password'}
    //       placeholder={placeholder}
    //       // error={!!errors[id]}
    //       // helperText={errors[id] ? errors[id].message : ''}
    //       endAdornment={
    //         <InputAdornment position="end">
    //           <IconButton
    //             aria-label="toggle password visibility"
    //             onClick={handleClickShowPassword}
    //             onMouseDown={handleMouseDownPassword}
    //             edge="end"
    //           >
    //             {showPassword ? <VisibilityOff /> : <Visibility />}
    //           </IconButton>
    //         </InputAdornment>
    //       }
    //       {...field}
    //     />
    //   </FormControl>
  );
});

export default PasswordField;
