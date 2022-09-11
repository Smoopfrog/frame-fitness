import { Box, Stack, Typography, Button } from "@mui/material";
import React from "react";
import AddIcon from '@mui/icons-material/Add';
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
        alert('added exercise')
      })
      .catch(function (error) {
        console.log(error);
        alert('Username taken')
      });
  };

  return (
    <Box className="exercise-card"
      sx={{ '&:hover': { boxShadow: '0 0 3px 5px #FF9700' } }}
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
          <Button onClick={addExercise} className="exercise-card-add-btn" sx={{ '&:hover': { color: '#FF9700', border: '2px solid #FF9700', p: '4px 6px' }, minWidth: 'min-content' }}>
            <AddIcon fontSize="large" />
          </Button>
        }

      </Stack>
    </Box>

  )
}

export default ExerciseCard;
