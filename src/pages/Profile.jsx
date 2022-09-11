import { Box, Typography, Button, ButtonGroup } from '@mui/material'
import { Stack } from '@mui/system';
import React, { useState } from 'react';
import '../styles/App.scss';
import All from '../assets/all.jpg';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import CheckIcon from '@mui/icons-material/Check';
import ToggleButton from '@mui/material/ToggleButton';

const Profile = () => {

  const [counter, setCounter] = useState(0);
  const [counterRep, setCounterRep] = useState(0);
  const [selected, setSelected] = useState(false);


  return (
    
    <Stack className='profile' spacing={3}>
      <Typography 
        sx={{ fontSize: { lg: '60px', md: '50px', sm: '40px', xs: '30px'}, color: '#00A5B8'}}
      >My Profile
      </Typography>

      <Stack sx={{ flexDirection: { xs: 'column', sm: 'row'}}}  >

        <Stack className="profile-card" m='20px'
          sx={{'&:hover': {boxShadow: '0 0 3px 5px #FF9700'}, objectPosition: 'center center'}}
        >
          <Typography className="profile-card-name" 
              sx={{ fontSize: { lg: '30px', md: '26px', xs: '24px' }}} >
            Exercise 
          </Typography>

          <img src={All} alt='photo' margin="inherit" style={{width: '200px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}/>

          <Stack direction="row">

            <Box className="profile-card-btn" >
              Body part
            </Box>

            <Box className="profile-card-btn">
              equipment
            </Box>

            <Button className="profile-card-delete-btn" 
                sx={{minWidth: 'min-content', '&:hover': {background: 'white', color: 'red', border: '2px solid red', p: '4px 6px', backgroundColor: 'white'}}}>
              <DeleteIcon fontSize="large"/>
            </Button>

          </Stack>

        </Stack> 
          <Stack className='quantity-stack' >
            <Box >
              <Typography className='quantity-name'  sx={{ fontSize: { lg: '26px', xs: '24px' }}} >Sets</Typography>
              <ButtonGroup sx={{ size: {sm: "large", xs: 'medium'}}} aria-label="outlined button group" >

                <Button className='quantity-btn'  onClick={()=> 
                {setCounter(counter + 1)}}><AddIcon /></Button>

                {<Box className='quantity-counter' >{counter}</Box>}

                {<Button className='quantity-btn' disabled={counter <= 0} onClick={() => {
                setCounter(counter - 1)
                }}><RemoveIcon /></Button>}

              </ButtonGroup>
            </Box>

            <Box style={{alignItems: 'center'}}>
              <Typography className='quantity-name' sx={{ fontSize: { lg: '26px', xs: '24px' }}} >Reps</Typography>
              <ButtonGroup aria-label="small outlined button group" sx={{ size: {sm: "large", xs: 'medium'}}} >

                <Button className='quantity-btn'  onClick={()=> 
                {setCounterRep(counterRep + 1)}}><AddIcon /></Button>

                {<Box className='quantity-counter' >{counterRep}</Box>}

                {<Button className='quantity-btn' disabled={counterRep <= 0} onClick={() => {
                setCounterRep(counterRep - 1)
                }}><RemoveIcon /></Button>}

              </ButtonGroup>
            </Box>

            <ToggleButton 
              sx={{"&.Mui:hover, &.Mui-selected, &.Mui-selected:hover": {
                color: "white",
                backgroundColor: '#00A5B8'
              }, width: {sm: '150px', xs: '120px'}, height: { sm: '60px', xs: '50px'}, mt: '20px'}}
              className='toggle'
                value="check"
                selected={selected}
                onChange={() => {
                  setSelected(!selected);
                }}
              >
                <CheckIcon fontSize='large' />
            </ToggleButton>

          </Stack>
      </Stack>

    </Stack>
    )
}

export default Profile;