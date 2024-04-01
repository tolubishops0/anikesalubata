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

function SignUp() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneNumber, setPhone] = useState();
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const registerUser = (e) => {
    //when you submit the form, it does not reload the age or the page does not reload
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("passwords do not match");
    }
    setIsLoading(true);
    // import createUserWithEmailAndPassword and auth from firebabse
    createUserWithEmailAndPassword(auth, email, password, phoneNumber)
      .then((userCredential) => {
        const user = userCredential.user;
        updateProfile(user, { displayName: name });
      })
      .then((user) => {
        console.log(user, "from signi");
        setIsLoading(false);
        toast.success("Registration Successful");
        navigate("/signin");
      })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        toast.error("Error, please try again");
        // toast.error(errorMessage);
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
            Please enter your e-mail or phone number to log in or create a new
            account.
          </Typography>
          <form
            onSubmit={registerUser}
            style={style.formContainer}
            type="submit">
            <input
              type="name"
              placeholder="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="auth-inputfield"
            />
            <input
              type="email"
              placeholder="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="auth-inputfield"
            />
            <input
              type="password"
              placeholder="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="auth-inputfield"
            />

            <input
              type="password"
              placeholder="confirm password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="auth-inputfield"
            />
            <input
              type="text"
              placeholder="phone"
              required
              value={phoneNumber}
              onChange={(e) => setPhone(e.target.value)}
              className="auth-inputfield"
            />
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
