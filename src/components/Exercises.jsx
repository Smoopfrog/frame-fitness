import React, { useState, useEffect } from "react";
import { Pagination, Stack, Typography } from "@mui/material";
import { exerciseOptions, fetchData } from "../utils/fetchData";
import { Box } from "@mui/system";
import ExerciseCard from './ExerciseCard';

const Exercises = ({ exercises, setExercises, category }) => {
  // const [currentPage, setCurrentPage] = useState(1);
  // const [exercisesPerPage] = useState(6);

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

  const showExercises = exercises.slice(0, 9)

  const map1 = showExercises.map((exercise, index) => {
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
        mb="40"
      >
        Exercises
      </Typography>
      <Stack direction="row" sx={{ gap: { lg: '107px', xs: '50px' } }} flexWrap="wrap" justifyContent="center">
        {map1}
      </Stack>
    </Box>
  )
};

export default Exercises;