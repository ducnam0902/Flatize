import Header from '@flatize/components/Header/Header';
import { ThemeProvider } from '@mui/material';
import theme from './globalStyle';
import { StyledEngineProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter } from 'react-router-dom';
import AllRoutes from './routes/AllRoutes';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <StyledEngineProvider injectFirst>
        <CssBaseline />
        <BrowserRouter>
          <Header />
          <AllRoutes />
          <Footer />
        </BrowserRouter>
      </StyledEngineProvider>
    </ThemeProvider>
  );
}

export default App;
