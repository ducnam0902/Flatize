import React from 'react';

import HeaderTop from './components/HeaderTop';
import MenuItems from './components/MenuItems';
import Container from '@mui/material/Container';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import CustomLink from '@mui/material/Link';
import Menu from '@mui/material/Menu';
import Box from '@mui/material/Box';

import { Link } from 'react-router-dom';
import Image from 'mui-image';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faMagnifyingGlass, faBars } from '@fortawesome/free-solid-svg-icons';

import { megaMenu } from '@flatize/utils';
import logo from '@flatize/assets/logo.png';
import { Button } from '@mui/material';

const Header: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <header>
      <HeaderTop />
      <Box>
        <Container disableGutters maxWidth="xl" sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <CustomLink to="/" component={Link} sx={{ marginTop: '2.6rem', maxWidth: '9.6rem', marginBottom: '2.6rem' }}>
            <Image src={logo} duration={0} alt="Flatize logo" />
          </CustomLink>

          <List sx={{ display: 'flex', padding: 0, alignItems: 'center' }}>
            {megaMenu.map((item, index) => (
              <MenuItems {...item} key={index} />
            ))}
            <ListItem
              disablePadding
              component={Box}
              sx={{
                height: '8.5rem',
                paddingX: '2rem',
                cursor: 'pointer',
                '&:hover svg': {
                  background: 'transparent',
                  color: '#1abc9c'
                }
              }}
            >
              <FontAwesomeIcon icon={faUser} fontSize="1.2rem" color="#333333" />
            </ListItem>
            <ListItem
              disablePadding
              component={Box}
              sx={{
                height: '8.5rem',
                paddingX: '2rem',
                cursor: 'pointer',
                '&:hover svg': {
                  background: 'transparent',
                  color: '#1abc9c'
                }
              }}
            >
              <FontAwesomeIcon icon={faMagnifyingGlass} fontSize="1.2rem" color="#333333" />
            </ListItem>
            <ListItem
              id="basic-menu-responsive"
              data-testid="basic-menu-responsive"
              disablePadding
              component={Button}
              aria-controls={open ? 'menu-item-responsive' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
              sx={{
                height: '8.5rem',
                paddingX: '2rem',
                paddingY: 0,
                minWidth: '1.2rem',
                cursor: 'pointer',
                '&:hover svg': {
                  background: 'transparent',
                  color: '#1abc9c'
                },
                display: { lg: 'none' }
              }}
            >
              <FontAwesomeIcon icon={faBars} fontSize="1.2rem" color="#333333" />
            </ListItem>
          </List>
        </Container>
        <Menu
          id="menu-item-responsive"
          data-testid="menu-item-responsive"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-menu-responsive',
            sx: {
              background: 'black',
              padding: 0
            }
          }}
          slotProps={{
            paper: {
              sx: {
                borderRadius: 0,
                boxShadow: 'none',
                transform: 'translateX(-1.5rem) !important'
              }
            }
          }}
        >
          {megaMenu.map((item, index) => (
            <MenuItems {...item} isMobile key={index} onCloseMobile={handleClose} />
          ))}
        </Menu>
      </Box>
    </header>
  );
};

export default Header;
