import { Box, Stack, Typography, Button } from "@mui/material";
import React from "react";

const ExerciseCard = ({exercise}) => {
  return ( 
    <Box className="exercise-card">
      <Typography className="exercise-card-name" sx={{ fontSize: { lg: '24px', xs: '20px' } }} >
        {exercise.name}
      </Typography>
      <img margin="inherit" src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
      <Stack direction="row">
        <Button className="exercise-card-btn">
          {exercise.bodyPart}
        </Button>
        <Button className="exercise-card-btn">
          {exercise.equipment}
        </Button>
        <Button className="exercise-card-add-btn">
          +
        </Button>
      </Stack>
    </Box>

  )
}

export default ExerciseCard;
