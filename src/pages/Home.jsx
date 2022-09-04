import { Box } from '@mui/system'
import React from 'react'

import CategoriesBar from '../components/CategoriesBar'
import { HeroBanner } from '../components/HeroBanner'

const Home = () => {
  return (
    <Box>
      <HeroBanner />
      <CategoriesBar />
    </Box>
  )
}

export default Home