import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchBar from "./SearchBar";
import { style } from "../Style";
import CartContext from "../../Context/Cart/CartContext";

function NavbBar() {
  const navigate = useNavigate();

const { cartItems } = useContext(CartContext);

  const handleProdCount = () => {
    // setProdCount(prodCount + 1);
    navigate("/cart");
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
          {cartItems.length > 0 && (
            <Typography sx={style.prodCount}>{cartItems.length}</Typography>
          )}
        </Box>
      </Box>
    </Box>
  );
}

export default NavbBar;
