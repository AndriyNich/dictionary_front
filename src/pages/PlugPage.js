import { useParams } from 'react-router-dom';

import { AuthContainer } from 'components/authenticate';
import { getPlugPageContent } from 'settings';

export default function LogoutPage() {
  const { pageName } = useParams();

  return (
    <AuthContainer>
      <div>{getPlugPageContent(pageName)}</div>
    </AuthContainer>
  );
}
