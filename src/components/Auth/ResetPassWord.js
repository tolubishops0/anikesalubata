import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { style } from "../Style";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "./FireBase/config";

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
    <div>
      {isLoading && <ToastContainer />}
      <h1> reset passowrd page</h1>

      <form onSubmit={resetPassword} type="submit">
        <div>
          <p>password</p>
          <input
            value={email}
            type="email"
            placeholder="enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <div>
            <button
            // onClick={() => navigate("/signup")}
            >
              Reset Password
            </button>
          </div>
          <button onClick={() => navigate("/signin")}>Login</button>
        </div>
      </form>
    </div>
  );
}

export default ResetPassWord;
