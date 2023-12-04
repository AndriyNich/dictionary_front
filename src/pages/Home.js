import { Helmet } from 'react-helmet';
import PageContainer from 'components/PageContainer/PageContainer';

export default function Home() {
  return (
    <>
      <PageContainer>
        <Helmet>
          <title>App Dictionary</title>
        </Helmet>
        <div>Home</div>
      </PageContainer>
    </>
  );
}
