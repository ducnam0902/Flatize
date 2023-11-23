import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
interface ITitle {
  title: string;
}

const Title: React.FC<ITitle> = ({ title }) => {
  return (
    <Container maxWidth="xl" disableGutters sx={{ position: 'relative', marginBottom: '4.5rem' }}>
      <Typography
        variant="h2"
        sx={{
          fontSize: '2.4rem',
          fontWeight: 700,
          textAlign: 'center',
          textTransform: 'uppercase',
          marginBottom: '0',
          color: '#333',
          backgroundColor: 'white',
          '& span': {
            backgroundColor: 'white',
            padding: '0 4rem',
            position: 'relative',
            zIndex: 2,
          },
          '&:after': {
            borderTop: '1px solid #dddddd',
            content: '""',
            left: 0,
            position: 'absolute',
            top: '50%',
            width: '97.5%',
            zIndex: 1,
            marginX: '1.5rem',
            display: 'block',
          },
        }}
      >
        <span>{title}</span>
      </Typography>
    </Container>
  );
};

export default Title;
