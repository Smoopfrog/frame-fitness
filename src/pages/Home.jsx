import { Box } from '@mui/system'
import { HeroBanner } from '../components/HeroBanner'
import React, { useState } from 'react'
import CategoriesBar from '../components/CategoriesBar'
import Exercises from '../components/Exercises'
import SearchBar from '../components/SearchBar'


const Home = ({ user, workout, setWorkout}) => {
  const [category, setCategory] = useState('all')
  const [exercises, setExercises] = useState([])
  const [page, setPage] = useState(1);

  return (
    <Box>
      <HeroBanner />
      <SearchBar setExercises={setExercises} page={page} setPage={setPage}/>
      <CategoriesBar category={category} setCategory={setCategory} setExercises={setExercises} page={page} setPage={setPage} />
      <Exercises page={page} setPage={setPage} category={category} exercises={exercises} setExercises={setExercises} user={user} workout={workout} setWorkout={setWorkout} />
    </Box>
  )
}

export default Home;