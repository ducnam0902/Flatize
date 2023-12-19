import Banner from '@flatize/components/Banner/Banner';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import React from 'react';

const Shop: React.FC = () => {
  return <div>
    <Banner title="Shop - Sidebar"/>
    <Container maxWidth="xl" disableGutters>
      <Grid container>
        <Grid item xs={12} md={3} sx={{ paddingX: '1.5rem' }}>
          <Box>
            <Typography sx={{
              fontWeight: 700,
              fontSize: '1.4rem',
              textTransform: 'uppercase',
              paddingBottom: '1.5rem',
              marginBottom: '3rem',
              color: '#333333',
              borderBottom: '2px solid black'
            }}>
              FILTER BY PRICE
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={3} sx={{ paddingX: '1.5rem' }}></Grid>
      </Grid>
    </Container>
  </div>;
};

export default Shop;
