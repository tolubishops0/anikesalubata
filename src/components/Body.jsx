import React from "react";
import { useNavigate } from "react-router-dom";

import { Box, Typography, Button, useMediaQuery } from "@mui/material";
import bgimg from "../Asset/bgimg.jpg";
import { style } from "./Style";
import Loader from "./Loader/Loader";

function Body() {
  const handleNavigate = () => {
    navigate("products/all");
  };
  const navigate = useNavigate();
  const isSmallScreen = useMediaQuery("(max-width: 768px)");

  return (
    <Box sx={style.heroSection}>
      {/* <img src={bgimg} alt="bgimg" style={style.img} /> */}
      <Box sx={style.textContainer}>
        {isSmallScreen ? (
          <Typography sx={style.header} className="slide-bannerTextHeader">
            {" "}
            Your One-Stop Destination <br /> for your Quality Handmade Shoes.{" "}
            {/* SAY SOMETHING ABOUT HANDMADE HERE  */}
          </Typography>
        ) : (
          <Typography sx={style.header} className="slide-bannerTextHeader">
            {" "}
            Your One-Stop Destination for your
            <br /> Quality Handmade Shoes.{" "}
            {/* SAY SOMETHING ABOUT HANDMADE HERE  */}
          </Typography>
        )}
        <Typography sx={style.header2} className="slide-bannerTextSubtext">
          Walk your talk, with Àníkẹ́ Sálúbàtà.{" "}
        </Typography>
        <Button
          onClick={handleNavigate}
          sx={style.bannerTextButton}
          className="slide-bannerTextButton">
          Get Started
        </Button>
      </Box>
    </Box>
  );
}

export default Body;
