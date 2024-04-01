import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { style } from "../Style";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "./FireBase/config";
import Loader from "../Loader/Loader";

function ResetPassWord() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const resetPassword = (e) => {
    e.preventDefault();
    setIsLoading(true);
    sendPasswordResetEmail(auth, email)
      .then(() => {
        setIsLoading(false);
        toast.success("reset link sent to your mail");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setIsLoading(false);
        toast.error(error.message);

        // ..
      });
  };
  return (
    <React.Fragment>
      {" "}
      {isLoading && <Loader />}
      <ToastContainer />
      <Box sx={{ backgroundColor: "#ACACAC", padding: "2rem 0" }}>
        <Box sx={style.authContainer}>
          <Typography sx={style.pageHeader}> Reset Your Password</Typography>
          <form
            onSubmit={resetPassword}
            type="submit"
            style={style.formContainer}>
            <input
              value={email}
              type="email"
              placeholder="enter email"
              onChange={(e) => setEmail(e.target.value)}
              className="auth-inputfield"
            />
            <button className="auth-inputfield-button" type="submit">
              Reset Password
            </button>
          </form>
          <Box sx={{ marginTop: "4rem" }}>
            <Typography sx={{ ...style.goggleButon, textAlign: "center" }}>
              Remember your password?{" "}
              <span
                onClick={() => navigate("/signin")}
                style={{ color: "white", cursor: "pointer" }}>
                Sign In
              </span>
            </Typography>
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  );
}

export default ResetPassWord;
