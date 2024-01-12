import { Controller } from 'react-hook-form';
import TextField from '@mui/material/TextField';

export default function WrpTextField({ params } = {}) {
  let { control, errors, controlName, label = '', placeholder = '' } = params;

  return (
    <Controller
      name={controlName[0]}
      control={control}
      render={({ field }) => (
        <TextField
          fullWidth
          label={label[0]}
          id={controlName[0]}
          name={controlName[0]}
          placeholder={placeholder[0]}
          error={!!errors[controlName[0]]}
          helperText={
            errors[controlName[0]] ? errors[controlName[0]].message : ''
          }
          {...field}
        />
      )}
    />
  );
}
