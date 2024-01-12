import * as React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Box, Button } from '@mui/material';

import { componentProps } from 'common';
import WrpConfirmPassword from 'common/reactHookFormComponents/wrapperComponents/WrpConfirmPassword';
import { yupSchemas } from 'validation/yup';
// import { useFetch } from 'hooks';
// import authenticate from 'api/auth';

const comparisonErrorType = 'match';

const schema = yup.object({
  password: yupSchemas.passwordWithConparison(
    'password',
    'confirm',
    comparisonErrorType
  ),
  confirm: yupSchemas.passwordWithConparison(
    'confirm',
    'password',
    comparisonErrorType
  ),
});

const defaultValues = {
  nickname: '',
  login: '',
  password: '',
  confirm: '',
};

export default function Home(props) {
  const {
    control,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  });

  // const [data, getFetch] = useFetch(authenticate.login)

  const onSubmit = data => {
    // const { login, password } = data;
    // const body = {
    //   email: login,
    //   password: password,
    // };

    // const res = useFetch(authenticate.login, body);

    console.log('onSubmit');
    console.log(data);
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
          <WrpConfirmPassword
            params={
              new componentProps({
                control,
                errors,
                controlName: ['password', 'confirm'],
                label: ['password *', 'confirm *'],
                comparisonErrorType,
              })
            }
            getValues={getValues}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 2,
              width: 1,
            }}
          />
          <Button variant="contained" type="submit" fullWidth>
            Sing up
          </Button>
        </Box>
      </form>
    </Box>
  );
}
