import InboxIcon from '@mui/icons-material/MoveToInbox';
import HomeIcon from '@mui/icons-material/Home';

export const REDIRECT_TO = {
  IS_LOGIN: '/',
};

export const MENU_TYPE = {
  BACK: 'back',
  LOGIN: 'login',
  LOGOUT: 'logout',
  MAIN_LOGIN: 'main_login',
  MAIN_LOGOUT: 'main_log_out',
  DICTIONARY: 'dictionary',
  GROUPS_WORDS: 'groups_of_words',
  WORDS: 'words',
  SETTINGS: 'settings',
  PERSONAL: 'personal',
  GLOBAL: 'global',
};

export const navigationList = [
  {
    menuType: MENU_TYPE.LOGIN,
    text: 'Login',
    navList: [
      {
        menuType: MENU_TYPE.MAIN_LOGIN,
        text: 'Main',
        icon: <HomeIcon color="primary" />,
        to: '/',
      },
      {
        menuType: MENU_TYPE.DICTIONARY,
        text: 'Dictionary',
        icon: <InboxIcon />,
        to: '/sub/dictionary',
        navList: [
          {
            menuType: MENU_TYPE.LOGIN,
            text: 'Go back',
            icon: <InboxIcon />,
            to: '/',
          },
          {
            menuType: MENU_TYPE.GROUPS_WORDS,
            text: 'Groups of words',
            icon: <InboxIcon />,
            to: '/groups',
          },
          {
            menuType: MENU_TYPE.WORDS,
            text: 'Words',
            icon: <InboxIcon />,
            to: '/words',
          },
        ],
      },
      {
        menuType: MENU_TYPE.SETTINGS,
        text: 'Settings',
        icon: <InboxIcon />,
        to: '/sub/settings',
        navList: [
          {
            menuType: MENU_TYPE.LOGIN,
            text: 'Go back',
            icon: <InboxIcon />,
            to: '/',
          },
          {
            menuType: MENU_TYPE.PERSONAL,
            text: 'Personal',
            icon: <InboxIcon />,
            to: '/personal',
          },
          {
            menuType: MENU_TYPE.GLOBAL,
            text: 'Global',
            icon: <InboxIcon />,
            to: '/global',
          },
        ],
      },
    ],
  },
  {
    menuType: MENU_TYPE.LOGOUT,
    text: 'Logout',
    navList: [
      {
        menuType: MENU_TYPE.MAIN_LOGOUT,
        text: 'Main',
        icon: <HomeIcon color="primary" />,
        to: '/',
      },
    ],
  },
];

function lookForMenuTypeInNavigationList(navigationList, menuType) {
  for (let i = 0; i < navigationList.length; i++) {
    if (navigationList[i].menuType === menuType) {
      return navigationList[i].navList || [];
    } else if (
      navigationList[i].hasOwnProperty('navList') &&
      Array.isArray(navigationList[i].navList) &&
      navigationList[i].navList.length > 0
    ) {
      const result = lookForMenuTypeInNavigationList(
        navigationList[i].navList,
        menuType
      );
      if (result.length > 0) {
        return result;
      }
    }
  }

  return [];
}

export const getNavigationList = menuType => {
  return lookForMenuTypeInNavigationList(navigationList, menuType);
};
