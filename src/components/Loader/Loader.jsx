import React from "react";
import ReactDOM from "react-dom";
import Backdrop from "@mui/material/Backdrop";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CircularProgress from "@mui/material/CircularProgress";

const theme = createTheme(); 

function Loader() {
  return ReactDOM.createPortal(
    <ThemeProvider theme={theme}>
        <CircularProgress  />
    </ThemeProvider>,
    document.getElementById("loader")
  );
}

export default Loader;
