import { Helmet } from 'react-helmet';
import PageContainer from 'components/PageContainer/PageContainer';

export default function Login() {
  return (
    <PageContainer>
      <Helmet>
        <title>Login user</title>
      </Helmet>
      <div>Login</div>
    </PageContainer>
  );
}
