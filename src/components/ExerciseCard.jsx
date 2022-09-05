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
        <Button sx={{ ml: '21px', color: 'black', background: 'white', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize', fontWeight: "bold" }}>
          {exercise.bodyPart}
        </Button>
        <Button sx={{ ml: '21px', color: 'black', background: 'white', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize', fontWeight: "bold"}}>
          {exercise.equipment}
        </Button>
        <Button sx={{ ml: 'auto', color: '#fff', background: 'green', fontSize: '24px', borderRadius: '20px', textTransform: 'capitalize', fontWeight: "bold" }}>
          +
        </Button>
      </Stack>
    </Box>

  )
}

export default ExerciseCard;
