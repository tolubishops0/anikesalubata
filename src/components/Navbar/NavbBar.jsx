import React, { useState, useContext, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Box, Typography, useMediaQuery } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchBar from "./SearchBar";
import { style } from "../Style";
import CartContext from "../../Context/Cart/CartContext";
import { sumItems } from "../../Context/Cart/CartReducer";
import { productList } from "../../Asset/data";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Auth/FireBase/config";

function NavbBar() {
  const isSmallScreen = useMediaQuery("(max-width: 768px)");

  const navigate = useNavigate();
  const [user, setUser] = useState();

  const { cartItems, setAuthState, authState } = useContext(CartContext);
  const { itemsCount } = sumItems(cartItems);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const userDetails = {
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
          uid: user.uid,
        };
        setUser(authState?.userDetails);
        setAuthState(userDetails);
      } else {
        setUser("");
      }
    });
    // }
  }, []);


  return (
    <Box sx={style.navParentContainer}>
      {!isSmallScreen ? (
        <Box sx={style.navContainer}>
          <Typography sx={style.brandName} onClick={() => navigate("/")}>
            Àníkẹ́ Sálúbàtà
          </Typography>
          <SearchBar productList={productList} />
          <Box sx={{ display: "flex", gap: "2rem", alignItems: "center" }}>
            <Box sx={style.ShoppingCartOutlinedIcon}>
              <ShoppingCartOutlinedIcon
                fontSize="large"
                onClick={() => navigate("/cart")}
              />
              {cartItems?.length > 0 && (
                <Typography sx={style.prodCount}>{itemsCount}</Typography>
              )}
            </Box>
            {user?.uid && (
              <Box sx={{ display: "flex", gap: "1rem" }}>
                <Typography>Hi, {user?.name}</Typography>
                {user.photo ? (
                  <img src={user?.photoURL} />
                ) : (
                  <AccountCircleIcon />
                )}
              </Box>
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
