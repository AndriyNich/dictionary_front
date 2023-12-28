import * as React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Box, Button } from '@mui/material';

import { WrpTextField, WrpPasswordField, componentProps } from 'common';
import { NLink } from 'common/muiComponents';
import { yupSchemas } from 'validation/yup';
import authenticate from 'api/auth';

const schema = yup.object({
  login: yupSchemas.login('Login'),
  password: yupSchemas.password('Password'),
});

export default function Login(props) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      login: '',
      password: '',
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = async data => {
    const { login, password } = data;
    const body = {
      email: login,
      password: password,
    };
    try {
      const result = await authenticate.login(body);
      // FIXME implement the transition if registration or login was successful
      console.log(result);
    } catch (err) {
      // FIXME make an error display
      console.log(err);
    }
  };

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
              })
            }
          />
          <Button variant="contained" type="submit" fullWidth>
            Sing in
          </Button>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              width: 1,
            }}
          >
            <NLink to="/forgotpassword" variant="body2">
              Forgot password?
            </NLink>
            <NLink to="/register" variant="body2">
              Don't have an account? Sign Up
            </NLink>
          </Box>
        </Box>
      </form>
    </Box>
  );
}
