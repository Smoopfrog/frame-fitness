import Category from './Category'
import { Box, Stack } from '@mui/material';
import { useState, useEffect } from 'react';
import { exerciseOptions, fetchData } from '../utils/fetchData';
const axios = require("axios");


const Categories = () => {
  const [categories, setCategories] = useState([]);
  
  useEffect(() => {
    const fetchCategories = async () => {
      
      const bodyParts = fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);
      console.log('bodyParts', bodyParts);
      setCategories('all');
    };

    fetchCategories()
  }, []);
  console.log(categories)
  // categories.map(category => {
  //   console.log(category)
  //   return (
  //     <Category 
  //       key={index}
  //       name={category}
  //     />
  //   )
  // })

  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={2}
    >
      <Category></Category>
      <Category></Category>
      <Category></Category>
    </Stack>
  )
};

export default Categories;