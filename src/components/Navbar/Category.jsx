import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";
import { style } from "../Style";

function Category() {
  const navigate = useNavigate();
  const location = useLocation();

  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategory = (category) => {
    setSelectedCategory(category);
    navigate(`/products/${category?.toLowerCase().replace(" ", "+")}`);
  };

  useEffect(() => {
    if (
      location.pathname === "/cart" ||
      location.pathname === "/signin" ||
      location.pathname === "/signup" ||
      location.pathname === "/reset-password" ||
      location.pathname === "/user-details" ||
      location.pathname === "/payments" ||
      location.pathname === "/success-page"
    ) {
      setSelectedCategory("");
    }
  }, [location.pathname]);

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
