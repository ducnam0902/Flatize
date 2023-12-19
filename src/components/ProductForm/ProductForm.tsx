import React from 'react'
import { useForm, Controller } from 'react-hook-form';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Typography from '@mui/material/Typography';
import RadioGroup from '@mui/material/RadioGroup';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import AccordionProduct from '@flatize/components/AccordionProduct/AccordionProduct';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import CustomRadio from '@flatize/components/CustomRadio/CustomRadio';
interface IFormProduct {
    size: string;
    color: string;
    quantity: number;
  }

const ProductForm: React.FC = () => {
  const form = useForm<IFormProduct>({
    defaultValues: {
      size: '',
      color: '',
      quantity: 1
    }
  });
  const { register, handleSubmit, control, getValues, setValue } = form;

  const onSubmit = (data: IFormProduct) => {
    alert(data);
  };

  const handleChangeQuanity = (changeSign: string) => {
    const quanityValue = Number(getValues('quantity'));
    setValue('quantity', changeSign === 'add' ? quanityValue + 1 : quanityValue -1);
  }

  return (
    <Box>
      <Typography
        variant="h3"
        sx={{
          marginBottom: '1rem',
          color: '#333',
          fontFamily: 'Roboto Slab Variable',
          fontSize: '2.4rem',
          fontWeight: 500,
          lineHeight: '1.1'
        }}
      >
      Denim Trousers with faux leather details
      </Typography>
      <Stack
        direction="row"
        justifyContent={'flex-start'}
        alignItems={'center'}
        sx={{ marginBottom: '0.5rem' }}
      >
        <Typography marginBottom="0">
          <FontAwesomeIcon icon={faStar} fontSize="1.4rem" />
          <FontAwesomeIcon icon={faStar} fontSize="1.4rem" />
          <FontAwesomeIcon icon={faStar} fontSize="1.4rem" />
          <FontAwesomeIcon icon={faStar} fontSize="1.4rem" />
          <FontAwesomeIcon icon={faStar} fontSize="1.4rem" />
        </Typography>
        <Typography
          sx={{
            marginLeft: '2rem',
            color: '#666',
            lineHeight: '1.6',
            fontSize: '1.4rem',
            marginBottom: 0
          }}
        >
          {' '}
        3 Reviews
        </Typography>
      </Stack>
      <Typography
        sx={{
          marginBottom: '3rem',
          fontSize: '2.4rem',
          color: '#1abc9c',
          fontFamily: 'Roboto Slab Variable',
          lineHeight: '1.6'
        }}
      >
      $29.99
      </Typography>
      <Box sx={{ marginBottom: '4rem' }}>
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Box sx={{ marginBottom: '4rem' }}>
            <FormControl sx={{ minWidth: 120 }}>
              <InputLabel id="size-product-label" sx={{ fontSize: '1.4rem', top: '-0.5rem' }}>Size</InputLabel>
              <Select
                labelId="size-product-label"

                id="sizeProduct"
                {...register('size')}
                label="Size"
                sx={{
                  borderRadius: 0,
                  borderColor: '#dddddd',
                  marginBottom: 0,
                  height: '3.9rem',
                  '& .MuiSelect-select': {
                    padding: '0.7rem 4rem 1rem 1.5rem'
                  },
                  '& .MuiSelect-nativeInput': {
                    height: '2.2rem !important'
                  }
                }}
              >
                <MenuItem value="">
                  <em>Select Size</em>
                </MenuItem>
                <MenuItem value={'S'}>S</MenuItem>
                <MenuItem value={'M'}>M</MenuItem>
                <MenuItem value={'L'}>L</MenuItem>
              </Select>
            </FormControl>
            <FormControl >
              <Controller
                control={control}
                name="color"
                render= {({ field }) => (
                  <RadioGroup row {...field}>
                    <CustomRadio label="" value="red" color={'#333333'} />
                    <CustomRadio label="" value="purple" color={'#a57bcd'} />
                    <CustomRadio label="" value="blue" color={'#3598db'} />
                  </RadioGroup>
                )
                }
              />

            </FormControl>
          </Box>

          <Stack
            direction={{ xs: 'column', md: 'row' }}
            justifyContent={{ xs: 'center', md: 'space-between' }}
            sx={{
              paddingY: '3rem',
              marginBottom: '5rem',
              borderTop: '1px solid #dddddd',
              borderBottom: '1px solid #dddddd'
            }}
          >
            <FormControl>
              <Stack direction="row" justifyContent={'flex-start'}>
                <Box
                  onClick={() => handleChangeQuanity('subtract')}
                  sx={{
                    backgroundColor: 'whitesmoke',
                    height: '5rem',
                    textAlign: 'center',
                    padding: '0.1rem 0.6rem',
                    color: '#666',
                    display: 'flex',
                    alignItems: 'center',
                    cursor: 'pointer'
                  }}
                >
                  -
                </Box>
                <TextField
                  variant='outlined'
                  id="quanity"
                  type="number"
                  sx={{
                    background: 'whitesmoke',
                    height: '5rem',
                    textAlign: 'center',
                    width: '5rem',
                    '& .MuiInputBase-root': {
                      borderRadius: 0
                    },
                    '& .MuiInputBase-input': {
                      textAlign: 'center'
                    },
                    '& .MuiOutlinedInput-notchedOutline': {
                      border: 'none'
                    }
                  }}
                  {...register('quantity', { required: true })}
                />
                <Box
                  onClick={() => handleChangeQuanity('add')}
                  sx={{
                    backgroundColor: 'whitesmoke',
                    height: '5rem',
                    textAlign: 'center',
                    padding: '0.1rem 0.6rem',
                    color: '#666',
                    display: 'flex',
                    alignItems: 'center',
                    cursor: 'pointer'
                  }}
                >
                  +
                </Box>
              </Stack>
            </FormControl>
            <Box>
              <Button
                sx={{
                  padding: '1.4rem 1.5rem 1.3rem',
                  backgroundColor: 'whitesmoke',
                  minWidth: '5rem',
                  color: '#666666',
                  minHeight: '5rem',
                  fontWeight: 700,
                  transition: 'all 0.3s',
                  marginRight: '0.6rem',
                  borderRadius: '0',
                  '&:hover': {
                    backgroundColor: '#1abc9c',
                    borderColor: '#333333',
                    color: 'white'
                  }
                }}>
                <FontAwesomeIcon icon={faHeart} fontSize={'1.2rem'} />
              </Button>
              <Button
                type="submit"
                startIcon={<FontAwesomeIcon icon={faShoppingCart} fontSize="1.2rem"/>}
                sx={{
                  backgroundColor: '#1abc9c',
                  color: 'white',
                  fontWeight: 700,
                  padding: '1.4rem 1.5rem 1.3rem 1.5rem',
                  minHeight: '5rem',
                  borderRadius: 0,
                  fontSize: '1.2rem',
                  minWidth: '14rem',
                  '&:hover': {
                    backgroundColor: '#333333',
                    color: 'white',
                    borderColor: '#333333'
                  }
                }}
              >
                Add To Cart
              </Button>
            </Box>
          </Stack>
        </form>
      </Box>

      <Box sx={{ marginBottom: '5rem' }}>
        <Typography
          sx={{
            marginBottom: 0,
            fontSize: '1.3rem',
            lineHeight: '1.6'
          }}
        >
        Sku: 54329843
        </Typography>
        <Typography
          sx={{
            marginBottom: 0,
            fontSize: '1.3rem',
            lineHeight: '1.6'
          }}
        >
        Categories: Leather Jeans Men
        </Typography>
        <Typography
          sx={{
            marginBottom: 0,
            fontSize: '1.3rem',
            lineHeight: '1.6'
          }}
        >
        Tags: Shoes Jeans Men T-shirt
        </Typography>
      </Box>
      <AccordionProduct />
    </Box>
  )
}

export default ProductForm
