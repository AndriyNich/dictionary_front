import { Helmet } from 'react-helmet';
import PageContainer from 'components/PageContainer/PageContainer';

export default function Register() {
  return (
    <>
      <PageContainer>
        <Helmet>
          <title>Registration user</title>
        </Helmet>
        <div>Registration form</div>
      </PageContainer>
    </>
  );
}
