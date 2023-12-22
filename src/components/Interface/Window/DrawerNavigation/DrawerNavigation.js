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

import { DrawerAuth, DrawerHeader, WINDOW } from 'components/Interface/Window';

export default function DrawerNavigation({ theme, open, handleDrawerClose }) {
  return (
    <Drawer
      sx={{
        width: WINDOW.DRAWER_WIDTH,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: WINDOW.DRAWER_WIDTH,
          boxSizing: 'border-box',
        },
      }}
      variant="persistent"
      anchor="left"
      open={open}
    >
      // FIXME Change handleDrawerClose => onClick
      <DrawerAuth theme={theme} handleDrawerClose={handleDrawerClose}>
        Login
      </DrawerAuth>
      <Divider />
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
