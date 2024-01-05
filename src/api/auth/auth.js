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
  authToken.set(data.data.token);
  return data;
};

const login = async credentials => {
  const data = await axios.post('users/login', credentials);
  console.log(data);
  authToken.set(data.data.token);
  return data;
};

const logout = async () => {
  console.log(axios.defaults.headers.common.Authorization);
  const data = await axios.post('users/logout');
  authToken.unset();
  return data;
};

const authenticate = {
  login,
  logout,
  register,
};

export default authenticate;
