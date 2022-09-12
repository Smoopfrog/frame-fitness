import { Box, Stack, Typography, Button } from "@mui/material";
import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import CheckIcon from '@mui/icons-material/Check';
import '../styles/App.scss';
const axios = require('axios')


const ExerciseCard = ({ exercise, user }) => {

  const addExercise = () => {
    const data = {
      userId: user.id,
      exercise: exercise
    }

    axios.post('/exercises', data)
      .then(function (response) {
        
      })
      .catch(function (error) {
        console.log(error);
        alert('Username taken')
      });
  };

  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click);


  return (
    <Box className="exercise-card"
      sx={{ '&:hover': { boxShadow: '0 0 3px 3px #FF9700', transform: 'scale(1.02, 1.02)', transition: 'transform 0.2s ease-in-out' } }}
    >
      <Typography className="exercise-card-name" sx={{ fontSize: { lg: '24px', xs: '20px' } }} >
        {exercise.name}
      </Typography>
      <img margin="inherit" src={exercise.gifUrl} alt={exercise.name} loading="lazy"
      />
      <Stack direction="row" >
        <Box className="exercise-card-btn" >
          {exercise.bodyPart}
        </Box>
        <Box className="exercise-card-btn">
          {exercise.equipment}
        </Box>
        {user &&
        
        click ? 
          <Button disabled className="exercise-card-disabled-btn" >
            <CheckIcon fontSize='large' />
          </Button> :
        
          <Button onClick={() => { addExercise(); handleClick(); }}   className="exercise-card-add-btn" >
            <AddIcon fontSize='large' />
          </Button>
        
      }
     
      </Stack>
    </Box>

  )
}

export default ExerciseCard;
