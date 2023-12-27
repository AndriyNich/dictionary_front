import { Routes, Route } from 'react-router-dom';
import Home from 'pages/Home';
import Login from 'pages/Login';
import Register from 'pages/Register';
import Page404 from 'pages/Page404';
import WindowApp from './interface/window/main/WindowApp';
import { ComingSoonPage } from 'components/utils';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<WindowApp />}>
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
