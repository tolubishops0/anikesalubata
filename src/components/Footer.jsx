import React from "react";
import { style } from "./Style";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";

function Footer() {
  const navigate = useNavigate();
  return (
    <Box sx={{ background: "black" }}>
      <Box sx={style.footerContainer}>
        <Typography
          sx={{ ...style.brandName, color: "white" }}
          onClick={() => navigate("/")}>
          Àníkẹ́ Sálúbàtà
        </Typography>{" "}
      </Box>
    </Box>
  );
}

export default Footer;
