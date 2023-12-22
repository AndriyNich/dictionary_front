import Box from '@mui/material/Box';
// , CssBaseline, Drawer, Container } from '@mui/material';
import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { DrawerHeader } from 'components/Interface/Window/DrawerHeader';

export default function DrawerAuth({ theme, handleDrawerClose, children }) {
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
        <Box sx={{ padding: '8px 16px' }}>{children}</Box>

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
