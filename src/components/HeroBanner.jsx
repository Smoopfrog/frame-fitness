import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import Banner from '../assets/banner.jpg';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import '../styles/App.scss';

export const HeroBanner = () => {
  return (
    <Box className='image-background'
      sx={{backgroundImage: `url(${Banner})`,
      // position: 'absolute', 
      backgroundRepeat: 'no-repeat', 
      backgroundPosition: 'center top',
      height: '100%'
      }} 
      align='center' >

      <Typography 
        color='white' fontWeight='bolder' width='fit-content' p='20px 10px 0'
        lineHeight='normal'
        sx={{fontSize: {lg: '60px', xs: '50px'}, border: '3px solid #FF9700', borderRadius: '10px', background: 'rgba(0, 0, 0, 0.6)'}} fontFamily='Calibre' mt='80px' >
        Welcome to Frame Fitness
      </Typography>

      <Typography color='#FF9700' fontWeight='bolder' 
        sx={{fontSize: {lg: '40', xs: '35px'}, overflow: 'visible'}}
        width='100vw' fontFamily='Calibre' mt='300px' backgroundColor='white' pt='10px' mb={5}>
        Lift, Breathe, Build Your Frame
      </Typography>

      <Button variant='contained' size='large' href='#exercises' endIcon={<FitnessCenterIcon />}
        sx={{backgroundColor: '#FF9700', fontWeight: 'bolder', '&:hover': {backgroundColor: '#fff', color: '#FF9700'
        }}}>Browse Exercises</Button>
    </Box>
  )
}
