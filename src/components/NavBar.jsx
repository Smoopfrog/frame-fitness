import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import Dumbbell from '../assets/dumbbell.png';

const Navbar = () => {
  return (
    <Stack>
      <Link to='/'>
        <img src={Dumbbell} alt="logo" className='logo' />
      </Link>
    </Stack>
  )
}

export default Navbar;