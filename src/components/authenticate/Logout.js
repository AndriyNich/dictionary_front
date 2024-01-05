import { useEffect, useContext } from 'react';
import authenticate from 'api/auth';
import { ContextAuth, AUTH_ACTION_TYPE } from 'common/context/auth';

const clearAuthData = () => {
  return {
    type: AUTH_ACTION_TYPE.LOGOUT,
    payload: {
      user: {
        nickname: '',
        login: '',
      },
      token: '',
      isLoggedIn: false,
    },
  };
};

const logout = async dispatch => {
  try {
    const result = await authenticate.logout();
    if (result.status === 204) {
      dispatch(clearAuthData());
      return true;
    }
  } catch (err) {}

  return false;
};

let isLogout = false;

export default function Logout() {
  const {
    state: { isLoggedIn },
    dispatch: authDispatch,
  } = useContext(ContextAuth);

  // [ ] maybe don't use useEffect
  useEffect(() => {
    if (isLoggedIn) {
      isLogout = logout(authDispatch);
    }
  }, [authDispatch, isLoggedIn]);

  // FIXME create a correct visualization of the logout message
  // TODO change static messages to function
  return (
    <>
      <div className="pt-4 pb-4">
        {!isLoggedIn && isLogout
          ? 'Logout success'
          : 'An error occurred during logout'}
      </div>
    </>
  );
}
