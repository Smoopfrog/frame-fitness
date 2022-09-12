import React, { useState } from 'react';
// import All from '../assets/all.jpg';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import CheckIcon from '@mui/icons-material/Check';
import ToggleButton from '@mui/material/ToggleButton';
import { Box, Stack, Button, Typography, ButtonGroup } from '@mui/material';
import axios from 'axios';


const ProfileExercise = ({ setWorkout, exerciseId, bodyPart, equipment, exerciseName, gifUrl, targetGroup, userId, totalReps, totalSets }) => {
  const [counter, setCounter] = useState(totalSets);
  const [counterRep, setCounterRep] = useState(totalReps);
  const [selected, setSelected] = useState(false);
  console.log('userId', userId)
  const deleteExercise = async () => {
    const params = { 
      userId: userId,
      exerciseId: exerciseId
    };

    await axios.delete('/exercises', { params })
      .then(function (response) {
        console.log(response.data)
        setWorkout(response.data.workout)
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <Stack sx={{ flexDirection: { xs: 'column', sm: 'row' } }}  >

      <Stack className="profile-card" m='20px'
        sx={{ '&:hover': { boxShadow: '0 0 3px 5px #FF9700' }, objectPosition: 'center center' }}
      >
        <Typography className="profile-card-name"
          sx={{ fontSize: { lg: '24px', xs: '20px' } }} >
          {exerciseName}
        </Typography>

        <img src={gifUrl} alt='photo' margin="inherit" style={{ width: '200px', display: 'flex', justifyContent: 'center', alignItems: 'center' }} />

        <Stack direction="row">

          <Box className="profile-card-btn" >
            {bodyPart}
          </Box>

          <Box className="profile-card-btn">
            {equipment}
          </Box>

          <Button className="profile-card-delete-btn"
            onClick={deleteExercise}
            sx={{ '&:hover': { background: 'white', color: 'red', border: '2px solid red', p: '4px 6px', backgroundColor: 'white' } }}>
            <DeleteIcon fontSize="large" />
          </Button>

        </Stack>

      </Stack>
      <Stack className='quantity-stack' >
        <Box >
          <Typography className='quantity-name' >Sets</Typography>
          <ButtonGroup size="large" aria-label="outlined button group" >

            <Button className='quantity-btn' onClick={() => { setCounter(counter + 1) }}><AddIcon /></Button>

            {<Box className='quantity-counter' >{counter}</Box>}

            {<Button className='quantity-btn' disabled={counter <= 0} onClick={() => {
              setCounter(counter - 1)
            }}><RemoveIcon /></Button>}

          </ButtonGroup>
        </Box>

        <Box style={{ alignItems: 'center' }}>
          <Typography className='quantity-name' mt='10px'>Reps</Typography>
          <ButtonGroup size="large" aria-label="small outlined button group">

            <Button className='quantity-btn' onClick={() => { setCounterRep(counterRep + 1) }}><AddIcon /></Button>

            {<Box className='quantity-counter' >{counterRep}</Box>}

            {<Button className='quantity-btn' disabled={counterRep <= 0} onClick={() => {
              setCounterRep(counterRep - 1)
            }}><RemoveIcon /></Button>}

          </ButtonGroup>
        </Box>

        <ToggleButton
          sx={{
            "&.Mui:hover, &.Mui-selected, &.Mui-selected:hover": {
              color: "white",
              backgroundColor: '#00A5B8'
            }, width: '150px', mt: '20px'
          }}
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
  )
}

export default ProfileExercise
