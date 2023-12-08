// import { Helmet } from 'react-helmet';

export default function PageContainer({ children }) {
  return (
    <>
      {/* <Helmet>
        <title>User app</title>
      </Helmet> */}
      <div className="flex justify-center items-center text-4xl text-gray-950">
        {children}
      </div>
    </>
  );
}
