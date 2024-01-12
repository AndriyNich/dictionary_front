import * as React from 'react';

import {
  AuthContainer,
  AuthHeader,
  Registration,
} from 'components/authenticate';
import Copyright from 'components/Copyright';

export default function RegisterPage() {
  return (
    <AuthContainer>
      <AuthHeader sx={{ mt: 4 }}>Sing up</AuthHeader>
      <Registration sx={{ mt: 1, width: 1 }} />
      <Copyright sx={{ mt: 'auto', pb: 2 }} />
    </AuthContainer>
  );
}
