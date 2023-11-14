import Image from 'mui-image';
import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

interface ISlideItem {
  caption: string;
  image: string;
  title: string;
  subTitle: string;
}

const SlideItem: React.FC<ISlideItem> = ({ image, caption, title, subTitle }) => {
  return (
    <Box sx={{ position: 'relative' }}>
      <Image src={image} duration={0} />
      <Container
        maxWidth="lg"
        sx={{
          position: 'absolute',
          zIndex: 2,
          top: '20%',
          left: '50%',
          transform: 'translateX(-50%)',
          color: 'white',
        }}
      >
        <Typography
          sx={{
            transition: 'all 0.3s',
            fontFamily: 'Roboto Slab Variable',
            textAlign: 'center',
            textTransform: 'uppercase',
            fontSize: '1.4rem',
            lineHeight: '1.6',
            marginBottom: '1rem',
            display: { xs: 'none', md: 'block' },
          }}
        >
          {caption}
        </Typography>
        <Typography
          sx={{
            fontFamily: 'Roboto Slab Variable',
            textAlign: 'center',
            textTransform: 'uppercase',
            marginBottom: { xs: '0', lg: '4rem' },
            fontSize: { xs: '3rem', lg: '6rem' },
            fontWeight: '500',
            letterSpacing: '0.3rem',
            lineHeight: '1',
            textShadow: '1px 3px 5px rgba(0, 0, 0, 0.25)',
            display: { xs: 'none', md: 'block' },
          }}
        >
          {title}
          <p>{subTitle}</p>
        </Typography>
      </Container>
    </Box>
  );
};

export default SlideItem;
