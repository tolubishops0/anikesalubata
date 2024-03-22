import React, { useContext } from "react";
import { Box, Typography, Divider } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import CartContext from "../../Context/Cart/CartContext";
import { style } from "../Style";
import { sumItems } from "../../Context/Cart/CartReducer";

function Cart() {
  const { cartItems, increase, decrease, removeFromCart } =
    useContext(CartContext);
  // console.log(cartItems, "from cart");
  const { itemsCount, total } = sumItems(cartItems);

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
        <Box sx={style.productDetailContainerTop}>
          <Typography>Your Cart : {itemsCount}</Typography>
          <Typography>SUMMARY </Typography>
        </Box>
        <Box sx={style.cartContainer}>
          <Box sx={style.productDetailContainerLeft}>
            <Box>
              {cartItems.map((item, index) => (
                <Box key={index}>
                  <Box sx={style.cart3}>
                    <Box sx={style.cart4}>
                      <Box sx={style.cartimg}>
                        <img
                          src={item.img}
                          alt="productimg"
                          style={{ height: "100%", width: "100%" }}
                        />
                      </Box>
                      <Box>
                        <Typography>{item.name}</Typography>
                        <Typography>{item.description}</Typography>
                        <Typography>Size: {item.size} EU</Typography>
                      </Box>
                    </Box>
                    <Typography>{item.price}</Typography>
                  </Box>
                  <Box sx={style.cart10}>
                    <Box sx={style.cart9} onClick={() => removeFromCart(item)}>
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
                      <Typography sx={style.add} onClick={() => increase(item)}>
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
              }}>
              <Typography>Subtotal: {total}</Typography>
              <Typography>Delivery fess not include yet</Typography>
              <Typography>CHECKOUT</Typography>
            </Box>
            <Box
              sx={{
                background: "white",
                border: "1px solid #f8f8f8",
                borderRadius: "10px",
              }}>
              <Typography>Returns are easy</Typography>
              <Typography>
                Free return within 7 days for ALL eligible items
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default Cart;
