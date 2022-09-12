import { Box, Stack, Typography, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import CheckIcon from '@mui/icons-material/Check';
import '../styles/App.scss';
const axios = require('axios')


const ExerciseCard = ({ exercise, user, workout, setWorkout }) => {
  const [click, setClick] = useState(false)

  const data = {
    userId: user.id,
    exercise: exercise
  }

  const params = {
    userId: user.id,
    exerciseId: exercise.id
  };

  const addExercise = async (data) => {
    await axios.post('/exercises', data)
      .then(function (response) {
        setWorkout(response.data.workout)
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const deleteExercise = async (params) => {
    await axios.delete('/exercises', { params })
      .then(function (response) {
        setWorkout(response.data.workout)
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const handleClick = (data) => {
    if(click) {
      deleteExercise(data)
    } else {
      addExercise(data)
    }
    setClick(!click)
  };

  const inWorkout = workout.find(element => {
    if (element.exerciseid == exercise.id) {
      return true
    }
  })


  useEffect(() => {
    if (inWorkout) {
      setClick(true)
    } else (
      setClick(false)
    )
  }, [workout, exercise] );

  return (
    <Box className='exercise-card'
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
          (click ?
            <Button onClick={() => {handleClick(params); }}  className="exercise-card-check-btn" >
              <CheckIcon fontSize='large' />
            </Button> :

            <Button onClick={() => {handleClick(data); }} className="exercise-card-add-btn" >
              <AddIcon fontSize='large' />
            </Button>)
        }
      </Stack>
    </Box>
  )
}

export default ExerciseCard;
