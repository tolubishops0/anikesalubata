import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";
import { style } from "../Style";
import { productList } from "../../Asset/data";

function Category() {
  const navigate = useNavigate();

  const { category } = useParams();
  console.log(category, "category");

  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategory = (category) => {
    navigate(`/${category}`);
    setSelectedCategory(category);
  };

  return (
    <div>
      <Box sx={style.categoryContainer}>
        {categoryList.map((item, index) => (
          <Typography
            key={index}
            sx={
              selectedCategory === item.value
                ? style.selectedcategoryList
                : style.categoryList
            }
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
