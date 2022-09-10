import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Stack, Typography } from '@mui/material';
import Dumbbell from '../assets/dumbbell.png';
import '../styles/App.scss';
import CustomizedDialogs from './Authentication';
import FullScreenDialog from './ProfilePopUp';
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';
import Chat from './Chat'
import Profile from '../pages/Profile';
import axios from 'axios';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import io from "socket.io-client";

const socket = io.connect("http://localhost:3001")

const Navbar = ({ user, setUser, workout, setWorkout }) => {
  const signOut =  () => setUser('')
  const [showChat, setShowChat] = useState(false);

  const joinChat = () =>{
    if(user) {
      socket.emit("join", "chat")
    }
    if(!showChat) { 
      setShowChat(true)
    } else {
      setShowChat(false)
    }
  };
  
  const getWorkout = async() => {
    const params = { userId: user.id }; 

    await axios.get('/exercises', {params})
    .then(function (response) {
        console.log(response.data.workout)
        setWorkout(response.data.workout)
    })
    .catch(function (error) {
      console.log(error);
    });
  }
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click);
    const closeMenu = () => setClick(false);

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
      width='100vw'
    >
      <Stack
        direction='row'
        alignItems='center'
        marginTop='10px'
        sx={{marginLeft: { xs: '10px', md: '70px'}}}
      >
        <Box>
          <Link to='/'>
            <img src={Dumbbell} alt="logo"
              style={{ width: '50px', height: '50px' }} />
          </Link>
        </Box>

        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
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

          <ArrowCircleUpIcon 
          className={"toggle-up"}
          onClick={() => window.scrollTo({ top: 0 })} 
          fontSize='large' 
          />
          {/* Desktop/tablet view */}
          <a className='nav-elements' href="/#login" >
            <CustomizedDialogs title="Sign In Here" auth='Login' >
              <LoginForm
                setUser={setUser}
              />
            </CustomizedDialogs>
          </a>

          <a className='nav-elements' href="/#signin" >
            <CustomizedDialogs title="Register Here" auth="Sign up" >
              <SignupForm 
                setUser={setUser}
              />
            </CustomizedDialogs>
          </a>
          
          {/* Mobile view */}
          <Stack ml='30px' direction='row'
          mr='40px'>

            <Box className='menu-icon'  onClick={handleClick}>
            {click ? <CloseIcon fontSize='large' /> : <MenuIcon   fontSize='large' />}
            </Box>

            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <div style={{height: '30px'}} />
                <a className='nav-elements-mobile' href="/#login" onClick={closeMenu}>
                  <CustomizedDialogs title="Sign In Here"   auth='Login' >
                    <LoginForm
                      setUser={setUser}
                    />
                  </CustomizedDialogs>
                </a>
          
                <a className='nav-elements-mobile' href="/#signin" onClick={closeMenu} >
                  <CustomizedDialogs title="Register Here" auth="Sign up" >
                    <SignupForm setUser={setUser} />
                  </CustomizedDialogs>
                </a>

                <a className='nav-elements-mobile' href="/#exercises" onClick={closeMenu} >Exercises</a>
              
            </ul>
          </Stack>

        </Stack>
      }

      {user &&
        <Stack
        direction='row'
        gap='20px'
        fontSize='26px'
        alignItems='center'
        marginRight='40px'
        marginTop='10px'
        >
          <ArrowCircleUpIcon 
          className={"toggle-up"}
          onClick={() => window.scrollTo({ top: 0 })} 
          fontSize='large' 
          />

          {/* Desktop/tablet view */}
          <Box className='welcome-user' >
            Welcome {user.username}!
          </Box>
          <a className='nav-elements' onClick={joinChat}>Chat</a>

          <a className='nav-elements' onClick={getWorkout} >
            <FullScreenDialog title="My Workouts">
              <Profile />
            </FullScreenDialog>
          </a>
          <a className='nav-elements' onClick={signOut} >Sign Out</a>
          {showChat &&  
            <Chat user={user} socket={socket} />
          }

          {/* Mobile view */}
          <Stack  ml='30px' direction='row' mr='40px'>

            <Box className='menu-icon'  onClick={handleClick}>
            {click ? <CloseIcon fontSize='large' /> : <MenuIcon   fontSize='large' />}
            </Box>

            <ul className={click ? 'nav-menu active' : 'nav-menu'}>

              <Typography className='nav-elements-mobile' style={{ color: '#00A5B8', marginTop: '20px', fontSize: '24px', background: '#FFF', border: 'none'}} >
                Welcome {user.username}!
              </Typography>

              <a className='nav-elements-mobile' onClick={getWorkout} >
                <FullScreenDialog title="My Workouts" >
                  <Profile />
                </FullScreenDialog>
              </a>

              <a className='nav-elements-mobile' href="/#exercises" onClick={closeMenu} >Exercises</a>

              <a className='nav-elements-mobile' href="/" onClick={() => (closeMenu, signOut)}>Sign Out</a>

            <a className='nav-elements-mobile' onClick={joinChat}>Chat</a>
            {showChat &&  
              <Chat user={user} socket={socket} />
            }
          </ul>

          </Stack>

        </Stack>
      }
    </Stack>
  )
}

export default Navbar;