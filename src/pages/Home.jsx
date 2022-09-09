import { Box } from '@mui/system'
import { HeroBanner } from '../components/HeroBanner'
import React, { useState } from 'react'
import CategoriesBar from '../components/CategoriesBar'
import Exercises from '../components/Exercises'
import SearchBar from '../components/SearchBar'


const Home = ({ user }) => {
  const [category, setCategory] = useState('all')
  const [exercises, setExercises] = useState([])

  return (
    <Box>
      <HeroBanner />
      <SearchBar setExercises={setExercises} />
      <CategoriesBar category={category} setCategory={setCategory} setExercises={setExercises} />
      {/* <div style={{ height: "400px" }}></div> */}
      <Exercises category={category} exercises={exercises} setExercises={setExercises} user={user} />
    </Box>
  )
}

export default Home