import * as React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import * as yup from 'yup';

import { ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';

import { muiThemes } from 'styles/mui';
import { yupSchemas } from 'validation/yup';
import PageContainer from 'components/PageContainer/PageContainer';

import { WrpTextField } from 'common';

const schema = yup.object({
  login: yupSchemas.login('Login'),
  firstName: yupSchemas.login('First Name'),
  secondName: yup.string().required().min(3),
});

export default function Login() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      login: '',
      firstName: '',
      secondName: '',
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = date => console.log(date);

  return (
    <>
      <PageContainer>
        <form onSubmit={handleSubmit(onSubmit)}>
          <ThemeProvider theme={muiThemes.themeTextField}>
            <Box className="pb-2" sx={{ typography: 'h4' }}>
              Login
            </Box>
            <div className="flex gap-3 flex-col w-80">
              <WrpTextField
                params={{
                  control: control,
                  errors: errors,
                  name: 'login',
                  label: 'Login *',
                }}
              />
              <WrpTextField
                params={{
                  control: control,
                  errors: errors,
                  name: 'firstName',
                  label: 'First name *',
                  placeholder: 'Enter your first name',
                }}
              />
              <WrpTextField
                params={{
                  control: control,
                  errors: errors,
                  name: 'secondName',
                  label: 'Second name *',
                  placeholder: 'Enter your second name',
                }}
              />
              <input type="submit" />
            </div>
          </ThemeProvider>
        </form>
      </PageContainer>
    </>
  );
}
