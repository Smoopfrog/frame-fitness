import { Box } from '@mui/system'
import { HeroBanner } from '../components/HeroBanner'
import React, {useState} from 'react'
import CategoriesBar from '../components/CategoriesBar'
import Exercises from '../components/Exercises'

const Home = () => {
  const [category, setCategory] = useState('all')
  const [exercises, setExercises] = useState([])

  return (
    <Box>
      <HeroBanner />
      <CategoriesBar category={category} setCategory={setCategory} setExercises={setExercises}/>
      <Exercises category={category} exercises={exercises} setExercises={setExercises}/>
    </Box>
  )
}

export default Home