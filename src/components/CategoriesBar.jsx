import React, { useState, useEffect, useContext } from 'react';
import { Typography, ToggleButton, ToggleButtonGroup } from '@mui/material';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { exerciseOptions, fetchData } from '../utils/fetchData';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import '../styles/App.scss';
import { borderBottom } from '@mui/system';

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className="left-arrow">
      <ArrowBackIcon fontSize="large" />
    </Typography>
  );
};
  const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext);
  
    return (
      <Typography onClick={() => scrollNext()} className="right-arrow">
        <ArrowForwardIcon fontSize="large" />
      </Typography>
    );
  };

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
        sx={{background:'rgba(0, 0, 0, 0.4)', '&:hover': { background:'rgba(0, 0, 0, 0.4)'}}}
        onClick={() => setCategory(bodyPart)}
      >
        <Typography fontSize="24px" fontWeight="bold" color="#FFF" textTransform="uppercase" align="center">{bodyPart}</Typography>
      </ToggleButton>
    )
  });

  return (
    <ScrollMenu 
      LeftArrow={LeftArrow} 
      RightArrow={RightArrow}
      value={selected}
      exclusive
      onChange={handleSelected}
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={2}
    >
      {bodyParts}
      
    </ScrollMenu>
  )
};

export default CategoriesBar;