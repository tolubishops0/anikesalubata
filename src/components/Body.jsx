import React from "react";

import { Box, Typography, Button } from "@mui/material";
import bgimg from "../Asset/bgimg.jpg";
import { style } from "./Style";

function Body() {
  return (
    <Box sx={style.heroSection}>
      <img src={bgimg} alt="bgimg" style={style.img} />
      <Box sx={style.textContainer}>
        <Typography sx={style.header} className="slide-bannerTextHeader">
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
          {/* SAY SOMETHING ABOUT HANDMADE HERE  */}
        </Typography>
        <Typography sx={style.header2} className="slide-bannerTextSubtext">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
        </Typography>
        <Button sx={style.bannerTextButton} className="slide-bannerTextButton">
          Get Started
        </Button>
      </Box>
    </Box>
  );
}

export default Body;
