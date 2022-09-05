import React, { useState, useEffect } from "react";
import { Pagination, Stack, Typography } from "@mui/material";
import { exerciseOptions, fetchData } from "../utils/fetchData";
import { Box } from "@mui/system";
import ExerciseCard from './ExerciseCard';

const Exercises = ({ exercises, setExercises, category }) => {
  const [page, setPage] = useState(1);
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

    // window.scrollTo({ top: 1800, behavior: 'smooth' });
  };

  // const showExercises = exercises.slice(0, 9)

  const exerciseCards = currentExercises.map((exercise, index) => {
    return (<ExerciseCard key={index} exercise={exercise} />)
  })

  return (
    <Box id="exercises"
      sx={{ mt: { lg: '100px' } }}
      mt="50px"
      p="20px"
    >
      <Typography
        variant="h3"
        mb="100"
        textAlign='-webkit-center'
      >
        Exercises
      </Typography>
      <Stack direction="row" sx={{ gap: { lg: '107px', xs: '50px' } }} flexWrap="wrap" justifyContent="center">
        {exerciseCards}
      </Stack>
      <Stack sx={{ mt: { lg: '114px', xs: '70px' } }} alignItems="center">
        {exercises.length > 9 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={page}
            onChange={paginate}
            size="large"
          />
        )}
      </Stack>
    </Box>
  )
};

export default Exercises;