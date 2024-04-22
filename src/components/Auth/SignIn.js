import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Typography, Divider } from "@mui/material";
import { style } from "../Style";
import Loader from "../Loader/Loader";
import { auth } from "./FireBase/config";
import GoogleIcon from "@mui/icons-material/Google";
import CartContext from "../../Context/Cart/CartContext";
import { yupResolver } from "@hookform/resolvers/yup";

import { useForm } from "react-hook-form";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
} from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { authSignInSchema } from "../FormValidation/FormValidation";

function SignIn() {
  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(authSignInSchema),
  });

  const [isLoading, setIsLoading] = useState(false);

  const { authState, cartItems, setAuthState } = useContext(CartContext);

  const SignInUser = (data) => {
    setIsLoading(true);

    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(userCredential);
        setIsLoading(false);
        toast.success("logged in successfully");
        if (cartItems.length > 0) {
          navigate("/user-details");
        } else {
          navigate("/");
        }
      })
      .catch((error) => {
        const errorMessage = error.message;
        setIsLoading(false);
        toast.error(errorMessage);
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

  const signOutWithGoogle = () => {
    signOut(auth)
      .then(() => {
        setIsLoading(false);
        toast.success("logged out Succesfull");
        navigate("/");
        const userDetails = null;
        setAuthState(userDetails);
      })
      .catch((error) => {
        setIsLoading(false);
        toast.error(error.message);
      });
  };

  return (
    <React.Fragment>
      <ToastContainer />
      {isLoading && <Loader />}
      <Box sx={{ backgroundColor: "#ACACAC", padding: "2rem 0" }}>
        <Box sx={style.authContainer}>
          <Typography sx={style.pageHeader}>Sign In</Typography>
          <form onSubmit={handleSubmit(SignInUser)} style={style.formContainer}>
            <div style={style.inputContainer}>
              <input
                type="email"
                placeholder="email"
                className="auth-inputfield"
                {...register("email")}
              />
              {errors.email && (
                <span style={style.error}> {errors.email?.message}</span>
              )}
            </div>
            <div style={style.inputContainer}>
              <input
                className="auth-inputfield"
                placeholder="password"
                type="password"
                {...register("password")}
              />
              {errors.password && (
                <span style={style.error}> {errors.password?.message}</span>
              )}
            </div>
            <button className="auth-inputfield-button" type="submit">
              Sign in
            </button>
          </form>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}>
            <Typography
              onClick={() => navigate("/reset-password")}
              sx={{ ...style.goggleButon, textAlign: "right" }}>
              <span style={{ color: "white", cursor: "pointer" }}>
                Forgot Password?
              </span>
            </Typography>

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
              Don't have an account?{" "}
              <span
                onClick={() => navigate("/signup")}
                style={{ color: "white", cursor: "pointer" }}>
                Sign Up
              </span>
            </Typography>
          </Box>
          <div>
            <button onClick={signOutWithGoogle}>Sign out</button>
          </div>
        </Box>
      </Box>
    </React.Fragment>
  );
}

export default SignIn;
