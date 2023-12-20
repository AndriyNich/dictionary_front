import * as React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Box, Button } from '@mui/material';

import { componentProps } from 'common';
import { WrpConfirmPassword } from 'common/reactHookFormComponents/wrapperComponents/WrpConfirmPassword';
import { yupSchemas } from 'validation/yup';

const tmp = 'password';

const schema = yup.object({
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

export default function HomePage(props) {
  const {
    control,
    handleSubmit,
    getValues,
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

  const onSubmit = data => {
    console.log('onSubmit');
    console.log(data);
  };

  console.log('load');
  console.log(errors);

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
                control: control,
                errors: errors,
                controlName: ['password', 'confirm'],
                label: ['password *', 'confirm *'],
                fieldComparisonErrorType: 'match',
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
