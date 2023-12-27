import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Box, CssBaseline } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import { AppBar } from 'components/interface/window/bars';
import { NavigationMain } from 'components/interface/window';
import { WindowMain } from 'components/interface/window/main';

export default function WindowApp() {
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
      <AppBar open={open} onClickDrawerOpen={handleDrawerOpen} />
      <NavigationMain
        theme={theme}
        open={open}
        onClickDrawerClose={handleDrawerClose}
      />
      <WindowMain open={open} theme={theme}>
        <Outlet />
      </WindowMain>
    </Box>
  );
}
