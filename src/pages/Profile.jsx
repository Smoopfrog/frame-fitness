import { Typography, Button, LinearProgress } from '@mui/material'
import { Stack } from '@mui/system';
import React, { useState } from 'react';
import ProfileExercise from '../components/ProfileExercise';
import axios from 'axios';
import '../styles/App.scss';
import { useEffect } from 'react';

const Profile = ({ user, workout, setWorkout, progress, setProgress, percentProgress, setPercentProgress }) => {
  useEffect(() => {
    let progressPercent = progress / workout.length * 100
    setPercentProgress(progressPercent)
  }, [progress, workout])
  
  const deleteAllExercises = async () => {
    const params = {
      userId: user.id,
    };

    await axios.delete('/exercises', { params })
      .then(function (response) {
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
        workout={workout}
        setProgress={setProgress}
      />
    )
  })

  return (
    <Stack className='profile' spacing={3}>
        {percentProgress === 100 && 
      <Typography
        sx={{ fontSize: { lg: '60px', md: '50px', sm: '40px', xs: '30px' }, color: '#FF9700', textAlign: 'center'}}
      >
        Workout Completed</Typography>
        }
        {userExercises.length >= 1 ?
         <LinearProgress variant="determinate" value={percentProgress} sx={{width: {lg: '500px', md: '450px', sm: '400px', xs: '300px'}, height:{lg: '50px', sm: '45px', xs: '40px'}, borderRadius: '10px'}} /> : ''}
      
      {userExercises.length >= 1 ?
        <Button className='profile-card-delete-btn' onClick={deleteAllExercises}>Delete All</Button> :
        <Typography sx={{ textAlign: 'center', color: '#FF9700', fontSize: {xs: '26px', md: '30px', lg: '32px'}}}>
          Add Exercises to Begin Workout
        </Typography>
      }
      {userExercises}
    </Stack>
  )
}

export default Profile;