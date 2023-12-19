import React from 'react';
import 'react-image-gallery/styles/css/image-gallery.css';
import Dialog from '@mui/material/Dialog';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import { faClose } from '@fortawesome/free-solid-svg-icons';

import ImageGallery from 'react-image-gallery';
import { ReactImageGalleryItem } from 'react-image-gallery';
import productItem1 from '@flatize/assets/product-6.jpg';
import productItem2 from '@flatize/assets/product-1.jpg';
import ProductForm from '@flatize/components/ProductForm/ProductForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
interface IProductItem {
  isOpen: boolean;
  handleClose(): void;
  productId: string;
}

const images: ReactImageGalleryItem[] = [
  {
    original: productItem1,
    thumbnail: productItem1
  },
  {
    original: productItem2,
    thumbnail: productItem2
  }
];


const ProductModal: React.FC<IProductItem> = ({ isOpen, handleClose }) => {

  return (
    <Dialog
      maxWidth="lg"
      open={isOpen}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
      sx={{
        borderRadius: 'none'

      }}
    >
      <IconButton sx={{ position: 'absolute', right: 0, top: 0, zIndex: 3, color: '#000' }} onClick={handleClose}>
        <FontAwesomeIcon icon={faClose} fontSize={'1.2rem'}/>
      </IconButton>
      <Box
        sx={{
          padding: '5rem 5rem 0 5rem'
        }}
      >
        <Stack direction={{ xs: 'column', lg: 'row' }}>
          <Box sx={{ paddingX: '1.5rem', width: { xs: '100%', lg: '50%' } }}>
            <ImageGallery
              items={images}
              showNav={false}
              showPlayButton={false}
              showFullscreenButton={false}
            />
          </Box>
          <Box sx={{ paddingX: '1.5rem', width: { xs: '100%', lg: '50%' } }}>
            <ProductForm/>
          </Box>
        </Stack>
      </Box>
    </Dialog>
  );
};

export default ProductModal;
