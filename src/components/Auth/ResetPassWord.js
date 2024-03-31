import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";
import { style } from "../Style";

function ResetPassWord() {
  const navigate = useNavigate();
  return (
    <div>
      <h1> reset passowrd page</h1>

      <form type="submit">
        <div>
          <p>Name</p>
          <input type="name" />
        </div>
        <div>
          <p>password</p>
          <input type="name" />
        </div>
        <div>
          <div>
            <button onClick={() => navigate("/signup")}>Sign up</button>
          </div>
          <button onClick={() => navigate("/signin")}>Login</button>
        </div>
      </form>
    </div>
  );
}

export default ResetPassWord;
