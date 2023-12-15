import * as React from 'react';
import { Avatar, Typography } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

export default function AuthHeader({ children }) {
  return (
    <>
      <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
        <LockOutlinedIcon />
      </Avatar>

      <Typography component="h1" variant="h5">
        {children}
      </Typography>
    </>
  );
}
