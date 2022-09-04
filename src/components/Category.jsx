import { Box, Typography } from "@mui/material";

const Category = ({setCategory, name, id}) => {

  return (
    <Box className="category" onClick={() => setCategory(name)}>
      <img src="https://icon-library.com/images/bicep-icon/bicep-icon-16.jpg"/>
      <h1>{name}</h1>
      <Typography fontSize="24px" fontWeight="bold" color="black" textTransform="capitalize" align="center">{name}</Typography>
    </Box>
  )
};

export default Category;

