import React, { useState } from "react";
import { TextField, Box, Button, Typography } from "@mui/material";
import { fetchData, exerciseOptions } from "../utils/fetchData";
import '../styles/App.scss';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';

const SearchBar = ({ setExercises }) => {
  const [search, setSearch] = useState('');

  const searchFunction = async () => {
    if (search) {
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);

      const searchedExercises = exercisesData.filter(
        (item) => item.name.toLowerCase().includes(search)
          || item.target.toLowerCase().includes(search)
          || item.equipment.toLowerCase().includes(search)
          || item.bodyPart.toLowerCase().includes(search),
      );

      setSearch('');
      setExercises(searchedExercises);
    }
  };

  const handleKeyDown = event => {
    if (event.key === 'Enter') {
      searchFunction();
    }
  };

  return (
    <Box className="search-bar" id="exercises" >
      <Typography sx={{color: '#FF9700', fontFamily: 'Calibre', fontSize: {lg: '45px', md: '35px', xs: '25px'}, lineHeight: 'normal', mb: '25px', color: '#00A5B8'}}>
        Explore a Catalogue of 1300+ Exercises
      </Typography>
      <TextField
        
        sx={{ input: { fontWeight: '700', border: 'none', borderRadius: '4px', height: {md: '1.5em', xs: '1em'}, fontSize: {md: '20px', xs: '16px'} }, width: { lg: '500px', md: '400px', xs: '300px' }, backgroundColor: '#fff', borderRadius: '40px' }}
        value={search}
        onChange={(e) => setSearch(e.target.value.toLowerCase())}
        placeholder="Search Exercises"
        type="text"
        onKeyDown={handleKeyDown}
      >
      </TextField>
      <Button className="search-btn"
        endIcon={<FitnessCenterIcon />}
        onClick={searchFunction}
        sx={{height: {md: '63px', xs: '49px'},'&:hover': {backgroundColor: '#fff', color: '#FF9700', border: '2px solid #FF9700', padding: '14px 8px'
        }}}
      >
        Search</Button>
    </Box>
  )
};

export default SearchBar;