import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Box, Typography, Divider } from "@mui/material";
import { style } from "../Style";
import CartContext from "../../Context/Cart/CartContext";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { deliverySchema } from "../FormValidation/FormValidation";
import { useForm } from "react-hook-form";

function Delivery() {
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(deliverySchema),
  });
  const { authState } = useContext(CartContext);
  const { userDetails } = authState || {};

  const [name] = useState(userDetails?.name);
  const [email] = useState(userDetails?.email);
  
  const getAddressDetails = (data) => {
    navigate("/payments");
  };

  const countriesList = [
    {
      name: "Nigeria",
      id: "Nigeria",
    },
    {
      name: "Ghana",
      id: "Ghana",
    },
    {
      name: "togo",
      id: "togo",
    },
  ];

  return (
    <Box>
      <Box sx={{ backgroundColor: "#ACACAC", padding: "2rem 0" }}>
        <Box sx={style.authContainer}>
          <Typography sx={style.pageHeader}> Delivery Details</Typography>
          <form
            onSubmit={handleSubmit(getAddressDetails)}
            style={style.formContainer}
            type="submit">
            <div style={style.inputContainer}>
              <input
                type="text"
                placeholder="name"
                required
                value={name}
                className="auth-inputfield"
                disabled
              />
            </div>
            <div style={style.inputContainer}>
              <input
                type="email"
                placeholder="email"
                required
                value={email}
                className="auth-inputfield"
                disabled
              />
            </div>
            <div style={style.inputContainer}>
              <input
                type="number"
                placeholder="phonenumber"
                className="auth-inputfield"
                {...register("phoneNumber")}
              />
              {errors.phoneNumber && (
                <span style={style.error}> {errors.phoneNumber?.message}</span>
              )}
            </div>
            <div style={style.inputContainer}>
              <input
                type="text"
                placeholder="street"
                className="auth-inputfield"
                {...register("street")}
              />
              {errors.street && (
                <span style={style.error}> {errors.street?.message}</span>
              )}
            </div>
            <div style={style.inputContainer}>
              <input
                type="text"
                placeholder="state"
                className="auth-inputfield"
                {...register("state")}
              />
              {errors.state && (
                <span style={style.error}> {errors.state?.message}</span>
              )}
            </div>
            <div style={style.inputContainer}>
              <select
                {...register("country")}
                // onChange={(e) => setCountry(e.target.value)}
                className="auth-inputfield"
                placeholder="country">
                <option value="">Select your country</option>
                {countriesList.map((item, index) => (
                  <option key={index}>{item.name}</option>
                ))}
              </select>
              {errors.country && (
                <span style={style.error}>{errors.country?.message}</span>
              )}
            </div>
            <div className="auth-zipcodeinputfild">
              <div style={style.inputContainer}>
                <input
                  type="text"
                  placeholder="city"
                  className="auth-inputfieldzipcdp"
                  {...register("city")}
                />
                {errors.city && (
                  <span style={style.error}> {errors.city?.message}</span>
                )}
              </div>
              <div style={style.inputContainer}>
                <input
                  type="number"
                  placeholder="zipCode"
                  className="auth-inputfieldzipcdp"
                  {...register("zipcode")}
                />
                {errors.zipcode && (
                  <span style={style.error}> {errors.zipcode?.message}</span>
                )}
              </div>
            </div>
            <button className="auth-inputfield-button" type="submit">
              Continue to payment
            </button>
          </form>
        </Box>
      </Box>
    </Box>
  );
}

export default Delivery;
