import { Box, Stack, Typography, Button } from "@mui/material";
import React from "react";
import AddIcon from '@mui/icons-material/Add';

const ExerciseCard = ({exercise}) => {
  return ( 
    <Box className="exercise-card"
    sx={{'&:hover': {boxShadow: '0 0 3px 5px #FF9700'}}}
    >
      <Typography className="exercise-card-name" sx={{ fontSize: { lg: '24px', xs: '20px' } }} >
        {exercise.name}
      </Typography>
      <img margin="inherit" src={exercise.gifUrl} alt={exercise.name} loading="lazy" 
      />
      <Stack direction="row">
        <Button className="exercise-card-btn" variant="text">
          {exercise.bodyPart}
        </Button>
        <Button className="exercise-card-btn">
          {exercise.equipment}
        </Button>
        <Button className="exercise-card-add-btn">
          <AddIcon fontSize="large"/>
        </Button>
      </Stack>
    </Box>

  )
}

export default ExerciseCard;
