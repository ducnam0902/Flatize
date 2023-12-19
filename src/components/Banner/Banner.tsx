import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Image from 'mui-image'

import bannerImage from '@flatize/assets/bg-blog.jpg'
import React from 'react'

interface IBanner {
    title:string
}

const Banner:React.FC<IBanner> = ({ title }) => {
  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        marginBottom: '6rem',
        textAlign: 'center',
        px: 0,
        position: 'relative',
        height: '20.2rem'
      }}
    >
      <Image src={bannerImage} alt="banner" width="100%"/>
      <Typography
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%,-50%)',
          color: 'white',
          fontWeight: 700,
          fontSize: { xs: '4rem', sm: '4.8rem' },
          textTransform: 'uppercase',
          lineHeight: '1.1'
        }}>
        {title}
      </Typography>
    </Container>
  )
}

export default Banner
