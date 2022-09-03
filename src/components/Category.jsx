import { Box } from "@mui/material";

const Category = (props) => {

  return (
    <Box className="category">
      <h1>{props.name}</h1>
      <img src="https://icon-library.com/images/bicep-icon/bicep-icon-16.jpg"/>
    </Box>
  )
};

export default Category;

