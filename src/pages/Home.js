import { AuthContainer } from 'components/authenticate';
import { HomePage } from 'components/main/HomePage';
import Copyright from 'components/Copyright';

export default function Home() {
  return (
    <AuthContainer>
      <HomePage sx={{ mt: 1, width: 1 }} />
      <Copyright sx={{ mt: 'auto', pb: 2 }} />
    </AuthContainer>
  );
}
