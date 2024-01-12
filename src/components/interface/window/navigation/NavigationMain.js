import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import WINDOW from 'components/interface/window/common/constant';

import NavigationAuth from './NavigationAuth';
import NavigationList from './NavigationList';
import NavigationDrawer from './NavigationDrawer';

export default function NavigationMain({
  theme,
  open,
  onClickDrawerClose: handleDrawerClose,
}) {
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
      {/* XXX make state and dependence from state for NavigationAuth */}
      <NavigationDrawer theme={theme} onClickDrawerClose={handleDrawerClose}>
        <NavigationAuth />
      </NavigationDrawer>
      <Divider />
      <NavigationList />
    </Drawer>
  );
}
