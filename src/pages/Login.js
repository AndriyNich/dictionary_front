// import { Helmet } from 'react-helmet';
import * as React from 'react';
import { useForm, Controller } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import * as yup from 'yup';
import * as myYup from 'utils/myYup';
import { yupResolver } from '@hookform/resolvers/yup';

import PageContainer from 'components/PageContainer/PageContainer';

console.log(myYup.string().named('First name').required().min(5).max(10));

const schema = yup.object({
  firstName: myYup.string().named('First name').required().min(5).max(10),
  secondName: yup.string().required().min(3),
});
console.log(schema);

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
    <PageContainer>
      {/* <Helmet>
        <title>Login user</title>
      </Helmet> */}
      {/* <div>Login</div> */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex gap-3 flex-col w-80">
          <Controller
            name="firstName"
            control={control}
            render={({ field }) => (
              <>
                <TextField
                  label="First name *"
                  id="firstName"
                  placeholder="Enter you first name"
                  error={!!errors.firstName}
                  helperText={errors.firstName ? errors.firstName.message : ''}
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
                required
                label="Second name"
                id="secondName"
                placeholder="Enter you second name"
                error={!!errors.secondName}
                helperText={errors.secondName ? errors.secondName.message : ''}
                {...field}
              />
            )}
          />
          <input type="submit" />
        </div>
      </form>
    </PageContainer>
  );
}
