import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, useMediaQuery } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchBar from "./SearchBar";
import { style } from "../Style";
import CartContext from "../../Context/Cart/CartContext";
import { sumItems } from "../../Context/Cart/CartReducer";
import { productList } from "../../Asset/data";

function NavbBar() {
  const isSmallScreen = useMediaQuery("(min-width: 768px)");

  const navigate = useNavigate();

  const { cartItems } = useContext(CartContext);
  const { itemsCount } = sumItems(cartItems);

  return (
    <Box sx={style.navParentContainer}>
      {isSmallScreen ? (
        <Box sx={style.navContainer}>
          <Typography sx={style.brandName} onClick={() => navigate("/")}>
            Àníkẹ́ Sálúbàtà
          </Typography>
          <SearchBar productList={productList} />
          <Box sx={style.ShoppingCartOutlinedIcon}>
            <ShoppingCartOutlinedIcon
              fontSize="large"
              onClick={() => navigate("/cart")}
            />
            {cartItems?.length > 0 && (
              <Typography sx={style.prodCount}>{itemsCount}</Typography>
            )}
          </Box>
        </Box>
      ) : (
        <Box sx={style.parentsmallNavbar}>
          <Box sx={style.smallNavbar}>
            <Typography sx={style.brandName} onClick={() => navigate("/")}>
              Àníkẹ́ Sálúbàtà
            </Typography>
            <Box
              sx={style.ShoppingCartOutlinedIcon}
              onClick={() => navigate("/cart")}>
              <ShoppingCartOutlinedIcon
                fontSize="large"
                onClick={() => navigate("/cart")}
              />
              {cartItems?.length > 0 && (
                <Typography sx={style.prodCount}>{itemsCount}</Typography>
              )}
            </Box>
          </Box>
          <Box sx={{ width: "100%", margin: "1rem auto" }}>
            <SearchBar productList={productList} />
          </Box>
        </Box>
      )}
    </Box>
  );
}

export default NavbBar;
