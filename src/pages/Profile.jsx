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
        setProgress(0)
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
      <Typography
        sx={{ fontSize: { lg: '60px', md: '50px', sm: '40px', xs: '30px' }, color: '#00A5B8' }}
      >
        My Workout
      </Typography>
      {percentProgress === 100 &&
        <Typography
          sx={{ fontSize: { lg: '60px', md: '50px', sm: '40px', xs: '30px' }, color: '#00A5B8' }}
        >
          You're all done! Congratulations!
        </Typography>}
      {workout.length === 0 ?
          <Typography
            sx={{ fontSize: { lg: '60px', md: '50px', sm: '40px', xs: '30px' }, color: '#00A5B8' }}
          >
            Add some exercises
          </Typography>
        :
          <LinearProgress variant="determinate" value={percentProgress} sx={{ width: '500px', height: '50px' }} />
      }
      {workout.length !== 0 &&
        <Button className='profile-card-delete-btn' onClick={deleteAllExercises}>Delete All</Button>
      }
      {userExercises}
    </Stack>
  )
}

export default Profile;