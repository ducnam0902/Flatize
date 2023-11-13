import { createTheme } from '@mui/material';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 320,
      md: 568,
      lg: 992,
      xl: 1280,
    },
  },
  typography: {
    htmlFontSize: 10,
    fontSize: 10,
    fontFamily: 'Raleway Variable, sans-serif',
    h1: {
      color: '#333333',
      margin: '0 0 2rem',
      fontWeight: 500,
      lineHeight: 1.1,
    },
    h2: {
      color: '#333333',
      margin: '0 0 2rem',
      fontWeight: 500,
      lineHeight: 1.1,
    },
    h3: {
      color: '#333333',
      margin: '0 0 2rem',
      fontWeight: 500,
      lineHeight: 1.1,
    },
    h4: {
      color: '#333333',
      margin: '0 0 2rem',
      fontWeight: 500,
      lineHeight: 1.1,
    },
    h5: {
      color: '#333333',
      margin: '0 0 2rem',
      fontWeight: 500,
      lineHeight: 1.1,
    },
    h6: {
      color: '#333333',
      margin: '0 0 2rem',
      fontWeight: 500,
      lineHeight: 1.1,
    },
    //p
    body1: {
      margin: '0 0 2rem',
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: '1.5rem',
          paddingRight: '1.5rem',
        },
      },
    },
  },
});

export default theme;
