import { Controller } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import { setFirstCharToUpper } from 'utils/function/string';

export default function WrpTextField({ params } = {}) {
  let { control, errors, name, label = '', placeholder = '' } = params;

  if (label === '') {
    label = setFirstCharToUpper(name);
  }
  if (placeholder === '') {
    placeholder = `Enter you ${name}`;
  }

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <TextField
          label={label}
          id={name}
          placeholder={placeholder}
          error={!!errors[name]}
          helperText={errors[name] ? errors[name].message : ''}
          {...field}
        />
      )}
    />
  );
}
