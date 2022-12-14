import React, { useState, useEffect } from "react";
import { Pagination, Stack, Typography } from "@mui/material";
import { exerciseOptions, fetchData } from "../utils/fetchData";
import { Box } from "@mui/system";
import ExerciseCard from './ExerciseCard';

const Exercises = ({ page, setPage, exercises, setExercises, category, user, workout, setWorkout }) => {
  const [exercisesPerPage] = useState(8);
 
  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];

      if (category === 'all') {
        exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
      } else {
        exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${category}`, exerciseOptions);
      }
      setExercises(exercisesData);
    };

    fetchExercisesData();
  }, [category]);

  const indexOfLastExercise = page * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);

  const paginate = (event, value) => {
    setPage(value);
  };

  const exerciseCards = currentExercises.map((exercise, index) => {
    return (<ExerciseCard key={index} exercise={exercise} user={user} workout={workout} setWorkout={setWorkout}/>)
  })

  return (
    <Box id="exercises"
      mt="80px"
      p="20px"
    >
      {!user &&
      <Typography className='user-message' sx={{ fontSize: {lg: '45px', md: '35px', xs: '25px'}}}>Signup or Login to Add Exercises to Your Workout!</Typography>
      }

      <Stack direction="row" sx={{ gap: { lg: '107px', xs: '50px' } }} flexWrap="wrap" justifyContent="center">
        {exerciseCards}
      </Stack>
      <Stack sx={{ mt: { lg: '114px', xs: '70px' } }} alignItems="center">
        {exercises.length > 9 && (
          <Pagination
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={page}
            onClick={() => window.scrollTo(0, 950)}
            onChange={paginate}
            size="large"
          />
        )}
      </Stack>
    </Box>
  )
};

export default Exercises;