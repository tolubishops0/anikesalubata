import React from "react";
import { Box, Typography } from "@mui/material";
import { style } from "../Style";

function Loader() {
  return (
    <Box sx={style.loaderContainer}>
      <Box sx={style.loader}></Box>
    </Box>
  );
}

export default Loader;
