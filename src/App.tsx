import { MantineProvider, Container } from '@mantine/core';
import '@mantine/core/styles.css';
import theme from '@flatize/globalStyle';
import '@fontsource-variable/raleway';
import '@fontsource-variable/roboto-slab';
import styles from './App.module.css';
function App() {
  return (
    <MantineProvider theme={theme}>
      <Container size={'resposive'} className={styles.demo}>
        Demo
      </Container>
    </MantineProvider>
  );
}

export default App;
