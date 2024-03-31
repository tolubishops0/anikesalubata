import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, useMediaQuery } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchBar from "./SearchBar";
import { style } from "../Style";
import CartContext from "../../Context/Cart/CartContext";
import { sumItems } from "../../Context/Cart/CartReducer";
import { productList } from "../../Asset/data";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Auth/FireBase/config";

function NavbBar() {
  const isSmallScreen = useMediaQuery("(min-width: 768px)");

  const navigate = useNavigate();
  const [userName, setUserName] = useState();

  const { cartItems } = useContext(CartContext);
  const { itemsCount } = sumItems(cartItems);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserName(user.displayName);
        console.log("welome", user.displayName);
      } else {
        setUserName("");
        console.log("No user found");
      }
    });
  }, []);

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
