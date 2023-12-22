import { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { menuActiveElement } from 'styles/menuActiveElement';
// import { AuthContainer } from 'components/Authenticate';
import {
  AuthContainer,
  AuthHeader,
  Registration,
  Login,
} from 'components/Authenticate';
import { Copyright } from 'components/Copyryght';

import { Box, CssBaseline, Drawer, Container } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Divider from '@mui/material/Divider';

import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

import { HomePage } from 'components/Main';
import {
  DrawerNavigation,
  DrawerHeader,
  WINDOW,
} from 'components/Interface/Window';

const Main = styled('main', { shouldForwardProp: prop => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${WINDOW.DRAWER_WIDTH}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: prop => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${WINDOW.DRAWER_WIDTH}px)`,
    marginLeft: `${WINDOW.DRAWER_WIDTH}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export default function SharedLayout() {
  const theme = useTheme();
  const [open, setOpen] = useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Persistent drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <DrawerNavigation
        theme={theme}
        open={open}
        handleDrawerClose={handleDrawerClose}
      />
      <Main open={open}>
        <DrawerHeader />
        <AuthContainer>
          <AuthHeader sx={{ mt: 4 }}>Sing in</AuthHeader>
          <Registration sx={{ mt: 1, width: 1 }} />
          <Copyright sx={{ mt: 'auto', pb: 2 }} />
        </AuthContainer>
      </Main>
    </Box>

    // <Container
    //   maxWidth="lg"
    //   sx={{ height: '100vh', display: 'flex', flexDirection: 'column' }}
    // >
    //   <header>
    //     <nav className="flex gap-4">
    //       <NavLink
    //         to="/"
    //         className={({ isActive }) =>
    //           isActive ? menuActiveElement.mainMenu : ''
    //         }
    //       >
    //         Home
    //       </NavLink>
    //       <NavLink
    //         to="/login"
    //         className={({ isActive }) =>
    //           isActive ? menuActiveElement.mainMenu : ''
    //         }
    //       >
    //         Login
    //       </NavLink>
    //       <NavLink
    //         to="/register"
    //         className={({ isActive }) =>
    //           isActive ? menuActiveElement.mainMenu : ''
    //         }
    //       >
    //         Registration
    //       </NavLink>
    //       <NavLink
    //         to="/logout"
    //         className={({ isActive }) =>
    //           isActive ? menuActiveElement.mainMenu : ''
    //         }
    //       >
    //         Logout
    //       </NavLink>
    //     </nav>
    //   </header>
    //   <Outlet />
    // </Container>
  );
}
