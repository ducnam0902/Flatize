import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import CustomLink from '@mui/material/Link';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import TextField from '@mui/material/TextField';

import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWifi, faLocationDot, faPhone, faFax, faEnvelope, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faGooglePlusG, faPinterest } from '@fortawesome/free-brands-svg-icons';
import { usefullLinks, tags } from '@flatize/utils';
import Tag from './components/Tag';

interface ITitle {
  title: string;
}

interface FormValues {
  email: string;
}

const Title: React.FC<ITitle> = ({ title }) => (
  <Typography
    component="h2"
    sx={{
      textTransform: 'uppercase',
      fontFamily: 'Roboto Slab Variable',
      color: 'white',
      fontSize: '1.3rem',
      fontWeight: 500,
      lineHeight: '1.4rem',
    }}
  >
    {title}
  </Typography>
);

const Footer: React.FC = () => {
  const form = useForm<FormValues>({
    defaultValues: {
      email: '',
    },
  });
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <footer>
      <Box
        sx={{
          background: '#181818',
          padding: '5rem 0 3rem',
          color: '#999',
        }}
      >
        <Container disableGutters maxWidth="xl">
          <Box paddingBottom="1rem">
            <Grid container>
              <Grid item xs={12} md={6} xl={3} sx={{ paddingX: '1.5rem' }}>
                <Title title="CONTACT DETAIL" />
                <Box sx={{ fontSize: '1.3rem', marginBottom: '2rem' }}>
                  <Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                      <Icon sx={{ fontSize: '1.3rem', width: 'auto', height: 'auto' }}>
                        <FontAwesomeIcon icon={faLocationDot} color="#666666" fontWeight={400} display="inline-block" />
                      </Icon>
                      <Typography sx={{ paddingLeft: '1rem', fontSize: '1.3rem', lineHeight: '1.3rem', marginBottom: 0 }}>
                        No.123 Pellentesque nec erat.
                      </Typography>
                    </Box>
                    <Typography sx={{ fontSize: '1.3rem', lineHeight: '1.3rem' }}>Aenean semper, neque non faucibus.</Typography>
                  </Box>

                  <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                    <Icon sx={{ fontSize: '1.3rem', width: 'auto', height: 'auto' }}>
                      <FontAwesomeIcon icon={faPhone} color="#666666" fontWeight={400} display="inline-block" />
                    </Icon>
                    <Typography sx={{ paddingLeft: '1rem', fontSize: '1.3rem', lineHeight: '1.3rem', marginBottom: 0 }}>
                      Phone. (123) 456-7890
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                    <Icon sx={{ fontSize: '1.3rem', width: 'auto', height: 'auto' }}>
                      <FontAwesomeIcon icon={faFax} color="#666666" fontWeight={400} display="inline-block" />
                    </Icon>
                    <Typography sx={{ paddingLeft: '1rem', fontSize: '1.3rem', lineHeight: '1.3rem', marginBottom: 0 }}>
                      Fax. (123) 456-7890
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                    <Icon sx={{ fontSize: '1.3rem', width: 'auto', height: 'auto' }}>
                      <FontAwesomeIcon icon={faEnvelope} color="#666666" fontWeight={400} display="inline-block" />
                    </Icon>
                    <Typography sx={{ paddingLeft: '1rem', fontSize: '1.3rem', lineHeight: '1.3rem', marginBottom: 0 }}>
                      E-mail. first.last@example.com
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} md={6} xl={3} sx={{ paddingX: '1.5rem' }}>
                <Title title="USEFUL LINKS" />
                <List sx={{ marginBottom: '2rem', padding: 0 }}>
                  {usefullLinks.map(({ title, link }, index) => (
                    <ListItem
                      key={index}
                      sx={{
                        padding: '0 0 0.3rem 0',
                        fontSize: '1.3rem',
                        lineHeight: '1.6',
                        color: '#999999',
                        '&:hover': {
                          color: '#1abc9c',
                        },
                      }}
                      component={Link}
                      to={link}
                    >
                      {title}
                    </ListItem>
                  ))}
                </List>
              </Grid>
              <Grid item xs={12} md={6} xl={3} sx={{ paddingX: '1.5rem' }}>
                <Title title="TAGS" />
                <Box sx={{ marginBottom: '2rem', display: 'flex', flexWrap: 'wrap' }}>
                  {tags.map((item, index) => (
                    <Tag key={index} {...item} />
                  ))}
                </Box>
              </Grid>
              <Grid item xs={12} md={6} xl={3} sx={{ paddingX: '1.5rem' }}>
                <Title title="DON’T MISS OUT" />
                <Box sx={{ marginBottom: '2rem' }}>
                  <Typography sx={{ fontSize: '1.3rem', lineHeight: '1.6' }}>
                    In venenatis neque a eros laoreet eu placerat erat suscipit. Fusce cursus, erat ut scelerisque.
                  </Typography>
                  <form noValidate onSubmit={handleSubmit(onSubmit)}>
                    <TextField
                      type="email"
                      {...register('email', {
                        required: 'Email is required',
                      })}
                      error={!!errors.email}
                      helperText={errors.email?.message}
                      placeholder="Enter your email here"
                      InputProps={{
                        endAdornment: (
                          <Button
                            type="submit"
                            sx={{
                              paddingTop: '1rem',
                              paddingBottom: '0.9rem',
                              height: '3.5rem',
                              color: '#333333',
                              fontSize: '1.2rem',
                              minWidth: '4rem',
                            }}
                          >
                            <FontAwesomeIcon icon={faChevronRight} />
                          </Button>
                        ),
                      }}
                      fullWidth
                      sx={{
                        border: 'none',
                        outline: 'none',
                        marginBottom: 0,
                        fontSize: '1.3rem',
                        color: '#555',
                        paddingRight: 0,
                        '& .MuiInputBase-root': {
                          padding: 0,
                          marginBottom: 0,
                          height: '3.5rem',
                          borderRadius: 0,
                          backgroundColor: 'white',
                        },
                        '&::placeholder': {
                          fontSize: '1.3rem',
                          color: '#555',
                          fontFamily: 'Raleway Variable',
                        },
                        '& .MuiInputBase-input': {
                          paddingY: '0.6rem',
                          paddingLeft: '1.2rem',
                          height: '2.3rem',
                        },
                      }}
                    />
                  </form>
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Box paddingX="1.5rem">
            <Box
              borderTop="1px solid #383838"
              paddingTop="2.5rem"
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                justifyContent: { xs: 'center', md: 'space-between' },
                alignContent: { xs: 'center', md: 'center' },
                textAlign: { xs: 'center', md: 'inherit' },
              }}
            >
              <Box>
                <Typography sx={{ marginBottom: 0, fontSize: '1rem', lineHeight: '1.8rem' }}>
                  Copyright © 2013 Flatize. Designed by{' '}
                  <CustomLink sx={{ color: '#1abc9c', textDecoration: 'none' }}> PixelGeekLab</CustomLink>
                </Typography>
                <Typography sx={{ fontSize: '1rem', lineHeight: '1.8rem' }}>All rights reserved.</Typography>
              </Box>
              <Stack direction="row" spacing="1.5rem" justifyContent="center">
                <Box component={Link} to="/">
                  <FontAwesomeIcon icon={faFacebookF} fontSize="2.2rem" color="#666666" />
                </Box>
                <Box component={Link} to="/">
                  <FontAwesomeIcon icon={faTwitter} fontSize="2.2rem" color="#666666" />
                </Box>
                <Box component={Link} to="/">
                  <FontAwesomeIcon icon={faGooglePlusG} fontSize="2.2rem" color="#666666" />
                </Box>
                <Box component={Link} to="/">
                  <FontAwesomeIcon icon={faPinterest} fontSize="2.2rem" color="#666666" />
                </Box>
                <Box component={Link} to="/">
                  <FontAwesomeIcon icon={faWifi} fontSize="2.2rem" color="#666666" />
                </Box>
              </Stack>
            </Box>
          </Box>
        </Container>
      </Box>
    </footer>
  );
};

export default Footer;
