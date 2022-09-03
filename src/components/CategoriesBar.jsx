import Category from './Category'
import React from 'react';
import { Stack } from '@mui/material';
import { useState, useEffect, useContext } from 'react';
import { exerciseOptions, fetchData } from '../utils/fetchData';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';

const CategoriesBar = () => {
  const [categories, setCategories] = useState([]);
  
  useEffect(() => {
    const fetchCategories = async () => {
      const bodyParts = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);
      setCategories(bodyParts);
    };

    fetchCategories();
  }, []);


  const bodyPart = categories.map((category, index) => {
    return (
      <Category 
        key={index}
        id={index}
        name={category}
      />
    )
  });

  return (
    <ScrollMenu >
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        {bodyPart}
      </Stack>
    </ScrollMenu>
  )
};

export default CategoriesBar;