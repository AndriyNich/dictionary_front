import * as React from 'react';

import { AuthContainer, AuthHeader, Logout } from 'components/authenticate';
import Copyright from 'components/Copyright';

export default function LogoutPage() {
  return (
    <AuthContainer>
      <AuthHeader sx={{ mt: 4 }}>Logout</AuthHeader>
      <Logout sx={{ mt: 1, width: 1 }} />
      <Copyright sx={{ mt: 'auto', pb: 2 }} />
    </AuthContainer>
  );
}
