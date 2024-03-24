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
  const { addToCart } = useContext(CartContext);

  const [selectedSizes, setSelectedSizes] = useState({});

  const handleSizeChange = (size, quantity) => {
    setSelectedSizes({ ...selectedSizes, [size]: quantity });
  };

  const addToCartFunt = () => {
    const itemsToAdd = Object.entries(selectedSizes).map(
      ([size, quantity]) => ({
        size,
        quantity,
        img: props?.selectedProduct.img,
        name: props?.selectedProduct.name,
        price: props?.selectedProduct.price,
        id: props?.selectedProduct.id / size,
        description: props?.selectedProduct.description,
        shoeTypeId: props?.selectedProduct.id,
      })
    );

    addToCart(itemsToAdd.filter((item) => item.quantity > 0));
    props.handleModal();
  };

  const constinueShopping = () => {
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
                        selectedSizes[size] !== undefined &&
                        selectedSizes[size] !== 0
                          ? style.add
                          : style.disable
                      }
                      onClick={() =>
                        handleSizeChange(
                          size,
                          selectedSizes[size] ? selectedSizes[size] - 1 : 0
                        )
                      }>
                      -
                    </Typography>
                    <Typography sx={style.addCount}>
                      {selectedSizes[size] || 0}
                    </Typography>{" "}
                    <Typography
                      sx={style.add}
                      onClick={() =>
                        handleSizeChange(size, (selectedSizes[size] || 0) + 1)
                      }>
                      +
                    </Typography>{" "}
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
          <Typography sx={style.buttonGoToCart} onClick={addToCartFunt}>
            Add to Cart
          </Typography>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

export default Modal;
