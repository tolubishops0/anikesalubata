import React from "react";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { style } from "./Style";
import pagenotfound from "../Asset/notfound.png";

function PageNotFound() {
  const navigate = useNavigate();
  console.log("page not found");
  return (
    <Box sx={{ backgroundColor: "#f8f8f8", padding: "2rem 0" }}>
      <Box sx={{ ...style.emptyCartIcon, gap: "1rem" }}>
        <img src={pagenotfound} alt="empty cart img" />
        <Typography sx={style.cartHeader}>Page not found</Typography>
        <Typography
          sx={style.checkOut}
          onClick={() => navigate("/products/all")}>
          Back to Product Listing
        </Typography>
      </Box>
    </Box>
  );
}

export default PageNotFound;
