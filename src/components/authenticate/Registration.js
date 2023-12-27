import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Box, Button } from '@mui/material';

import {
  WrpTextField,
  WrpConfirmPassword,
  componentProps,
  NLink,
} from 'common';
import { yupSchemas } from 'validation/yup';
import { getDefaultValues } from 'utils/function';

const comparisonErrorType = 'match';

const fields = {
  nickname: { name: 'nickname', label: 'Nickname *' },
  login: { name: 'login', label: 'Login * ' },
  password: { name: 'password', label: 'Password *' },
  confirm: { name: 'confirm', label: 'Confirm *' },
};

const schema = yup.object({
  nickname: yupSchemas.nickname(fields.nickname.name),
  login: yupSchemas.login(fields.login.name),
  password: yupSchemas.passwordWithConparison(
    fields.password.name,
    fields.confirm.name,
    comparisonErrorType
  ),
  confirm: yupSchemas.passwordWithConparison(
    fields.confirm.name,
    fields.password.name,
    comparisonErrorType
  ),
});

export default function Registration(props) {
  const {
    control,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: getDefaultValues(fields),
    resolver: yupResolver(schema),
  });

  const onSubmit = data => {
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
          <WrpTextField
            params={
              new componentProps({
                control: control,
                errors: errors,
                controlName: fields.nickname.name,
                label: fields.nickname.label,
              })
            }
          />
          <WrpTextField
            params={
              new componentProps({
                control: control,
                errors: errors,
                controlName: fields.login.name,
                label: fields.login.label,
              })
            }
          />
          <WrpConfirmPassword
            params={
              new componentProps({
                control,
                errors,
                controlName: [fields.password.name, fields.confirm.name],
                label: [fields.password.label, fields.confirm.label],
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
          <NLink to="/login" variant="body2" sx={{ ml: 'auto' }}>
            Already have an account? Sign in
          </NLink>
        </Box>
      </form>
    </Box>
  );
}
