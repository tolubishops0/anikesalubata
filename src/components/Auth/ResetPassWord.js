import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Box,
  Typography,
  Divider,
  InputAdornment,
  OutlinedInput,
  TextField,
  IconButton,
} from "@mui/material";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { style } from "../Style";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "./FireBase/config";
import Loader from "../Loader/Loader";
import { yupResolver } from "@hookform/resolvers/yup";
import { authResetSchema } from "../FormValidation/FormValidation";
import { useForm } from "react-hook-form";

function ResetPassWord() {
  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(authResetSchema),
  });

  const [isLoading, setIsLoading] = useState(false);

  const resetPassword = (data) => {
    setIsLoading(true);
    sendPasswordResetEmail(auth, data.email)
      .then(() => {
        setIsLoading(false);
        toast.success("reset link sent to your mail");
        navigate("/signin");
      })
      .catch((error) => {
        setIsLoading(false);
        toast.error(error.message);
      });
  };
  return (
    <React.Fragment>
      {isLoading && <Loader />}
      <ToastContainer />
      <Box sx={{ backgroundColor: "#ACACAC", padding: "2rem 0" }}>
        <Box sx={style.authContainer}>
          <Typography sx={style.pageHeader}> Reset Your Password</Typography>
          <form
            onSubmit={handleSubmit(resetPassword)}
            type="submit"
            style={style.formContainer}>
            <div style={style.inputContainer}>
              <TextField
                sx={style.payinptu}
                type="email"
                placeholder="email"
                {...register("email")}
              />

              {errors.email && (
                <span style={style.error}> {errors.email?.message}</span>
              )}
            </div>
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
