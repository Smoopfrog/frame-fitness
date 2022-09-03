import { Box, Stack, Typography, Button } from "@mui/material";

const ExerciseCard = ({exercise}) => {
  console.log('exercise', exercise)
  return ( 
    <Box>
      <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
    <Stack direction="row">
      <Button sx={{ ml: '21px', color: '#fff', background: '#FFA9A9', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}>
        {exercise.bodyPart}
      </Button>
      <Button sx={{ ml: '21px', color: '#fff', background: '#FCC757', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}>
        {exercise.equipment}
      </Button>
      <Button sx={{ ml: '100px', color: '#fff', background: 'green', fontSize: '24px', borderRadius: '20px', textTransform: 'capitalize' }}>
        +
      </Button>
    </Stack>
    <Typography ml="21px" color="#000" fontWeight="bold" sx={{ fontSize: { lg: '24px', xs: '20px' } }} mt="11px" pb="10px" textTransform="capitalize">
      {exercise.name}
    </Typography>
    </Box>

  )
}

export default ExerciseCard;
