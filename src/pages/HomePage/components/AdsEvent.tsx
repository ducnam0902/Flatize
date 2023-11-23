import { Container } from '@mui/material';
import Box from '@mui/material/Box';
import Image from 'mui-image';
import React from 'react';
import ad1 from '@flatize/assets/ad-1.png';
import ad2 from '@flatize/assets/ad-2.png';
import ad3 from '@flatize/assets/ad-3.png';
const AdsEvent: React.FC = () => {
  return (
    <Box
      sx={{
        background: 'whitesmoke',
        borderBottom: '1px solid #dddddd',
        marginBottom: '5rem',
      }}
    >
      <Container
        disableGutters
        maxWidth="xl"
        sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: '3rem', paddingY: '5rem' }}
      >
        <Image src={ad1} duration={0} />
        <Image src={ad2} duration={0} />
        <Image src={ad3} duration={0} />
      </Container>
    </Box>
  );
};

export default AdsEvent;
