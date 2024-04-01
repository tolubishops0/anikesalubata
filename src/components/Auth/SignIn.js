import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Typography, Divider } from "@mui/material";
import { style } from "../Style";
import Loader from "../Loader/Loader";
import { auth } from "./FireBase/config";
import GoogleIcon from "@mui/icons-material/Google";
import CartContext from "../../Context/Cart/CartContext";

import {
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
} from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { setAuthState } = useContext(CartContext);

  const SignInUser = (e) => {
    e.preventDefault();
    setIsLoading(true);

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        const userDetails = {
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
          uid: user.uid,
        };
        // setAuthState(userDetails);
        setIsLoading(false);
        toast.success("logged in successfully");
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
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
          <form onSubmit={SignInUser} style={style.formContainer}>
            <input
              type="email"
              placeholder="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="auth-inputfield"
            />
            <input
              placeholder="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="name"
              className="auth-inputfield"
            />
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
            {/* <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                boxSizing: "border-box",
              }}> */}
            <Typography
              onClick={() => navigate("/reset-password")}
              sx={{ ...style.goggleButon, textAlign: "right" }}>
              <span style={{ color: "white", cursor: "pointer" }}>
                Forgot Password?
              </span>
            </Typography>
            {/* <Typography
                onClick={() => navigate("/signup")}
                sx={{ ...style.goggleButon, textAlign: "center" }}>
                <span style={{ color: "white", cursor: "pointer" }}>
                  Sign Up
                </span>
              </Typography> */}
            {/* </Box> */}
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
