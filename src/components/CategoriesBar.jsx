import React, { useState, useEffect } from 'react';
import { Typography, ToggleButton, ToggleButtonGroup } from '@mui/material';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import { exerciseOptions, fetchData } from '../utils/fetchData';

const CategoriesBar = ({ category, setCategory, setExercises }) => {
  const categories = ['all', 'back', 'cardio', 'chest', 'lower arms', 'lower legs', 'neck', 'shoulders', 'upper arms', 'upper legs', 'waist']
  // const [categories, setCategories] = useState(bodyPartsArr);
  const [selected, setSelected] = useState('all')

  const handleSelected = (event, newSelect) => {
    setSelected(newSelect);
  };

  // useEffect(() => {
  //   const fetchCategories = async () => {
  //     const bodyParts = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);
  //     setCategories(['all', ...bodyParts]);
  //   };

  //   fetchCategories();
  // }, []);

  const bodyParts = categories.map((bodyPart, index) => {
    return (
      <ToggleButton
        className="category-btn"
        key={index}
        id={index}
        name={bodyPart}
        value={bodyPart}
        onClick={() => setCategory(bodyPart)}
      >
        <Typography fontSize="24px" fontWeight="bold" color="black" textTransform="uppercase" align="center">{bodyPart}</Typography>
      </ToggleButton>
    )
  });

  return (
    <ScrollMenu >
      <ToggleButtonGroup
        value={selected}
        exclusive
        onChange={handleSelected}
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        {bodyParts}
      </ToggleButtonGroup>
    </ScrollMenu>
  )
};

export default CategoriesBar;