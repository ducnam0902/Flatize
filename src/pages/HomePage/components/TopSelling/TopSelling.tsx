import ProductItem from '@flatize/components/ProductItem/ProductItem'
import Container from '@mui/material/Container'
import React from 'react'
import Grid from '@mui/material/Grid';
import productItem1 from '@flatize/assets/product-6.jpg'

const products =[{
  productName: 'Linen shirt with ribbon at the front',
  productCategory: 'Shirts',
  price: 29.99,
  id: '1',
  isNew: true,
  isCool: false,
  isHot: false,
  image: productItem1
}, {
  productName: 'Linen shirt with ribbon at the front',
  productCategory: 'Shirts',
  price: 29.99,
  id: '1',
  isNew: false,
  isCool: true,
  isHot: false,
  image: productItem1
}, {
  productName: 'Linen shirt with ribbon at the front',
  productCategory: 'Shirts',
  price: 29.99,
  id: '1',
  isNew: false,
  isCool: false,
  isHot: true,
  image: productItem1
}, {
  productName: 'Linen shirt with ribbon at the front',
  productCategory: 'Shirts',
  price: 29.99,
  id: '1',
  isNew: false,
  isCool: false,
  isHot: false,
  image: productItem1
}]

const TopSelling: React.FC = () => {
  return (
    <Container maxWidth="xl" disableGutters sx={{ marginTop: '5rem' }}>
      <Grid container>
        {
          products.map((item, index) => <ProductItem key={index} {...item}/>)
        }
      </Grid>

    </Container>
  )
}

export default TopSelling
