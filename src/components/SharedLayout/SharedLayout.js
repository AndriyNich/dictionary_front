import { NavLink, Outlet } from 'react-router-dom';
import { menuActiveElement } from 'styles/menuActiveElement';
import { Container } from '@mui/material';

export default function SharedLayout() {
  return (
    <Container
      maxWidth="lg"
      sx={{ height: '100vh', display: 'flex', flexDirection: 'column' }}
    >
      <header>
        <nav className="flex gap-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? menuActiveElement.mainMenu : ''
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive ? menuActiveElement.mainMenu : ''
            }
          >
            Login
          </NavLink>
          <NavLink
            to="/register"
            className={({ isActive }) =>
              isActive ? menuActiveElement.mainMenu : ''
            }
          >
            Registration
          </NavLink>
          <NavLink
            to="/logout"
            className={({ isActive }) =>
              isActive ? menuActiveElement.mainMenu : ''
            }
          >
            Logout
          </NavLink>
        </nav>
      </header>
      <Outlet />
    </Container>
  );
}
