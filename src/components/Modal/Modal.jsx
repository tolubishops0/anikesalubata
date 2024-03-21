import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import CartContext from "../../Context/Cart/CartContext";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  DialogContentText,
  Slide,
  Typography,
  Box,
} from "@mui/material";
import { style } from "../Style";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function Modal(props) {
  const navigate = useNavigate();
  const { increase, decrease, itemCount, removeFromCart, addToCart } =
    useContext(CartContext);

  const [counts, setCounts] = useState([]);

  const increaseItem = (size) => {
    const updatedCounts = {
      ...counts,
      [size]: (counts[size] || 0) + 1,
    };
    setCounts(updatedCounts);
    getItemDetails(updatedCounts);
  };

  const decreaseItem = (size) => {
    const updatedCounts = {
      ...counts,
      [size]: (counts[size] || 0) - 1,
    };
    setCounts(updatedCounts);
    getItemDetails(updatedCounts);
  };

  const getItemDetails = (size) => {
    const itemDetails = {
      img: props?.selectedProduct.img,
      name: props?.selectedProduct.name,
      price: props?.selectedProduct.price,
      id: props?.selectedProduct.id,
      size: size,
    };
    addToCart(itemDetails);
    return itemDetails;
  };

  const constinueShopping = () => {
    props.handleModal();
  };
  const goToCart = () => {
    navigate("/cart");
    props.handleModal();
  };

  return (
    <React.Fragment>
      <Dialog
        sx={style.parentModalWidth}
        open={props.openModal}
        TransitionComponent={Transition}
        keepMounted
        onClose={props.handleModal}
        aria-describedby="alert-dialog-slide-description">
        <DialogTitle>{"Select sizes and quantity"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <Box sx={style.parentContainer}>
              {props.selectedProduct.sizes.map((size, index) => (
                <Box key={index} sx={style.parentSizes}>
                  <Typography> Size {size}:</Typography>
                  <Box sx={style.parentAdd}>
                    <Typography
                      sx={
                        counts[size] !== undefined && counts[size] !== 0
                          ? style.add
                          : style.disable
                      }
                      onClick={() => decreaseItem(size, 1)}>
                      -
                    </Typography>
                    <Typography sx={style.addCount}>
                      {counts[size] || 0}
                    </Typography>{" "}
                    <Typography
                      sx={style.add}
                      onClick={() => increaseItem(size, 1)}>
                      +
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={style.buttonContainer}>
          <Typography sx={style.buttonContinue} onClick={constinueShopping}>
            Continue
          </Typography>
          <Typography sx={style.buttonGoToCart} onClick={goToCart}>
            Go to cart
          </Typography>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

export default Modal;
