import React, { useState, useContext } from 'react';
import { Typography, ToggleButton } from '@mui/material';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import '../styles/App.scss';
import Chest from '../assets/chest.gif';
import All from '../assets/workout.gif';
import Cardio from '../assets/cardio.gif';
import Back from '../assets/back.gif';
import Shoulders from '../assets/shoulders.gif';
import LowerArms from '../assets/lowerarms.gif';
import UpperArms from '../assets/upperarms.gif';
import UpperLegs from '../assets/upperlegs.gif';
import LowerLegs from '../assets/lowerlegs.gif';
import Neck from '../assets/neck.gif';
import Waist from '../assets/waist.gif';

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

const CategoriesBar = ({ page, setPage, category, setCategory, setExercises }) => {
  const categories = ['all', 'cardio', 'chest', 'back', 'upper arms', 'shoulders', 'upper legs', 'lower arms','waist', 'lower legs', 'neck']
  const [selected, setSelected] = useState('all')

  const handleSelected = (event, newSelect) => {
    setSelected(newSelect);
  };

  const bodyParts = categories.map((bodyPart, index) => {
    return (
      <ToggleButton
        className="category-btn"
        key={index}
        id={index}
        name={bodyPart}
        value={bodyPart}
        sx={{
          background: 
            bodyPart === 'chest' ? `url(${Chest})` : bodyPart === 'all' ? `url(${All})` : 
            bodyPart === 'cardio' ? `url(${Cardio})` :
            bodyPart === 'back' ? `url(${Back})` :
            bodyPart === 'lower arms' ? `url(${LowerArms})` :
            bodyPart === 'lower legs' ? `url(${LowerLegs})` :
            bodyPart === 'neck' ? `url(${Neck})` :
            bodyPart === 'shoulders' ? `url(${Shoulders})` :
            bodyPart === 'upper arms' ? `url(${UpperArms})` :
            bodyPart === 'upper legs' ? `url(${UpperLegs})` :
            bodyPart === 'waist' ? `url(${Waist})` 
            : ''
        }}

        onClick={() => {
            setCategory(bodyPart);
            setPage(1);
          }
        }
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