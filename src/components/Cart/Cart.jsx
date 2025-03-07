import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Divider, useMediaQuery } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import CartContext from "../../Context/Cart/CartContext";
import { style } from "../Style";
import { sumItems } from "../../Context/Cart/CartReducer";
import emptycart from "../../Asset/emptycart2.png";
import Alert from "@mui/material/Alert";
import Loader from "../Loader/Loader";

function Cart() {
  const isSmallScreen = useMediaQuery("(max-width: 768px)");
  const [cartAlert, setCartAlert] = useState({ show: false, message: "" });
  const navigate = useNavigate();
  const { cartItems, increase, decrease, removeFromCart, clearCart } =
    useContext(CartContext);
  const [isLoading, setIsLoading] = useState(false);
  const { itemsCount, total } = sumItems(cartItems);

  const userData = JSON.parse(localStorage.getItem("userData"));
  const { userDetails, isUserLoggedIn } = userData || {};

  const goToDetail = (item) => {
    setIsLoading(true);
    setTimeout(() => {
      navigate(`/products/${item.name}/${item.shoeTypeId}`);
      setIsLoading(false);
    }, 1000);
  };

  const getItemCount = (itemCount) => {
    const message = `1 item ${
      itemCount === +1 ? "added to" : "removed from"
    } your cart`;
    setCartAlert({ show: true, message: message });

    setTimeout(() => {
      setCartAlert((prevAlert) => ({ ...prevAlert, show: false }));
    }, 1000);
  };

  return (
    <div>
      <Box
        sx={{
          backgroundColor: "#ACACAC",
        }}>
        {cartAlert.show === true && (
          <Alert
            sx={{
              width: "100%",
              bgcolor: "#ACACAC",
              color: "black",
              position: "fixed",
              top: 0,
              zIndex: 1000,
            }}
            severity="success">
            {cartAlert.message}
          </Alert>
        )}
        {isLoading && <Loader />}
        <Box
          sx={{
            width: "90%",
            margin: "0 auto",
            padding: "2rem 0",
            display: "flex",
            flexDirection: "column",
            gap: ".6rem",
            "@media screen and (max-width: 768px)": {
              gap: "0rem",
            },
          }}>
          <Box
            sx={style.productDetailContainerTop(
              cartItems.length < 1,
              isSmallScreen
            )}>
            {!isSmallScreen ? (
              <Typography sx={style.cartHeader}>
                {cartItems.length > 0
                  ? `Your Cart : ${itemsCount}`
                  : `Your Cart is
                Empty`}
              </Typography>
            ) : (
              <Typography sx={style.cartHeaderSmall}>
                {cartItems.length > 0
                  ? `Your Cart : ${itemsCount}`
                  : ` Your Cart is Empty`}
              </Typography>
            )}
            {!isSmallScreen ? (
              <Typography sx={style.cartHeader}>
                {" "}
                {cartItems.length > 0 && `SUMMARY`}{" "}
              </Typography>
            ) : null}
          </Box>
          {cartItems.length > 0 ? (
            <Box sx={style.cartContainer}>
              <Box sx={style.productDetailContainerLeft}>
                {cartItems.map((item, index) => (
                  <Box key={index} sx={style.cartItem}>
                    <Box sx={style.cart3}>
                      <Box sx={style.cart4}>
                        <Box
                          sx={style.cartimg}
                          onClick={() => goToDetail(item)}>
                          <img
                            src={item.img}
                            alt="productimg"
                            style={{
                              height: "100%",
                              width: "100%",
                              borderRadius: "10px",
                            }}
                          />
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: ".3rem",
                          }}>
                          <Typography sx={style.productName}>
                            {item.name}
                          </Typography>
                          {!isSmallScreen && (
                            <Box
                              sx={{
                                display: "flex",
                                alignItems: "flex-start",
                                flexDirection: "column",
                                justifyContent: "flex-start",
                                gap: ".3rem",
                              }}>
                              <Typography sx={style.subTotal}>
                                Size: {item.size} EU
                              </Typography>
                              <Typography sx={style.subTotal}>
                                {item.price}
                              </Typography>
                            </Box>
                          )}
                          {isSmallScreen && (
                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "stretch",
                              }}>
                              <Typography sx={style.subTotal}>
                                Size: {item.size} EU
                              </Typography>
                              <Typography sx={style.subTotal}>
                                {item.price}
                              </Typography>
                            </Box>
                          )}
                        </Box>
                      </Box>
                    </Box>
                    <Divider
                      sx={{
                        background: "#ACACAC",
                        margin: "1rem 0",
                        "@media screen and (max-width: 768px)": {
                          margin: ".5rem 0",
                        },
                      }}
                    />
                    <Box sx={style.cart10}>
                      <Box
                        sx={style.cart9}
                        onClick={() => removeFromCart(item)}>
                        <DeleteOutlineIcon fontSize="small" />
                        <Typography sx={style.itemDescr}>Remove</Typography>
                      </Box>
                      <Box sx={style.parentAdd}>
                        <Typography
                          sx={
                            item.quantity === 1 && item.quantity !== undefined
                              ? style.disable
                              : style.add
                          }
                          onClick={() => {
                            decrease(item);
                            getItemCount(-1);
                          }}>
                          -
                        </Typography>
                        <Typography sx={style.addCount}>
                          {item.quantity}
                        </Typography>{" "}
                        <Typography
                          sx={style.add}
                          onClick={() => {
                            increase(item);
                            getItemCount(+1);
                          }}>
                          +
                        </Typography>
                      </Box>
                    </Box>
                    {/* {index !== cartItems.length - 1 && (
                      <Divider
                        sx={{ background: "#ACACAC", margin: "0.5rem 0" }}
                      />
                    )} */}
                  </Box>
                ))}
              </Box>
              <Box sx={style.parentRigthContainer}>
                <Box sx={style.rightContainer}>
                  <Typography sx={style.subTotal}>Subtotal: {total}</Typography>
                  <Typography sx={style.subTotal}>
                    Delivery fess not include yet
                  </Typography>
                  <Typography
                    sx={style.checkOut}
                    onClick={() =>
                      navigate(isUserLoggedIn ? "/user-details" : "/signin")
                    }>
                    CHECKOUT
                  </Typography>
                </Box>
                <Box
                  sx={{
                    background: "white",
                    border: "1px solid #f8f8f8",
                    borderRadius: "10px",
                    display: "flex",
                    gap: ".8rem",
                    flexDirection: "column",
                    padding: "1rem",
                    boxShadow: "1px 14px 14px -11px rgba(0,0,0,0.46)",
                  }}>
                  <Typography sx={style.subTotal}>
                    Delivery fess not include yet
                  </Typography>
                  <Typography sx={style.checkOut} onClick={() => clearCart()}>
                    CLEAR CART
                  </Typography>
                </Box>
                <Box
                  sx={{
                    background: "white",
                    border: "1px solid #f8f8f8",
                    borderRadius: "10px",
                    display: "flex",
                    gap: ".8rem",
                    flexDirection: "column",
                    padding: "1rem",
                    boxShadow: "1px 14px 14px -11px rgba(0,0,0,0.46)",
                  }}>
                  <Typography sx={style.subTotal}>Returns are easy</Typography>
                  <Typography sx={style.subTotal}>
                    Free return within 7 days for ALL eligible items
                  </Typography>
                </Box>
              </Box>
            </Box>
          ) : (
            <Box sx={style.emptyCartIcon}>
              <img src={emptycart} alt="empty cart img" />
              <Typography
                sx={style.checkOut}
                onClick={() => navigate("/products/all")}>
                Back to shopping
              </Typography>
            </Box>
          )}
        </Box>
      </Box>
    </div>
  );
}

export default Cart;
