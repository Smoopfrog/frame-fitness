import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import Banner from '../assets/banner.jpg';
import '../styles/App.scss';

export const HeroBanner = () => {
  return (
    <Box className='image-background'
      sx={{backgroundImage: `url(${Banner})`,
      // position: 'absolute', 
      backgroundRepeat: 'no-repeat', 
      backgroundPosition: 'center top',
      height: '724px',
      p: '30px 0',
      justifyContent: 'center',
      m: '70px 0 20px 0'
      }} 
      
      align='center' >

      <Typography 
        color='white' fontWeight='bolder' width='fit-content' p='20px 10px 0'
        lineHeight='normal'
        sx={{fontSize: {md: '60px', xs: '40px'}, border: '4px solid #00A5B8', borderRadius: '10px', background:'rgba(0, 0, 0, 0.6)'}} fontFamily='Calibre' mt='100px' >
        Welcome to Frame Fitness
      </Typography>

      <Typography color='#FF9700' fontWeight='bolder' 
        sx={{fontSize: {md: '40px', xs: '30px'}}}
        width='100vw' fontFamily='Calibre' mt='300px' backgroundColor='white' pt='10px' mb={5}>
        Lift, Breathe, Build Your Frame
      </Typography>
    </Box>
  )
}
