import * as React from 'react';
import { ThemeProvider, Container } from '@mui/material';

import { muiThemes } from 'styles/mui';

export default function AuthContainer({ children }) {
  return (
    <ThemeProvider theme={muiThemes.themeTextField}>
      <Container
        component="main"
        maxWidth="sm"
        sx={{
          maxHeight: '100%',
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {children}
      </Container>
    </ThemeProvider>
  );
}
