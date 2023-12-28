import axios from 'axios';

axios.defaults.baseURL = 'http://127.0.0.1:5000/api/';

const authToken = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = async credentials => {
  const data = await axios.post('users/register', credentials);
  authToken.set(data.token);
  return data;
};

const login = async credentials => {
  const data = await axios.post('users/login', credentials);
  authToken.set(data.token);
  return data;
};

const authenticate = {
  login,
  register,
};

export default authenticate;
