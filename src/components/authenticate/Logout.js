import { NLink } from 'common';
import { useLogout } from 'hooks';

// FIXME create a correct visualization of the logout message
// TODO change static messages to function
const renderLogoutMessage = ({ isLogout, isLoading }) => {
  if (isLoading) {
    return 'Logout process ...';
  } else if (isLogout) {
    return 'Logout success';
  } else {
    return 'An error occurred during logout';
  }
};

export default function Logout() {
  const [isLogout, isLoading] = useLogout();

  return (
    <>
      <div className="pt-4 pb-4 flex flex-col items-center">
        <div className="mb-4">
          {renderLogoutMessage({ isLogout, isLoading })}
        </div>{' '}
        <NLink to="/login" variant="body2">
          Go to Sing in
        </NLink>
      </div>
    </>
  );
}
