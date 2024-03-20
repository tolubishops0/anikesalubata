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

  const [counts, setCounts] = useState(() =>
    props.selectedProduct.sizes.map(() => 0)
  );
  let selectedWithSize;
  const increaseItem = (index, size) => {
    selectedWithSize = {
      img: props.selectedProduct.img,
      name: "brougues",
      price: "$100",
      id: 1,
      size: size,
    };
    addToCart(selectedWithSize, "add to cart");
    setCounts((prevCounts) => {
      const newCounts = [...prevCounts];
      newCounts[index]++;
      return newCounts;
    });
  };

  const decreaseItem = (index, size) => {
    selectedWithSize = {
      img: props.selectedProduct.img,
      name: "brougues",
      price: "$100",
      id: 1,
      size: size,
    };
    removeFromCart(selectedWithSize, "remove from cart");
    setCounts((prevCounts) => {
      const newCounts = [...prevCounts];
      if (newCounts[index] > 0) {
        newCounts[index]--;
      }
      return newCounts;
    });
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
              {props.selectedProduct.sizes.map((item, index) => (
                <Box key={index} sx={style.parentSizes}>
                  <Typography> Size {item}:</Typography>
                  <Box sx={style.parentAdd}>
                    <Typography
                      sx={counts[index] !== 0 ? style.add : style.disable}
                      onClick={() => {
                        decreaseItem(index, item);
                      }}>
                      -
                    </Typography>
                    <Typography sx={style.addCount}>{counts[index]}</Typography>{" "}
                    <Typography
                      sx={style.add}
                      onClick={() => increaseItem(index, item)}>
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
