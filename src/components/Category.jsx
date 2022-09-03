import { Box, Typography } from "@mui/material";
import React from "react";
const Category = (props) => {

  return (
    <Box className="category">
      <Typography fontSize="24px" fontWeight="bold" color="black" textTransform="capitalize" align="center">{props.name}</Typography>
      <img src="https://icon-library.com/images/bicep-icon/bicep-icon-16.jpg" alt="icon"/>
    </Box>
  )
};

export default Category;

