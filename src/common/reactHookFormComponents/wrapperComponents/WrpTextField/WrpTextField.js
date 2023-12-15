import { Controller } from 'react-hook-form';
import TextField from '@mui/material/TextField';

export default function WrpTextField({ params } = {}) {
  let { control, errors, controlName, label = '', placeholder = '' } = params;

  return (
    <Controller
      name={controlName}
      control={control}
      render={({ field }) => (
        <TextField
          fullWidth
          label={label}
          id={controlName}
          name={controlName}
          placeholder={placeholder}
          error={!!errors[controlName]}
          helperText={errors[controlName] ? errors[controlName].message : ''}
          {...field}
        />
      )}
    />
  );
}
