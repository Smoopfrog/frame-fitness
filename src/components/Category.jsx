import { Box, Typography } from "@mui/material";

const Category = (props) => {

  return (
    <Box className="category">
      <img src="https://icon-library.com/images/bicep-icon/bicep-icon-16.jpg"/>
      <h1>{props.name}</h1>
      <Typography fontSize="24px" fontWeight="bold" color="black" textTransform="capitalize" align="center">{props.name}</Typography>
    </Box>
  )
};

export default Category;

