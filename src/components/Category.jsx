import { Box, Typography } from "@mui/material";

const Category = (props) => {

  return (
    <Box className="category">
      <Typography fontSize="24px" fontWeight="bold" color="black" textTransform="capitalize" align="center">{props.name}</Typography>
      <img src="https://icon-library.com/images/bicep-icon/bicep-icon-16.jpg"/>
    </Box>
  )
};

export default Category;

