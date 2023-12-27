import * as React from 'react';
import { Typography } from '@mui/material';

import { NLink } from 'common';
import { AuthContainer } from 'components/authenticate';

export default function ComingSoonPage() {
  return (
    <AuthContainer>
      <Typography sx={{ mt: 4 }} component="h1" variant="h5">
        The page is currently under construction.
      </Typography>

      <NLink sx={{ mt: 4 }} to="/">
        Do you want to go to the main page?
      </NLink>
    </AuthContainer>
  );
}
