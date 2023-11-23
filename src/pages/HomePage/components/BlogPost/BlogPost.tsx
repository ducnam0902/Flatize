import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Image from 'mui-image';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { blogHomePageItem } from '@flatize/utils';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
const BlogPost: React.FC = () => {
  return (
    <Container
      maxWidth="xl"
      disableGutters
      sx={{ display: 'flex', gap: '3rem', flexDirection: { xs: 'column', md: 'row' }, marginBottom: '2rem' }}
    >
      {blogHomePageItem?.map(({ image, title, createdDate }, index) => (
        <Box key={index}>
          <Box
            sx={{
              overflow: 'hidden',
              marginBottom: '2rem',
              position: 'relative',
              transition: 'all 0.2s',
              '&:hover': {
                backgroundColor: '#1abc9c',
              },
              '&:hover div': {
                opacity: '0.6',
                transform: 'scale(1.1)',
                backgroundColor: '#1abc9c',
              },
              '& .mui-image-wrapper': {
                transition: 'all 0.2s',
              },
            }}
          >
            <Image src={image} duration={0} style={{ transition: 'all 0.1s' }} />
          </Box>
          <Box
            sx={{
              position: 'absolute',
              top: '30%',
              left: '50%',
              fontSize: '1.4rem',
              fontWeight: 400,
              border: '2px solid white',
              width: '5rem',
              height: '5rem',
              zIndex: 10,
              textAlign: 'center',
            }}
          >
            <FontAwesomeIcon icon={faCaretRight} color="white" />
          </Box>
          <Typography
            variant="h3"
            to="/"
            component={Link}
            sx={{
              display: 'inline-block',
              marginBottom: '1.5rem',
              fontSize: '1.5rem',
              textDecoration: 'none',
              fontFamily: 'Roboto Slab Variable',
              '&:hover': {
                color: '#1abc9c',
              },
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontSize: '1.3rem',
              lineHeight: '2.1rem',
              marginBottom: '2rem',
              color: '#999',
            }}
          >
            {createdDate}
          </Typography>
        </Box>
      ))}
    </Container>
  );
};

export default BlogPost;
