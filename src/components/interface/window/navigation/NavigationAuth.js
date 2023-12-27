import { NavLink } from 'react-router-dom';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import { pink } from '@mui/material/colors';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';

const auth = {
  true: {
    text: 'Logout',
    icon: <LogoutIcon sx={{ color: pink[500] }} />,
    to: '/logout',
  },
  false: {
    text: 'Login',
    icon: <LoginIcon color="primary" />,
    to: '/login',
  },
};

export default function NavigationAuth({ isLoggedIn = false }) {
  const { text, icon, to } = auth[isLoggedIn];

  return (
    <NavLink to={to}>
      <ListItemButton sx={{ ml: -1, width: 1 }}>
        <ListItemIcon>{icon}</ListItemIcon>
        {text}
      </ListItemButton>
    </NavLink>
  );
}
