import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Stack, Button } from '@mui/material';
import Dumbbell from '../assets/dumbbell.png';
import '../styles/App.scss';
import CustomizedDialogs from './Authentication';
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';

const Navbar = () => {
  const [user, setUser] = useState('')

  const signOut = () => setUser('')

  return (
    <Stack
      backgroundColor='#FF9700'
      direction='row'
      justifyContent='space-between'
      px='20px'
      height='70px'
      alignItems='center'
      position='fixed'
      top='0'
      zIndex='99'
      align='center'
      width='100%'
    >
      <Stack
        direction='row'
        alignItems='center'
        marginLeft='20px'
        marginTop='10px'
      >
        <Box>
          <Link to='/'>
            <img src={Dumbbell} alt="logo"
              style={{ width: '50px', height: '50px' }} />
          </Link>
        </Box>

        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
          <Link to='/' style={{ textDecoration: 'none', color: 'white' }}>
            <h1 >&nbsp;Frame Fitness</h1>
          </Link>
        </Box>

        <a className='nav-elements' href="/#exercises" style={{marginLeft: '30px', fontSize:'26px'}}>Exercises</a>
      </Stack>
      {!user &&
        <Stack
          direction='row'
          gap='20px'
          fontSize='26px'
          alignItems='center'
          marginRight='40px'
          marginTop='10px'
        >
          <a className='nav-elements' >
            <CustomizedDialogs title="Sign In Here" auth='Login' >
              <LoginForm
                setUser={setUser}
              />
            </CustomizedDialogs>
          </a>

          <a className='nav-elements' >
            <CustomizedDialogs title="Register Here" auth="Sign up" >
              <SignupForm 
                setUser={setUser}
              />
            </CustomizedDialogs>
          </a>

        </Stack>
      }

      {user &&
        <Stack>
          <p>
            {user.username}
          </p>
          <Button onClick={signOut}>Sign Out</Button>
        </Stack>
      }

    </Stack>
  )
}

export default Navbar;