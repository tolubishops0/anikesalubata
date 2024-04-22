import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Box, Typography, Divider } from "@mui/material";
import { style } from "../Style";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { auth } from "./FireBase/config";
import Loader from "../Loader/Loader";
import GoogleIcon from "@mui/icons-material/Google";
import { authSchema, authSignUpSchema } from "../FormValidation/FormValidation";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { useForm } from "react-hook-form";

function SignUp() {
  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(authSignUpSchema),
  });

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");
  // const [phoneNumber, setPhone] = useState();
  // const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const registerUser = (data) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(
      auth,
      data.email,
      data.password,
      data.phoneNumber
    )
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user)
        updateProfile(user, { displayName: data.name });
      })
      .then((user) => {
        setIsLoading(false);
        toast.success("Registration Successful");
        navigate("/signin");
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error("Error, please try again");
        setIsLoading(false);
      });
  };

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        setIsLoading(false);
        toast.success("login Succesful");
        navigate("/");
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
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
          <Typography sx={style.pageHeader}>
            {" "}
            Welcome to Àníkẹ́ Sálúbàtà
          </Typography>
          <Typography sx={style.pageSubHeader}>
            {" "}
            Please enter the following to create a new account.
          </Typography>
          <form
            onSubmit={handleSubmit(registerUser)}
            style={style.formContainer}
            type="submit">
            <div style={style.inputContainer}>
              <input
                type="name"
                placeholder="name"
                // value={name}
                // onChange={(e) => setName(e.target.value)}
                className="auth-inputfield"
                {...register("name")}
              />
              {errors.name && (
                <span style={style.error}> {errors.name?.message}</span>
              )}
            </div>
            <div style={style.inputContainer}>
              <input
                type="email"
                placeholder="email"
                // required
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
                className="auth-inputfield"
                {...register("email")}
              />
              {errors.email && (
                <span style={style.error}> {errors.email?.message}</span>
              )}
            </div>
            <div style={style.inputContainer}>
              <input
                type="password"
                placeholder="password"
                // required
                // value={password}
                // onChange={(e) => setPassword(e.target.value)}
                className="auth-inputfield"
                {...register("password")}
              />
              {errors.password && (
                <span style={style.error}> {errors.password?.message}</span>
              )}
            </div>{" "}
            <div style={style.inputContainer}>
              <input
                type="password"
                placeholder="confirm password"
                // required
                // value={confirmPassword}
                // onChange={(e) => setConfirmPassword(e.target.value)}
                className="auth-inputfield"
                {...register("confirmPassword")}
              />
              {errors.confirmPassword && (
                <span style={style.error}>
                  {" "}
                  {errors.confirmPassword?.message}
                </span>
              )}{" "}
            </div>{" "}
            <div style={style.inputContainer}>
              <input
                type="number"
                placeholder="phone"
                // required
                // value={phoneNumber}
                // onChange={(e) => setPhone(e.target.value)}
                className="auth-inputfield"
                {...register("phoneNumber")}
              />
              {errors.phoneNumber && (
                <span style={style.error}> {errors.phoneNumber?.message}</span>
              )}
            </div>{" "}
            <button className="auth-inputfield-button" type="submit">
              Sign up
            </button>
          </form>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}>
            {" "}
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Divider sx={{ flexGrow: 1, bgcolor: "black" }} />
              <Box sx={{ px: 0.5, fontWeight: 600, color: "white" }}>OR</Box>
              <Divider sx={{ flexGrow: 1, bgcolor: "black" }} />
            </Box>
            <Box onClick={signInWithGoogle} sx={style.buttonGoogleIcon}>
              <GoogleIcon />
              <Typography sx={style.goggleButon}>
                {" "}
                Continue with Google
              </Typography>
            </Box>
          </Box>

          <Box sx={{ marginTop: "4rem" }}>
            <Typography sx={{ ...style.goggleButon, textAlign: "center" }}>
              Already have an account?{" "}
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

export default SignUp;
