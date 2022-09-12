import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Box, Stack, Typography, Badge } from '@mui/material';
import Dumbbell from '../assets/dumbbell.png';
import DumbbellOrange from '../assets/dumbbell-orange.png';
import '../styles/App.scss';
import CustomizedDialogs from './Authentication';
import FullScreenDialog from './ProfilePopUp';
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';
import Chat from './Chat'
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import io from "socket.io-client";

const socket = io.connect("http://localhost:3001")

const Navbar = ({ user, setUser, workout, setWorkout }) => {
  const [showChat, setShowChat] = useState(false);
  const [click, setClick] = useState(false)
  const [visible, setVisible] = useState(false)
  const [navbar, setNavbar] = useState(false);
  const [badgeNum, setBadgeNum] = useState(0);
  const [progress, setProgress] = useState(0)
  const [percentProgress, setPercentProgress] = useState(0)

  const signOut = () => setUser('')
  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);
  useEffect(() => {
    setBadgeNum(workout.length);
  }, [workout])

  const joinChat = () => {
    if (user) {
      socket.emit("join", "chat")
    }
    if (!showChat) {
      setShowChat(true)
    } else {
      setShowChat(false)
    }
  };

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 70) {
      setVisible(true)
    }
    else if (scrolled <= 70) {
      setVisible(false)
    }
  };
  window.addEventListener('scroll', toggleVisible);

  const changeBackground = () => {
    window.scrollY >= 70 ? setNavbar(true) : setNavbar(false);
  }
  window.addEventListener('scroll', changeBackground);

  return (
    <Stack
      className={navbar ? 'navbar active' : 'navbar'}
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
        sx={{ marginLeft: { xs: '10px', md: '70px' } }}
      >
        <Box>
          <Link to='/'>
            {navbar ?
              <img src={Dumbbell} alt="logo" style={{ width: '50px', height: '50px' }} /> :
              <img src={DumbbellOrange} alt="logo" style={{ width: '50px', height: '50px' }} />}

          </Link>
        </Box>

        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          <Link id='name' to='/' >
            <h1 >&nbsp;Frame Fitness</h1>
          </Link>
        </Box>

        <a className='nav-elements' href="/#exercises" style={{ marginLeft: '30px', fontSize: '26px' }}>Exercises</a>
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
            style={{ display: visible ? 'inline' : 'none' }}
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

            <Box className='menu-icon' onClick={handleClick}>
              {click ? <CloseIcon fontSize='large' /> : <MenuIcon fontSize='large' />}
            </Box>

            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <div style={{ height: '30px' }} />
              <a className='nav-elements-mobile' href="/#login" onClick={closeMenu}>
                <CustomizedDialogs title="Sign In Here" auth='Login' >
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
            style={{ display: visible ? 'inline' : 'none' }}
            onClick={() => window.scrollTo({ top: 0 })}
            fontSize='large'
          />

          {/* Desktop/tablet view */}
          <Box className='welcome-user' >
            Welcome {user.username}!
          </Box>
          <a className='nav-elements' onClick={joinChat}>Chat</a>
          <a className='chat-icon'>
            <ChatBubbleOutlineIcon fontSize='large' onClick={joinChat} />
          </a>

          <Badge badgeContent={badgeNum} color="primary">
            <a className='nav-elements' >
              <FullScreenDialog
                title="My Workouts"
                workout={workout}
                setWorkout={setWorkout}
                user={user}
                percentProgress={percentProgress}
                setPercentProgress={setPercentProgress}
                progress={progress}
                setProgress={setProgress}>
              </FullScreenDialog>
            </a>
          </Badge>

          <a className='nav-elements' onClick={signOut} >Sign Out</a>
          {showChat &&
            <Chat user={user} socket={socket} />
          }

          {/* Mobile view */}
          <Stack ml='30px' direction='row' mr='40px'>

            <Box className='menu-icon' onClick={handleClick}>
              {click ? <CloseIcon fontSize='large' /> : <MenuIcon fontSize='large' />}
            </Box>

            <ul className={click ? 'nav-menu active' : 'nav-menu'}>

              <Typography lineHeight='normal' className='nav-elements-mobile' style={{ color: '#00A5B8', marginTop: '20px', fontSize: '26px', background: '#FFF', border: 'none', fontFamily: 'inherit' }} >
                Welcome {user.username}!
              </Typography>
              <a className='nav-elements-mobile' >
              <FullScreenDialog
                title="My Workouts"
                workout={workout}
                setWorkout={setWorkout}
                user={user}
                percentProgress={percentProgress}
                setPercentProgress={setPercentProgress}
                progress={progress}
                setProgress={setProgress}>
              </FullScreenDialog>
              </a>

              <a className='nav-elements-mobile' href="/#exercises" onClick={closeMenu} >Exercises</a>

              <a className='nav-elements-mobile' href="/" onClick={() => (closeMenu, signOut)}>Sign Out</a>
            </ul>
          </Stack>
        </Stack>
      }
    </Stack>
  )
}

export default Navbar;