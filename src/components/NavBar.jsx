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
    >
      <Link to='/' style={{textDecoration: 'none', color: 'white'}}>
        <Stack 
          direction='row' 
          alignItems='flex-start'
          textAlign='right'>
          
          <img src={Dumbbell} alt="logo" 
          style={{width: '50px', marginLeft: '20px', marginTop: '10px'}} />
          <h1>&nbsp;Frame Fitness</h1>
        </Stack>

      </Link>

      <Stack 
        direction='row'
        gap='30px'
        fontSize='26px'
        alignItems='center'
        marginRight='20px'
      >
        <Link to="/"
          style={{textDecoration: 'none', fontWeight: 'bolder', color: 'white'}}>Home</Link>

        <a href="#exercises" style={{textDecoration: 'none', color: 'white'}}>Exercises</a>
      </Stack>

    </Stack>
  )
}

export default Navbar;