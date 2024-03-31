import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";
import { style } from "../Style";
import Loader from "../Loader/Loader";
import { auth } from "./FireBase/config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const getUserSignIn = (e) => {
    e.preventDefault();
    setIsLoading(true);

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        setIsLoading(false);
        toast.success("succes ");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setIsLoading(false);
        toast.error("Error, please try again");
        console.log(errorMessage)
      });
  };

  return (
    <div>
      <ToastContainer />
      {isLoading && <Loader />}
      <h1> sign in page</h1>
      <form onSubmit={getUserSignIn}>
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
    </div>
  );
}

export default SignIn;
