import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';

import { menuActiveElement } from 'styles/menuActiveElement';
import { MENU_TYPE, getNavigationList } from 'settings';

export default function NavigationList() {
  // TODO зберігати в localStorage і забирати звідти перевіряючи на логін
  const [navigationList, setNavigationList] = useState(
    getNavigationList(MENU_TYPE.LOGIN)
  );

  const handleClick = currentMenuType => {
    const navList = getNavigationList(currentMenuType);
    if (navList.length > 0) {
      setNavigationList(navList);
    }
  };

  return (
    <List>
      {navigationList.map(elem => (
        <ListItem key={elem.text} disablePadding>
          <NavLink
            to={elem.to}
            className={({ isActive }) =>
              `${isActive ? menuActiveElement.mainMenu : ''} pt-0.5`
            }
          >
            <ListItemButton onClick={() => handleClick(elem.menuType)}>
              <ListItemIcon>{elem.icon}</ListItemIcon>
              {elem.text}
            </ListItemButton>
          </NavLink>
        </ListItem>
      ))}
    </List>
  );
}
