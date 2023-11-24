import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
const Lookbook: React.FC = () => {
  return (
    <Container maxWidth="xl" disableGutters>
      <Box
        sx={{
          backgroundImage: 'url(/bg-wood.jpg)',
          color: 'white',
          fontSize: '1.3rem',
          marginBottom: '6rem',
          textAlign: 'center',
          padding: '3rem 3rem 1rem',
          position: 'relative',
          '&:after': {
            border: '3px solid white',
            bottom: '1rem',
            content: '""',
            left: '1rem',
            position: 'absolute',
            right: '1rem',
            top: '1rem',
            zIndex: 1
          }
        }}
      >
        <Typography
          variant="h2"
          sx={{
            color: 'white',
            fontSize: '2.3rem',
            fontWeight: 700,
            marginBottom: '1rem',
            textTransform: 'uppercase',
            position: 'relative',
            zIndex: '2'
          }}
        >
          Lookbook Women
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '1.3rem', lineHeight: '2.1rem' }}>
          Etiam aliquam risus ante, quis ultrices enim porta a. Integer et dolor sit amet enim feugiat faucibus. Donec sit amet
          egestas orci. Proin facilisis mi ornare turpis sollicitudin; vel rutrum est viverra. Vestibulum hendrerit egestas
          semper.
        </Typography>
      </Box>
    </Container>
  );
};

export default Lookbook;
