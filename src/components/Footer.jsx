import { Typography } from '@mui/material';
import { Stack, Box } from '@mui/system';
import React from 'react';
import Break from '../assets/break.gif';
import '../styles/App.scss';

const Footer = () => {
  return (
    <Stack direction='row' sx={{ height: '300px', bottom: '0'}} alignItems='center'  justifyContent='center'>
      <img className='footer-img' src={Break} alt="break" style={{objectFit: 'contain'}}/>
      <Typography fontFamily='Calibre' sx={{fontSize: {lg: '50px', md: '40px', xs: '30px'}}} fontWeight='bolder' lineHeight="normal" color='#FF9700' mr='10px' >Tired? <br /> Take a break</Typography>
    </Stack>
  )
}

export default Footer