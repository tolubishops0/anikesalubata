import React, { useEffect, useContext } from "react";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { style } from "../Style";
import success from "../../Asset/success.png";
import CartContext from "../../Context/Cart/CartContext";

function SuccessPage() {
  const navigate = useNavigate();

  const { handleCheckout } = useContext(CartContext);

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
      handleCheckout();
    }, 8000);
  }, []);

  return (
    <Box sx={{ backgroundColor: "#f8f8f8", padding: "2rem 0" }}>
      <Box sx={{ ...style.emptyCartIcon, gap: "1rem" }}>
        <img src={success} alt="empty cart img" />
        <Typography sx={style.cartHeader}>Purchase Successfull</Typography>
        <Typography
          sx={style.checkOut}
          onClick={() => navigate("/products/all")}>
          You will be redirected to the productlist
        </Typography>
      </Box>
    </Box>
  );
}

export default SuccessPage;
