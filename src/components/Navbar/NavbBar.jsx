import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchBar from "./SearchBar";
import { style } from "../Style";

function NavbBar(props) {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [prodCount, setProdCount] = useState(0);
  const toggleModeIcon = () => {
    setIsDarkMode(!isDarkMode);
    props.handleMode(isDarkMode);
  };
  const handleProdCount = () => {
    setProdCount(prodCount + 1);
  };

  return (
    <Box sx={style.navParentContainer}>
      {/* <div onClick={toggleModeIcon}>
        {isDarkMode ? <DarkModeOutlinedIcon /> : <LightModeOutlinedIcon />}
      </div> */}
      <Box sx={style.navContainer}>
        <Typography sx={style.brandName}>Àníkẹ́ Sálúbàtà</Typography>
        <SearchBar />
        <Box sx={style.ShoppingCartOutlinedIcon}>
          <ShoppingCartOutlinedIcon
            fontSize="large"
            onClick={handleProdCount}
          />
          <Typography sx={style.prodCount}>{prodCount}</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default NavbBar;
