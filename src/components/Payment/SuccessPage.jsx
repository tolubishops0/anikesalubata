import React, { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { style } from "../Style";
import success from "../../Asset/success.png";

function SuccessPage() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
      localStorage.removeItem(
        "total",
        "cartItems",
        "userDataAndCart",
        "itemsCount"
      );
    }, 5000);
  }, []);

  return (
    <Box sx={{ backgroundColor: "#f8f8f8", padding: "2rem 0" }}>
      <Box sx={{ ...style.emptyCartIcon, gap: "1rem" }}>
        <img src={success} alt="empty cart img" />
        <Typography sx={style.cartHeader}>Purchase Successfull</Typography>
        <Typography
          sx={style.checkOut}
          onClick={() => navigate("/products/all")}>
          Redirecting to the productlist
        </Typography>
      </Box>
    </Box>
  );
}

export default SuccessPage;
