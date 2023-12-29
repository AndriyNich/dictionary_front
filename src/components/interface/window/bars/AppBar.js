import * as React from 'react';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import { WINDOW } from 'components/interface/window';
import { ContextAuth } from 'common/context/auth';

const WrpAppBar = styled(MuiAppBar, {
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

// [x] create valid HEADER string (current = "Welcome to application")

const initialTitle = 'to application';

export default function AppBar({ open, onClickDrawerOpen: handleDrawerOpen }) {
  const {
    state: { user, isLoggedIn },
    dispatch: authDispatch,
  } = React.useContext(ContextAuth);

  //   React.useEffect(() => {}, [authState]);

  return (
    <WrpAppBar position="fixed" open={open}>
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
          Welcome {`${isLoggedIn ? user.nickname : initialTitle}`}
        </Typography>
      </Toolbar>
    </WrpAppBar>
  );
}
