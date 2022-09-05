import { Box, Typography } from "@mui/material";
import React from "react";

const Category = ({setCategory, name, id}) => {
  return (
    <Box className="category" onClick={() => setCategory(name)}>
      <img src="https://icon-library.com/images/bicep-icon/bicep-icon-16.jpg"/>
      <Typography fontSize="24px" fontWeight="bold" color="black" textTransform="uppercase" align="center">{name}</Typography>
    </Box>
  )
};

export default Category;

