import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchBar from "./SearchBar";
import { style } from "../Style";

function NavbBar() {
  const navigate = useNavigate();
  const [prodCount, setProdCount] = useState(0);

  const handleProdCount = () => {
    setProdCount(prodCount + 1);
  };

  return (
    <Box sx={style.navParentContainer}>
      <Box sx={style.navContainer}>
        <Typography sx={style.brandName} onClick={() => navigate("/")}>
          Àníkẹ́ Sálúbàtà
        </Typography>
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
