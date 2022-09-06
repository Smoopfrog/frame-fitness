import { Box, Stack, Typography, Button } from "@mui/material";
import React from "react";

const ExerciseCard = ({exercise}) => {
  return ( 
    <Box sx={{border: "4px solid #E5661F", borderRadius: "20px", backgroundColor: '#E5661F'}}>
      <Typography textAlign="center" color="white" fontWeight="bold" sx={{ fontSize: { lg: '24px', xs: '20px' } }} mt="11px" pb="10px" textTransform="capitalize">
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
