import { Box, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react';
import Banner from '../assets/banner.jpg';
import '../styles/App.scss';

export const HeroBanner = () => {
  return (
    <Stack align='center' >
      <Typography color='#FF9700' fontWeight='bolder' 
        sx={{fontSize: {lg: '60px', md: '45px', xs: '35px'}}}
        width='100vw' fontFamily='Calibre' m='150px 0' backgroundColor='white' pt='10px' mb='0'>
        Lift, Breathe, Build Your Frame
      </Typography>

      <Box sx={{backgroundImage: `url(${Banner})`,
      backgroundRepeat: 'no-repeat', 
      backgroundPosition: 'center top',
      width: '100vw',
      height: { lg: '700px', md: '500px', xs: '300px'},
      justifyContent: 'center',
      backgroundSize: 'contain',
      }} />

    </Stack>
  )
}
