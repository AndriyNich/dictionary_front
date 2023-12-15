// import PageContainer from 'components/PageContainer/PageContainer';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { ThemeProvider, Container, Box, Button, Link } from '@mui/material';

import { muiThemes } from 'styles/mui';
import { yupSchemas } from 'validation/yup';
import { WrpTextField, componentProps } from 'common';
import { WrpPasswordField } from 'common/reactHookFormComponents/wrapperComponents/WrpPasswordField';
import { AuthHeader } from 'components/Authenticate';
import { Copyright } from 'components/Copyryght';

const schema = yup.object({
  nickname: yup.string().min(5),
  login: yup.string().min(5),
  password: yup.string().min(5),
  // confirm: yup.string(),
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
      <ThemeProvider theme={muiThemes.themeTextField}>
        <Container
          component="main"
          maxWidth="sm"
          sx={{ maxHeight: '100%', flexGrow: 1, display: 'flex' }}
        >
          <Box
            sx={{
              mt: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: 1,
              flexGrow: 1,
            }}
          >
            <AuthHeader>Sing up</AuthHeader>
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
                    })
                  }
                />
                <Button variant="contained" type="submit" fullWidth>
                  Sing up
                </Button>
                <Link href="#" variant="body2" sx={{ ml: 'auto' }}>
                  Already have an account? Sign in
                </Link>
              </Box>
            </form>
            <Copyright sx={{ mt: 'auto', pb: 2 }} />
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
}
