import React from 'react';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import { faChevronDown, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const HeaderTop: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log(event.currentTarget);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{
        backgroundColor: '#181818',
      }}
    >
      <Container disableGutters maxWidth="xl" sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography
          sx={{
            color: 'white',
            paddingY: '1.8rem',
            marginBottom: '0',
            fontSize: { xs: '0.7rem', md: '1rem' },
            lineHeight: '1.6rem',
          }}
        >
          FREE SHIPPING ON ALL U.S ORDERS OVER $50
        </Typography>
        <Box>
          <Button
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            sx={{
              borderLeft: '1px solid rgba(255,255,255,0.1)',
              borderRight: '1px solid rgba(255,255,255,0.1)',
              color: 'white',
              padding: '1.8rem 1.5rem',
              lineHeight: '1.6rem',
              fontSize: { xs: '0.7rem', md: '1rem' },
            }}
          >
            MY ACCOUNT
            <IconButton aria-label="faChevronDown" sx={{ padding: 0, marginLeft: '1rem' }}>
              <FontAwesomeIcon icon={faChevronDown} fontSize="1rem" color="#999999" />
            </IconButton>
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
              sx: {
                background: '#282828',
                padding: '1rem 0',
                minWidth: '1.6rem',
              },
            }}
            slotProps={{
              paper: {
                sx: {
                  borderRadius: 0,
                  boxShadow: 'none',
                  transform: 'translateX(-6rem) !important',
                },
              },
            }}
          >
            <MenuItem
              onClick={handleClose}
              sx={{
                color: 'white',
                padding: '0.5rem 2rem 0.8rem',
                marginBottom: 0,
                fontSize: '1rem',
                transition: 'all 0.3s',
                '&:hover': {
                  color: '#1abc9c',
                },
              }}
            >
              MY DASHBOARD
            </MenuItem>
            <MenuItem
              onClick={handleClose}
              sx={{
                color: 'white',
                padding: '0.5rem 2rem 0.8rem',
                marginBottom: 0,
                transition: 'all 0.3s',
                '&:hover': {
                  color: '#1abc9c',
                },
              }}
            >
              ACCOUNT INFORMATION
            </MenuItem>
            <MenuItem
              onClick={handleClose}
              sx={{
                color: 'white',
                padding: '0.5rem 2rem 0.8rem',
                marginBottom: 0,
                transition: 'all 0.3s',
                '&:hover': {
                  color: '#1abc9c',
                },
              }}
            >
              ADDRESS BOOK
            </MenuItem>
            <MenuItem
              onClick={handleClose}
              sx={{
                color: 'white',
                padding: '0.5rem 2rem 0.8rem',
                marginBottom: 0,
                transition: 'all 0.3s',
                '&:hover': {
                  color: '#1abc9c',
                },
              }}
            >
              MY ORDERS
            </MenuItem>
          </Menu>

          <IconButton
            aria-label="faCartShopping"
            sx={{
              marginLeft: '0.2rem',
              borderRight: { xs: 'none', md: '1px solid rgba(255,255,255,0.1)' },
              borderRadius: '0',
              padding: '1.8rem 1.5rem',
              paddingRight: { xs: '0', md: '3rem' },
            }}
          >
            <Badge
              badgeContent={9}
              color={'default'}
              sx={{
                '& .MuiBadge-badge': {
                  color: 'white',
                  backgroundColor: '#1abc9c',
                  lineHeight: '1.2rem',
                  borderRadius: '50%',
                  fontSize: '0.7rem',
                  padding: 0,
                  minWidth: '1.3rem',
                  height: '1.3rem',
                  left: '0.7rem',
                  top: '-0.2rem',
                },
              }}
            >
              <FontAwesomeIcon icon={faCartShopping} fontSize="1.2rem" color="white" />
            </Badge>
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
};

export default HeaderTop;
