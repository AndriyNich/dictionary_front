import { AuthContainer } from 'components/authenticate';
import { Home } from 'components/main/Home';
import Copyright from 'components/Copyright';

export default function HomePage() {
  return (
    <AuthContainer>
      <Home sx={{ mt: 1, width: 1 }} />
      <Copyright sx={{ mt: 'auto', pb: 2 }} />
    </AuthContainer>
  );
}
