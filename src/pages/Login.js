import * as React from 'react';

import { AuthContainer, AuthHeader, Login } from 'components/authenticate';
import Copyright from 'components/Copyright';

export default function Register() {
  return (
    <AuthContainer>
      <AuthHeader sx={{ mt: 4 }}>Sing in</AuthHeader>
      <Login sx={{ mt: 1, width: 1 }} />
      <Copyright sx={{ mt: 'auto', pb: 2 }} />
    </AuthContainer>
  );
}
