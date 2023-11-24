import { Box } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

interface ITag {
  title: string;
  link: string;
}

const Tag: React.FC<ITag> = ({ title, link }) => {
  return (
    <Box
      component={Link}
      to={link}
      sx={{
        color: '#999999',
        border: '1px solid #484848',
        margin: '0 0.2rem 0.5rem 0',
        padding: '0.5rem 1rem',
        textTransform: 'capitalize',
        transition: 'all 0.3s',
        fontSize: '1.3rem',
        lineHeight: '1.6',
        textDecoration: 'none',
        '&:hover': {
          color: '#1abc9c',
          borderColor: '#1abc9c'
        }
      }}
    >
      {title}
    </Box>
  );
};

export default Tag;
