import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";
import { style } from "../Style";

function Category() {
  const navigate = useNavigate();
  const handleCategory = (value) => {
    navigate(`/${value}`);
    console.log(value);
  };
  return (
    <div>
      <Box sx={style.categoryContainer}>
        {categoryList.map((item, index) => (
          <Typography
            key={index}
            sx={style.categoryList}
            onClick={() => handleCategory(item.value)}>
            {item.name}
          </Typography>
        ))}
      </Box>
    </div>
  );
}

export default Category;

const categoryList = [
  {
    name: "Loafers",
    value: "loafers",
  },
  {
    name: "Boots",
    value: "boots",
  },
  {
    name: "Corporate",
    value: "corporate",
  },
  {
    name: "Men's Slides",
    value: "menslides",
  },
  {
    name: "Women's Slides",
    value: "womenslides",
  },
  {
    name: "Belts",
    value: "belts",
  },
];
