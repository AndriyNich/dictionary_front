import { NavLink } from 'react-router-dom';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import HomeIcon from '@mui/icons-material/Home';

import { menuActiveElement } from 'styles/menuActiveElement';

// FIXME may be move constatns & json to others files

const LOADING_TYPE = {
  ALL: 'all',
  LOGGED_IN: 'in',
  LOGGED_OUT: 'out',
};

const navigationList = [
  {
    text: 'Main',
    icon: <HomeIcon color="primary" />,
    to: '/',
    isLoading: LOADING_TYPE.ALL,
  },
  {
    text: 'Login',
    icon: <InboxIcon />,
    to: '/login',
    isLoading: LOADING_TYPE.LOGGED_OUT,
  },
  {
    text: 'Registration',
    icon: <InboxIcon />,
    to: '/register',
    isLoading: LOADING_TYPE.LOGGED_OUT,
  },
  {
    text: 'Logout',
    icon: <InboxIcon />,
    to: '/logout',
    isLoading: LOADING_TYPE.LOGGED_IN,
  },
];

const isVisibleNavigation = (data, status) =>
  data === LOADING_TYPE.ALL || data === status;

export default function NavigationList() {
  const status = LOADING_TYPE.LOGGED_OUT;
  return (
    <List>
      {navigationList
        .filter(elem => isVisibleNavigation(elem.isLoading, status))
        .map(elem => (
          <ListItem key={elem.text} disablePadding>
            <NavLink
              to={elem.to}
              className={({ isActive }) =>
                `${isActive ? menuActiveElement.mainMenu : ''} pt-0.5`
              }
            >
              <ListItemButton>
                <ListItemIcon>{elem.icon}</ListItemIcon>
                {elem.text}
              </ListItemButton>
            </NavLink>
          </ListItem>
        ))}
    </List>
  );
}
