import React from 'react';

import Dialog from '@mui/material/Dialog';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

import Image from 'mui-image';
import productItem1 from '@flatize/assets/product-6.jpg'
import { Typography } from '@mui/material';
import AccordionProduct from '../AccordionProduct/AccordionProduct';
interface IProductItem {
  isOpen: boolean;
  handleClose(): void;
  productId: string;
}

const ProductModal: React.FC<IProductItem> = ({
  isOpen,
  handleClose
}) => {
  return (
    <Dialog
      maxWidth="xl"
      open={isOpen}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
      sx={{
        borderRadius: 'none'

      }}
    >
      <Box sx={{
        padding: '5rem 5rem 0 5rem'
      }}>
        <Stack direction={{ xs: 'column', lg: 'row' }}>
          <Box sx={{ paddingX: '1.5rem', width: '38.5rem' }}>
            <Image src={productItem1} alt="example product" duration={0} />
          </Box>
          <Box sx={{ paddingX: '1.5rem' }}>
            <Box>
              <Typography>Denim Trousers with faux leather details</Typography>
              <Box>
                <Typography></Typography>
                <Typography> 3 Reviews</Typography>
              </Box>
              <Typography>$29.99</Typography>
              {/* Form */}
              <Box>
                <Typography>Sku: 54329843</Typography>
                <Typography>Categories: Leather Jeans Men</Typography>
                <Typography>Tags: Shoes Jeans Men T-shirt</Typography>
              </Box>

              <AccordionProduct/>

            </Box>
          </Box>
        </Stack>
      </Box>
    </Dialog>
  );
};

export default ProductModal;
