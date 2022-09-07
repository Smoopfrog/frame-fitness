import React, { useState } from "react";
import { TextField, Box, Button, Typography } from "@mui/material";
import { fetchData, exerciseOptions } from "../utils/fetchData";
import '../styles/App.scss';

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
    <Box className="search-bar" >
      <Typography sx={{color: '#FF9700', fontFamily: 'Calibre', fontSize: '40px', lineHeight: 'normal', mb: '10px', color: '#00A5B8'}}>
        Explore a Catalogue of 1300+ Exercises
      </Typography>
      <TextField
        height="76px"
        sx={{ input: { fontWeight: '700', border: 'none', borderRadius: '4px' }, width: { lg: '500px', xs: '300px' }, backgroundColor: '#fff', borderRadius: '40px' }}
        value={search}
        onChange={(e) => setSearch(e.target.value.toLowerCase())}
        placeholder="Search Exercises"
        type="text"
        onKeyDown={handleKeyDown}
      >
      </TextField>
      <Button className="search-btn"
        onClick={searchFunction}
        sx={{'&:hover': {backgroundColor: '#fff', color: '#FF9700', border: '2px solid #FF9700', padding: '14px 6px'
        }}}
      >
        Search
      </Button>
    </Box>
  )
};

export default SearchBar;