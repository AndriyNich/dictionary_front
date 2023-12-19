import * as React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Box, Button } from '@mui/material';

import { WrpTextField, WrpPasswordField, componentProps, NLink } from 'common';
import { yupSchemas } from 'validation/yup';

const tmp = 'password';

const schema = yup.object({
  // nickname: yupSchemas.nickname('Nickname'),
  // login: yupSchemas.login('Login'),
  password: yupSchemas
    .password('Password')
    .test('match', 'Error', function (value) {
      const { confirm } = this.parent;
      return confirm === value;
    }),
  confirm: yupSchemas
    .password('Confirm')
    .test('match', 'Error', function (value) {
      const value1 = this.parent[tmp] ?? '';
      return value1 === value;
    }),
});

export default function Registration(props) {
  const {
    control,
    handleSubmit,
    getValues,
    clearErrors,
    formState: { isValidating, errors },
  } = useForm({
    defaultValues: {
      nickname: '',
      login: '',
      password: '',
      confirm: '',
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = data => {
    console.log('onSubmit');
    console.log(data);
  };

  React.useEffect(() => {
    if (!isValidating) {
      if (errors?.password || errors?.confirm) {
        const { password, confirm } = getValues();

        if (password === confirm) {
          if (errors.password?.type === 'match') {
            clearErrors('password');
          }
          if (errors.confirm?.type === 'match') {
            clearErrors('confirm');
          }
        }
      }
    }
  }, [isValidating, errors.confirm, errors.password, getValues, clearErrors]);

  return (
    <Box {...props}>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full">
        <Box
          sx={{
            py: 2,
            mx: 'auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 2,
            width: 0.8,
            height: 1,
          }}
        >
          <WrpTextField
            params={
              new componentProps({
                control: control,
                errors: errors,
                controlName: 'nickname',
                label: 'Nickname *',
              })
            }
          />
          <WrpTextField
            params={
              new componentProps({
                control: control,
                errors: errors,
                controlName: 'login',
                label: 'Login *',
              })
            }
          />
          <WrpPasswordField
            params={
              new componentProps({
                control: control,
                errors: errors,
                controlName: 'password',
                label: 'Password *',
                additionalErrorType: 'match',
              })
            }
          />
          <WrpPasswordField
            params={
              new componentProps({
                control: control,
                errors: errors,
                controlName: 'confirm',
                label: 'Confirm password *',
                additionalErrorType: 'match',
              })
            }
          />
          <Button variant="contained" type="submit" fullWidth>
            Sing up
          </Button>
          <NLink to="/login" variant="body2" sx={{ ml: 'auto' }}>
            Already have an account? Sign in
          </NLink>
        </Box>
      </form>
    </Box>
  );
}
