import React, { useState, useContext, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Box,
  Typography,
  useMediaQuery,
  Menu,
  MenuItem,
  Avatar,
} from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
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
  const [showMenu, setShowMenu] = useState(null);

  const { cartItems, setAuthState, authState } = useContext(CartContext);
  const { itemsCount } = sumItems(cartItems);

  const { userDetails } = authState || {};

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
        const storedCartItems = JSON.parse(localStorage.getItem(`cartItems`));
        const totalCost = JSON.parse(localStorage.getItem(`total`));
        const userDetails = {
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
          uid: user.uid,
        };
        setAuthState(userDetails, storedCartItems);
        setUser(authState);
      } else {
        setUser("");
        setAuthState();
      }
    });
  }, []);

  const menuItems = user
    ? [
        {
          content: "Sign Out",
          onClick: () => {
            navigate("/signout ");
            handleClose();
          },
        },
        {
          content: "Liked Items",
          onClick: () => {
            navigate("/signout ");
            handleClose();
          },
        },
      ]
    : [
        {
          content: "Sign In",
          onClick: () => {
            navigate("/signin ");
            handleClose();
          },
        },
        {
          content: "Liked Items",
          onClick: () => {
            navigate("/signin ");
            handleClose();
          },
        },
      ];

  const handleMenuClick = (event) => {
    setShowMenu(showMenu ? null : event.currentTarget);
  };

  const handleClose = () => {
    setShowMenu(null);
  };

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

            <Menu
              PaperProps={{
                style: {
                  boxShadow: 0,
                  padding: "0 1rem",
                },
              }}
              anchorEl={showMenu}
              open={Boolean(showMenu)}
              onClose={handleClose}>
              {menuItems.map((item, index) => (
                <MenuItem onClick={item.onClick} key={index}>
                  {item.content}
                </MenuItem>
              ))}
            </Menu>

            <Box
              onClick={handleMenuClick}
              sx={{ display: "flex", gap: ".5rem", alignItems: "center" }}>
              {userDetails?.photo ? (
                <img src={userDetails?.photoURL} />
              ) : (
                <AccountCircleIcon />
              )}
              {userDetails?.uid ? (
                <Typography sx={style.UserName}>
                  Hi, {userDetails?.name}
                </Typography>
              ) : (
                <Typography sx={style.UserName}>Account</Typography>
              )}
              {showMenu ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </Box>
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
