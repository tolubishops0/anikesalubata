import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";
import { style } from "../Style";
import { productList } from "../../Asset/data";
import CartContext from "../../Context/Cart/CartContext";

function Category() {
  const navigate = useNavigate();

  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategory = (category) => {
    setSelectedCategory(category);
    navigate(`/products/${category?.toLowerCase().replace(" ", "+")}`);
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
    name: "All",
    value: "all",
  },
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
    value: "men slides",
  },
  {
    name: "Women's Slides",
    value: "woman slides",
  },
];
