import React, { useState, useContext, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Box,
  Typography,
  useMediaQuery,
  Menu,
  MenuItem,
  InputAdornment,
  OutlinedInput,
  TextField,
} from "@mui/material";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import PersonOffIcon from "@mui/icons-material/PersonOff";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SearchBar from "./SearchBar";
import { style } from "../Style";
import CartContext from "../../Context/Cart/CartContext";
import { sumItems } from "../../Context/Cart/CartReducer";
import { productList } from "../../Asset/data";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../Auth/FireBase/config";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../Loader/Loader";

function NavbBar() {
  const isSmallScreen = useMediaQuery("(max-width: 1000px)");
  const isSmallScreensm = useMediaQuery("(max-width: 600px)");

  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { cartItems } = useContext(CartContext);
  const { itemsCount } = sumItems(cartItems);

  const userData = JSON.parse(localStorage.getItem("userData")) || {};
  console.log(userData, "from nav");

  const signOutWithGoogle = () => {
    console.log("sgnout");
    signOut(auth)
      .then(() => {
        setIsLoading(false);
        toast.success("logged out Succesfull");
        navigate("/");
        const userData = null;
        localStorage.removeItem("userData");
      })
      .catch((error) => {
        setIsLoading(false);
        toast.error(error.message);
      });
  };

  const menuItems = userData?.isUserLoggedIn
    ? [
        {
          content: "Sign Out",
          onClick: () => {
            signOutWithGoogle();
            handleClose();
          },
        },
        {
          content: "Liked Items",
          onClick: () => {
            // navigate("/ ");
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
          content: "Sign Up",
          onClick: () => {
            navigate("/signup ");
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
    <>
      {!isLoading ? (
        <Box sx={style.navParentContainer}>
          <Box sx={style.navContainer}>
            <Typography sx={style.brandName} onClick={() => navigate("/")}>
              Àníkẹ́ Sálúbàtà
            </Typography>
            {!isSmallScreen && <SearchBar productList={productList} />}
            <Box sx={style.rightNav}>
              {!isSmallScreensm ? (
                <Box sx={style.ShoppingCartOutlinedIcon}>
                  <ShoppingCartOutlinedIcon
                    fontSize="large"
                    onClick={() => navigate("/cart")}
                  />
                  {cartItems?.length > 0 && (
                    <Typography sx={style.prodCount}>{itemsCount}</Typography>
                  )}
                </Box>
              ) : (
                <Box sx={style.ShoppingCartOutlinedIcon}>
                  <ShoppingCartOutlinedIcon
                    fontSize="small"
                    onClick={() => navigate("/cart")}
                  />
                  {cartItems?.length > 0 && (
                    <Typography sx={style.prodCount}>{itemsCount}</Typography>
                  )}
                </Box>
              )}

              <Menu
                PaperProps={{
                  style: {
                    margin: "0",
                  },
                }}
                anchorEl={showMenu}
                open={Boolean(showMenu)}
                onClose={handleClose}>
                {menuItems.map((item, index) => (
                  <MenuItem
                    sx={{
                      ...style.categoryList,
                      padding: "0.5rem 2rem",
                      background: index === 0 ? "#ACACAC" : "none",
                    }}
                    onClick={item.onClick}
                    key={index}>
                    {item.content}
                  </MenuItem>
                ))}
              </Menu>

              <Box
                onClick={handleMenuClick}
                sx={{
                  display: "flex",
                  gap: ".5rem",
                  alignItems: "flex-end",
                }}>
                {!isSmallScreensm ? (
                  <>
                    {" "}
                    {userData?.isUserLoggedIn ? (
                      <PersonIcon fontSize="large" />
                    ) : (
                      <PersonOffIcon fontSize="large" />
                    )}
                  </>
                ) : (
                  <>
                    {" "}
                    {userData?.isUserLoggedIn ? (
                      <PersonIcon fontSize="small" />
                    ) : (
                      <PersonOffIcon fontSize="small" />
                    )}
                  </>
                )}

                {userData?.uid ? (
                  <Typography sx={style.UserName}>
                    Hi, {userData?.name}
                  </Typography>
                ) : (
                  <Typography sx={style.UserName}>Account</Typography>
                )}
                {!isSmallScreensm ? (
                  showMenu ? (
                    <ExpandLessIcon />
                  ) : (
                    <ExpandMoreIcon />
                  )
                ) : showMenu ? (
                  <ExpandLessIcon fontSize="small" />
                ) : (
                  <ExpandMoreIcon fontSize="small" />
                )}
              </Box>
            </Box>
          </Box>
          {isSmallScreen && (
            <Box sx={style.navContainersmsearch}>
              <SearchBar productList={productList} />
            </Box>
          )}
        </Box>
      ) : (
        <Loader />
      )}
    </>
  );
}

export default NavbBar;
