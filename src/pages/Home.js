import { AuthContainer } from 'components/Authenticate';
import { HomePage } from 'components/Main/HomePage';
import { Copyright } from 'components/Copyryght';

export default function Home() {
  return (
    <AuthContainer>
      <HomePage sx={{ mt: 1, width: 1 }} />
      <Copyright sx={{ mt: 'auto', pb: 2 }} />
    </AuthContainer>
  );
}
