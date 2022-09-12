import { Box, Typography, Button, ButtonGroup } from '@mui/material'
import { Stack } from '@mui/system';
import React, { useState, useEffect } from 'react';
import ProfileExercise from '../components/ProfileExercise';
import axios from 'axios';
import '../styles/App.scss';

const Profile = ({ user, setUser, workout, setWorkout }) => {
  const getWorkout = async (userId) => {
    const params = { userId: userId };

    await axios.get('/exercises', { params })
      .then(function (response) {
        console.log(response.data.workout)
        setWorkout(response.data.workout)
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const deleteAllExercises = async () => {
    const params = {
      userId: user.id,
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



  const userExercises = workout.map(exercise => {
    return (
      <ProfileExercise
        key={exercise.id}
        exerciseId={exercise.exerciseid}
        bodyPart={exercise.bodypart}
        equipment={exercise.equipment}
        exerciseName={exercise.exercisename}
        gifUrl={exercise.gifurl}
        targetGroup={exercise.targetgroup}
        totalReps={exercise.totalreps}
        totalSets={exercise.totalsets}
        userId={exercise.user_id}
        setWorkout={setWorkout}
      />
    )
  })

  return (
    <Stack className='profile' spacing={3}>
      <Typography
        sx={{ fontSize: { lg: '60px', md: '50px', sm: '40px', xs: '30px' }, color: '#00A5B8' }}
      >My Workout
      </Typography> 
      <Button className='profile-card-delete-btn' onClick={deleteAllExercises}>Delete All</Button>
      {userExercises}
    </Stack>
  )
}

export default Profile;