import * as React from 'react';

import {
  AuthContainer,
  AuthHeader,
  Registration,
} from 'components/Authenticate';
import { Copyright } from 'components/Copyryght';

export default function Register() {
  return (
    <AuthContainer>
      <AuthHeader sx={{ mt: 4 }}>Sing up</AuthHeader>
      <Registration sx={{ mt: 1, width: 1 }} />
      <Copyright sx={{ mt: 'auto', pb: 2 }} />
    </AuthContainer>
  );
}
