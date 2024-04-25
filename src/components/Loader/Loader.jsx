import React from "react";
import { Box } from "@mui/material";
// import { style } from "../Style";

function Loader() {
  return (
    <Box sx={style.loaderContainer}>
      <Box className="spin" sx={style.loader}></Box>
    </Box>
  );
}

export default Loader;

const style = {
  loaderContainer: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "rgba(0, 0, 0, 0.9)",
    zIndex: 50, 
  },
  loader: {
    border: "6px solid #2196f3",
    borderRadius: "50%",
    width: 48,
    height: 48,
    animation: "loader 1s linear infinite", 
  },
};
