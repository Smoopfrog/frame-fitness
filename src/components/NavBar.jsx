import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import Dumbbell from '../assets/dumbbell.png';

const Navbar = () => {
  return (
    <Stack 
      backgroundColor= '#FF9700'
      direction='row'
      justifyContent='space-between'
      px='20px'
      sx={{ gap: {sm: '120px', xs: '40px'}}}
    >
      <Link to='/' style={{textDecoration: 'none', color: 'white', height: '70px'}}>
        <Stack 
          direction='row' 
          alignItems='center'
          textAlign='right'>
          
          <img src={Dumbbell} alt="logo" 
          style={{width: '50px', marginLeft: '20px', marginBottom: '10px'}} />
          
          <h1>&nbsp;Frame Fitness</h1>

          <a href="#exercises" style={{textDecoration: 'none', color: 'white', marginLeft: '30px', fontSize:'26px'}}>Exercises</a>
        </Stack>

      </Link>
     
      <Stack 
        direction='row'
        gap='20px'
        fontSize='26px'
        alignItems='center'
        marginRight='20px'
        marginTop='10px'
      >
        <a variant="text" href="#login" style={{color: 'white', textDecoration: 'none'}}>Login</a>
        <a variant="text" href="#signup" style={{color: 'white', textDecoration: 'none'}}>Sign up</a>
      </Stack>


    </Stack>
  )
}

export default Navbar;