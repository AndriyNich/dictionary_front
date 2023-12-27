import Box from '@mui/material/Box';
// , CssBaseline, Drawer, Container } from '@mui/material';
import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import DrawerHeader from 'components/interface/window/common/DrawerHeader';

export default function NavigationDrawer({
  theme,
  onClickDrawerClose: handleDrawerClose,
  children,
}) {
  return (
    <DrawerHeader>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: 1,
        }}
      >
        <Box sx={{ width: 1 }}>{children}</Box>

        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'ltr' ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>
      </Box>
    </DrawerHeader>
  );
}
