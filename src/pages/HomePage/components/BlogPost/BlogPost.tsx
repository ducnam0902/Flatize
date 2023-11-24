import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Image from 'mui-image';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { blogHomePageItem } from '@flatize/utils';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const BlogPost: React.FC = () => {
  return (
    <Container
      maxWidth="xl"
      disableGutters
      sx={{ display: 'flex', gap: '3rem', flexDirection: { xs: 'column', md: 'row' }, marginBottom: '2rem' }}
    >
      {blogHomePageItem?.map(({ image, title, createdDate, icon }, index) => (
        <Box key={index}>
          <Box
            sx={{
              overflow: 'hidden',
              marginBottom: '2rem',
              transition: 'all 0.2s',
              position: 'relative',
              '&:hover': {
                backgroundColor: '#1abc9c'
              },
              '&:hover .mui-image-wrapper': {
                transform: 'scale(1.1)',
                backgroundColor: '#1abc9c',
                opacity: '0.6'
              },
              '& .mui-image-wrapper': {
                transition: 'all 0.2s'
              },
              '&:hover div': {
                opacity: 1,
                visibility: 'visible',
                top: '50%',
                transform: 'translate(-50%, -50%)'
              }
            }}
          >
            <Image src={image} duration={0} style={{ transition: 'all 0.1s' }} />
            <Box
              sx={{
                fontSize: '1.4rem',
                fontWeight: 400,
                border: '2px solid white',
                borderRadius: '50%',
                width: '5rem',
                height: '5rem',
                zIndex: 10,
                textAlign: 'center',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'absolute',
                top: '100%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                opacity: 0,
                visibility: 'hidden',
                transition: 'all 0.3s',
                cursor: 'pointer'
              }}
            >
              <FontAwesomeIcon icon={icon} color="white" />
            </Box>
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
                color: '#1abc9c'
              }
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
              color: '#999'
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
