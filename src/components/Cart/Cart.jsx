import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Divider } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import CartContext from "../../Context/Cart/CartContext";
import { style } from "../Style";
import { sumItems } from "../../Context/Cart/CartReducer";
import emptycart from "../../Asset/emptycart2.png";
import emptycart1 from "../../Asset/eptycart1.png";

function Cart() {
  const navigate = useNavigate();
  const { cartItems, increase, decrease, removeFromCart, clearCart } =
    useContext(CartContext);
  const { itemsCount, total } = sumItems(cartItems);

  const goToDetail = (item) => {
    navigate(`/products/${item.name}/${item.shoeTypeId}`);
  };

  return (
    <div>
      <Box
        sx={{
          backgroundColor: "#f8f8f8",
          padding: "2rem 0",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}>
        <Box sx={style.productDetailContainerTop(cartItems.length < 1)}>
          {cartItems.length > 0 ? (
            <Typography sx={style.cartHeader}>
              Your Cart : {itemsCount}
            </Typography>
          ) : (
            <Typography sx={style.cartHeader}>Your Cart is Empty</Typography>
          )}
          {cartItems.length > 0 && (
            <Typography sx={style.cartHeader}>SUMMARY </Typography>
          )}
        </Box>
        {cartItems.length > 0 ? (
          <Box sx={style.cartContainer}>
            <Box sx={style.productDetailContainerLeft}>
              <Box>
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
                            style={{ height: "100%", width: "100%" }}
                          />
                        </Box>
                        <Box>
                          {/* <Typography>{item.name}</Typography> */}
                          <Typography sx={style.itemDescr}>
                            {item.description}
                          </Typography>
                          <Typography sx={style.itemDescr}>
                            Size: {item.size} EU
                          </Typography>
                        </Box>
                      </Box>
                      <Typography>{item.price}</Typography>
                    </Box>
                    <Box sx={style.cart10}>
                      <Box
                        sx={style.cart9}
                        onClick={() => removeFromCart(item)}>
                        <DeleteOutlineIcon />
                        <Typography>Remove</Typography>
                      </Box>
                      <Box sx={style.parentAdd}>
                        <Typography
                          sx={
                            item.quantity === 1 && item.quantity !== undefined
                              ? style.disable
                              : style.add
                          }
                          onClick={() => decrease(item)}>
                          -
                        </Typography>
                        <Typography sx={style.addCount}>
                          {item.quantity}
                        </Typography>{" "}
                        <Typography
                          sx={style.add}
                          onClick={() => increase(item)}>
                          +
                        </Typography>{" "}
                      </Box>
                    </Box>
                    <Divider />
                  </Box>
                ))}
              </Box>
            </Box>
            <Box
              sx={{
                width: "20%",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}>
              <Box
                sx={{
                  background: "white",
                  border: "1px solid #f8f8f8",
                  borderRadius: "10px",
                  display: "flex",
                  gap: ".8rem",
                  flexDirection: "column",
                  padding: "1rem",
                }}>
                <Typography sx={style.subTotal}>Subtotal: {total}</Typography>
                <Typography sx={style.subTotal}>
                  Delivery fess not include yet
                </Typography>
                <Typography
                  sx={style.checkOut}
                  onClick={() => navigate("/login")}>
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
                }}>
                <Typography sx={style.subTotal}>Returns are easy</Typography>
                <Typography sx={style.subTotal}>
                  Free return within 7 days for ALL eligible items
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
                }}>
                <Typography sx={style.subTotal}>
                  Delivery fess not include yet
                </Typography>
                <Typography sx={style.checkOut} onClick={() => clearCart()}>
                  CLEAR CART
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
    </div>
  );
}

export default Cart;

