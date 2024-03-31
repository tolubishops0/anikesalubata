import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Box, Typography, Button } from "@mui/material";
import { style } from "../Style";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./FireBase/config";
import Loader from "../Loader/Loader";

function SignUp() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const registerUser = (e) => {
    //when you submit the form, it does not reload the age or the page does not reload
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("passwords do not match");
    }
    setIsLoading(true);
    // import createUserWithEmailAndPassword and auth from firebabse
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setIsLoading(false);
        toast.success("Registeration Succesful");
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

  return (
    <React.Fragment>
      {isLoading && <Loader />}
      <ToastContainer />
      <h1> sign up page</h1>
      <form onSubmit={registerUser}>
        <input
          type="email"
          placeholder="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          required
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <div>
          <button type="submit">Sign up</button>
        </div>
      </form>
    </React.Fragment>
  );
}

export default SignUp;
