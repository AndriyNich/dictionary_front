// import { Helmet } from 'react-helmet';
import * as React from 'react';
import { useForm, Controller } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import * as yup from 'yup';
import * as myYup from 'utils/myYup';
import { yupResolver } from '@hookform/resolvers/yup';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import PageContainer from 'components/PageContainer/PageContainer';

const schema = yup.object({
  firstName: myYup.string().named('').required().min(5).max(10),
  secondName: yup.string().required().min(3),
});

const theme = createTheme({
  typography: {
    fontSize: 10,
  },
  components: {
    MuiTextField: {
      defaultProps: {
        size: 'small',
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        outlined: {
          '&.MuiInputLabel-shrink': {
            top: 2,
          },
        },
      },
      // styleOverrides: {
      //   shrink: ({ ownerState, theme }) => ({
      //     ...(ownerState.shrink && {
      //       top: 3,
      //     }),
      //   }),
      // },
    },
  },
});

export default function Login() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: '',
      secondName: '',
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = date => console.log(date);

  return (
    // <ThemeProvider theme={theme}>
    <PageContainer>
      {/* <Helmet>
        <title>Login user</title>
      </Helmet> */}
      {/* <div>Login</div> */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <ThemeProvider theme={theme}>
          <Box className="pb-2" sx={{ typography: 'h4' }}>
            Login
          </Box>
          <div className="flex gap-3 flex-col w-80">
            <Controller
              name="firstName"
              control={control}
              render={({ field }) => (
                <>
                  <TextField
                    // size="small"
                    label="First name *"
                    id="firstName"
                    placeholder="Enter you first name"
                    // sx={{ typography: 'h1' }}
                    // inputProps={{ style: { fontSize: 10 } }}
                    // inputProps={{ style: { fontSize: 10 } }}
                    // InputLabelProps={{
                    //   style: { fontSize: 10, top: 3 },
                    // }}
                    error={!!errors.firstName}
                    helperText={
                      errors.firstName ? errors.firstName.message : ''
                    }
                    {...field}
                  />
                </>
              )}
            />
            <Controller
              name="secondName"
              control={control}
              render={({ field }) => (
                <TextField
                  type="number"
                  // size="small"
                  sx={{ typography: 'caption' }}
                  required
                  label="Second name"
                  id="secondName"
                  placeholder="Enter you second name"
                  error={!!errors.secondName}
                  helperText={
                    errors.secondName ? errors.secondName.message : ''
                  }
                  {...field}
                />
              )}
            />
            <input type="submit" />
          </div>
        </ThemeProvider>
      </form>
    </PageContainer>
    // </ThemeProvider>
  );
}
