import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";
import { style } from "../Style";
import Loader from "../Loader/Loader";
import { auth } from "./FireBase/config";
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

  const SignInUser = (e) => {
    e.preventDefault();
    setIsLoading(true);

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        setIsLoading(false);
        toast.success("logged in successfully");
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setIsLoading(false);
        toast.error("Error, please try again");
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
    <div>
      <ToastContainer />
      {isLoading && <Loader />}
      <Typography> Sign In</Typography>
      <form onSubmit={SignInUser}>
        <div>
          <p>email</p>
          <input
            placeholder="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <p>password</p>
          <input
            placeholder="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="name"
          />
        </div>
        <button type="submit">Sign in</button>
        <div>
          <button onClick={() => navigate("/reset-password")}>
            forgot password?
          </button>
        </div>
        <div>
          <button onClick={() => navigate("/signup")}>Sign up</button>
        </div>
      </form>

      <div>
        <button onClick={signInWithGoogle}>Sign in with google</button>
      </div>
      <div>
        <button onClick={signOutWithGoogle}>Sign out</button>
      </div>
    </div>
  );
}

export default SignIn;
