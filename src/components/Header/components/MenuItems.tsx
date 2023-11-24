import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import MenuItem from '@mui/material/MenuItem';
import { NavLink, useMatch } from 'react-router-dom';
interface IMenuItem {
  title: string;
  link: string;
  isMobile?: boolean;
  onCloseMobile?(): void;
}

const MenuItems: React.FC<IMenuItem> = ({ title, link, isMobile, onCloseMobile }) => {
  const isActive = useMatch({ path: `${link}/*`, end: true });

  if (isMobile) {
    return (
      <MenuItem
        sx={{
          color: 'white',
          width: '26rem',
          textTransform: 'uppercase',
          marginBottom: 0,
          borderTop: '1px solid rgba(255,255,255,0.1)',
          paddingY: '1rem',
          paddingX: '2rem',
          fontSize: '1.2rem',
          fontFamily: 'Roboto Slab Variable',
          backgroundColor: isActive ? '#1abc9c' : 'inherit'
        }}
        onClick={onCloseMobile}
        component={NavLink}
        to={link}
      >
        {title}
      </MenuItem>
    );
  }

  return (
    <ListItem
      disablePadding
      component={NavLink}
      to={link}
      sx={{
        height: 'inherit',
        display: { xs: 'none', lg: 'block' },
        ':active div': {
          background: 'transparent',
          color: '#1abc9c'
        }
      }}
    >
      <ListItemButton
        sx={{
          textAlign: 'center',
          textTransform: 'uppercase',
          padding: '3.2rem 2rem 3.3rem',
          fontSize: '1.2rem',
          color: isActive ? '#1abc9c' : '#333333',
          fontFamily: 'Roboto',
          transition: 'all 0.3s',
          '&:hover': {
            background: 'transparent',
            color: '#1abc9c'
          }
        }}
      >
        {title}
      </ListItemButton>
    </ListItem>
  );
};

export default MenuItems;
