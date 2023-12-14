// import PageContainer from 'components/PageContainer/PageContainer';
import * as React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { ThemeProvider, Container, Box, Typography } from '@mui/material';
import { muiThemes } from 'styles/mui';
import { yupSchemas } from 'validation/yup';
import { WrpTextField } from 'common';
import { WrpPasswordField } from 'common/reactHookFormComponents/wrapperComponents/WrpPasswordField';
//import

const schema = yup.object({
  nickname: yup.string(),
  login: yup.string().min(5),
  password: yup.string().min(5),
  confirm: yup.string(),
});

export default function Register() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      nickname: '',
      login: '',
      password: '',
      confirm: '',
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = data => console.log(data);

  return (
    <>
      <Container component="main" maxWidth="lg">
        <Typography component="h1" variant="h5">
          Sing Up
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <ThemeProvider theme={muiThemes.themeTextField}>
            <Box>
              <WrpTextField
                params={{
                  control: control,
                  errors: errors,
                  name: 'nickname',
                  label: 'Nickname *',
                }}
              />
              <WrpTextField
                params={{
                  control: control,
                  errors: errors,
                  name: 'login',
                  label: 'Login *',
                }}
              />

              <WrpPasswordField
                params={{
                  control: control,
                  errors: errors,
                  name: 'password',
                  label: 'Password *',
                }}
              />
              <input type="submit" />
            </Box>
          </ThemeProvider>
        </form>
      </Container>
    </>
  );
}
