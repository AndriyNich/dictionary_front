// import { Helmet } from 'react-helmet';
import PageContainer from 'components/PageContainer/PageContainer';
import HookForm from 'components/HookForm/HookForm';

export default function Home() {
  return (
    <PageContainer>
      {/* <Helmet>
        <title>App Dictionary</title>
      </Helmet> */}
      <div>
        <div>Home</div>
        <br />
        <HookForm />
      </div>
    </PageContainer>
  );
}
