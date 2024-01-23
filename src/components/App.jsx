import { Routes, Route } from 'react-router-dom';
import {
  Page404,
  HomePage,
  LoginPage,
  LogoutPage,
  RegisterPage,
  PlugPage,
} from 'pages';
import WindowApp from './interface/window/main/WindowApp';
import { ComingSoonPage } from 'components/utils';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<WindowApp />}>
          <Route index element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/logout" element={<LogoutPage />} />
          <Route path="/sub/:pageName" element={<PlugPage />} />

          <Route path="/forgotpassword" element={<ComingSoonPage />} />

          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </div>
  );
};
