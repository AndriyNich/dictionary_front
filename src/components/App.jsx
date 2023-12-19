import { Routes, Route } from 'react-router-dom';
import SharedLayout from './SharedLayout/SharedLayout';
import Home from 'pages/Home';
import Login from 'pages/Login';
import Register from 'pages/Register';
import Page404 from 'pages/Page404';
import { ComingSoonPage } from 'components/Utils';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/logout" element={<div>Logout</div>} />

          <Route path="/forgotpassword" element={<ComingSoonPage />} />

          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </div>
  );
};
