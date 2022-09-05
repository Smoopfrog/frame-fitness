import React, { useEffect, useState } from "react";
import { TextField, Box, Button } from "@mui/material";
import { fetchData, exerciseOptions } from "../utils/fetchData";

const SearchBar = ({ exercises, setExercises }) => {
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
    <Box>
      <TextField
        value={search}
        onChange={(e) => setSearch(e.target.value.toLowerCase())}
        placeholder="Search Exercises"
        type="text"
        onKeyDown={handleKeyDown}
      >
      </TextField>
      <Button
        onClick={searchFunction}
      >
        Search
      </Button>
    </Box>
  )
};

export default SearchBar;