import React, { useState } from "react";
import { TextField, Box, Button, Typography } from "@mui/material";
import { fetchData, exerciseOptions } from "../utils/fetchData";

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
    <Box className="search-bar">
      <Typography>
        Find some new exercises
      </Typography>
      <TextField
        height="76px"
        sx={{ input: { fontWeight: '700', border: 'none', borderRadius: '4px' }, width: { lg: '1170px', xs: '350px' }, backgroundColor: '#fff', borderRadius: '40px' }}
        value={search}
        onChange={(e) => setSearch(e.target.value.toLowerCase())}
        placeholder="Search Exercises"
        type="text"
        onKeyDown={handleKeyDown}
      >
      </TextField>
      <Button className="search-btn"
        onClick={searchFunction}
      >
        Search
      </Button>
    </Box>
  )
};

export default SearchBar;