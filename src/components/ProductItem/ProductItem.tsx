import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import Image from 'mui-image';

import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import CircleText from '../CircleText/CircleText';
import ProductModal from '../ProductModal/ProductModal';
import { Link } from 'react-router-dom';

interface IProductItem {
  productName: string;
  productCategory: string;
  price: number;
  id: string;
  isNew: boolean;
  isCool: boolean;
  isHot: boolean;
  image: string;
}

const ProductItem: React.FC<IProductItem> = ({
  productName,
  productCategory,
  price,
  id,
  isNew,
  isCool,
  isHot,
  image
}) => {
  const [isToggleModal, setIsToggleModal] = useState<boolean>(false);

  const handleToggleModal: () => void = () => {
    setIsToggleModal(!isToggleModal);
  };
  return (
    <Grid item xs={12} md={6} lg={3}>
      <Box
        sx={{
          paddingX: '1.5rem',
          marginBottom: '3rem',
          maxWidth: '100%',
          height: 'auto'
        }}
      >
        <Box
          sx={{
            position: 'relative',
            '&:hover div:nth-child(2)': {
              opacity: 1,
              visibility: 'visible',
              transform: 'translate(-50%, -50%)',
              bottom: '50%'
            }
          }}
        >
          <Image src={image} alt={productName} duration={0} />
          <Box
            sx={{
              background: 'white',
              color: '#333',
              height: '5rem',
              width: '5rem',
              margin: '0 0.3rem',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              transition: 'all 0.3s',
              cursor: 'pointer',
              '&:hover': {
                color: 'white',
                backgroundColor: '#1abc9c'
              },
              position: 'absolute',
              bottom: '11%',
              left: '48%',
              transform: 'translate(-50%, 0%)',
              opacity: 0,
              visibility: 'hidden'
            }}
            onClick={handleToggleModal}
          >
            <FontAwesomeIcon icon={faShoppingCart} />
          </Box>

          {isHot && <CircleText backgroundColor="#f64243">Hot</CircleText>}
          {isNew && <CircleText backgroundColor="#1abc9c">New</CircleText>}
          {isCool && <CircleText backgroundColor="#a57bcd">Cool</CircleText>}

          <Stack
            marginTop="1.5rem"
            direction="row"
            justifyContent="space-between"
          >
            <Typography
              component={Link}
              to={`${id}`}
              sx={{
                color: '#333',
                textDecoration: 'none',
                fontSize: '1.4rem',
                lineHeight: '2.3rem',
                fontFamily: 'Roboto Slab Variable',
                marginBottom: 0,
                fontWeight: 500,
                transition: 'all 0.3s',
                '&:hover': {
                  color: '#1abc9c'
                }
              }}
            >
              {productName}
            </Typography>
            <Typography
              sx={{
                color: '#1abc9c',
                fontSize: '1.4rem',
                lineHeight: '2.3rem',
                fontFamily: 'Roboto Slab Variable',
                marginBottom: 0,
                flexBasis: '40%',
                textAlign: 'right'
              }}
            >
              {price} USD
            </Typography>
          </Stack>
          <Typography
            component={Link}
            to="/"
            sx={{
              color: '#999',
              fontSize: '1.3rem',
              lineHeight: '2.1rem',
              textDecoration: 'none'
            }}
          >
            {productCategory}
          </Typography>
        </Box>
      </Box>
      {isToggleModal && (
        <ProductModal
          isOpen={isToggleModal}
          handleClose={handleToggleModal}
          productId={id}
        />
      )}
    </Grid>
  );
};

export default ProductItem;
