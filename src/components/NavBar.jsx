import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import Dumbbell from '../assets/dumbbell.png';
import '../styles/App.scss'

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

          <a className='nav-elements' href="#exercises" style={{marginLeft: '30px', fontSize:'26px'}}>Exercises</a>
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
        <a className='nav-elements' variant="text" href="#login" >Login</a>
        <a className='nav-elements' variant="text" href="#signup" >Sign up</a>
      </Stack>


    </Stack>
  )
}

export default Navbar;