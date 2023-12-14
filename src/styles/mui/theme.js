import { createTheme } from '@mui/material/styles';

const themeTextField = createTheme({
  typography: {
    fontSize: 14,
  },
  components: {
    MuiFormControl: {
      defaultProps: {
        size: 'small',
      },
    },
    MuiTextField: {
      defaultProps: {
        size: 'small',
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        outlined: {
          '&.MuiInputLabel-shrink': {
            top: 0,
          },
        },
      },
    },
  },
});

const muiThemes = {
  themeTextField: themeTextField,
};

export default muiThemes;
