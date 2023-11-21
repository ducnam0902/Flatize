import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Carousel from 'react-material-ui-carousel';
import bgParallax from '@flatize/assets/bg-parallax.jpg';

interface IPiParallaxItem {
  title: string;
  author: string;
}

const piParallaxItem = [
  {
    title: `"Design is a funny word. Some people think design means how it looks. But of course, if you dig deeper, it’s really
  how it works."`,
    author: 'by Steve Jobs',
  },
  {
    title: `"They may forget what you said, but they will never forget how you made them feel."`,
    author: 'by Carl W. Buechner',
  },
];

const PiParallaxItem: React.FC<IPiParallaxItem> = ({ title, author }) => (
  <Box
    height="40rem"
    sx={{ textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}
  >
    <Typography
      variant="body1"
      sx={{
        marginBottom: '2rem',
        fontSize: { xs: '2rem', md: '2.5rem', xl: '3.6rem' },
        lineHeight: { xs: '3rem', md: '4rem', xl: '5rem' },
        color: 'white',
        fontFamily: 'Roboto Slab Variable',
        '&::after': {
          borderTop: '1px solid white',
          content: '""',
          width: '5rem',
          display: 'block',
          marginX: 'auto',
          marginTop: '2rem',
        },
      }}
    >
      {title}
    </Typography>
    <Typography
      sx={{
        color: 'white',
        fontSize: '1.8rem',
        lineHeight: '2.5rem',
      }}
    >
      {author}
    </Typography>
  </Box>
);
const PiParallax: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${bgParallax})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        color: 'white',
        marginBottom: '8rem',
        backgroundPositionX: '50%',
      }}
    >
      <Container maxWidth="xl">
        <Carousel indicators={false} navButtonsAlwaysInvisible={true}>
          {piParallaxItem.map((item, index) => (
            <PiParallaxItem key={index} {...item} />
          ))}
        </Carousel>
      </Container>
    </Box>
  );
};

export default PiParallax;
