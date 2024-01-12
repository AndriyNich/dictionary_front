import { useState, useEffect, useContext, useCallback } from 'react';
import { ContextAuth, clearAuthData } from 'common/context/auth';
import authenticate from 'api/auth';

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

const useLogout = () => {
  const {
    state: { isLoggedIn },
    dispatch: authDispatch,
  } = useContext(ContextAuth);

  const [isLogout, setIsLogout] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleLogout = useCallback(async () => {
    if (isLoggedIn) {
      try {
        const success = await logout(authDispatch);
        setIsLogout(success);
      } finally {
        setIsLoading(false);
      }
    }
  }, [authDispatch, isLoggedIn]);

  useEffect(() => {
    handleLogout();
  }, [handleLogout]);

  return [!isLoggedIn && isLogout, isLoading];
};

export default useLogout;
