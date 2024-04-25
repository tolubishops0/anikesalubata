import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Box,
  Typography,
  Divider,
  InputAdornment,
  OutlinedInput,
  IconButton,
  Select,
  TextField,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";
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
  const userData = JSON.parse(localStorage.getItem("userData")) || {};

  const [name] = useState(userData?.name);
  const [email] = useState(userData?.email);
  const [country, setCountry] = useState("");

  const handleChange = (e) => {
    setCountry(e.target.value);
  };

  const getAddressDetails = () => {
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
      name: "Togo",
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
              <TextField
                type="text"
                placeholder="name"
                required
                value={name}
                sx={style.payinptu}
                disabled
              />
            </div>
            <div style={style.inputContainer}>
              <TextField
                type="email"
                placeholder="email"
                required
                value={email}
                sx={style.payinptu}
                disabled
              />
            </div>
            <div style={style.inputContainer}>
              <TextField
                type="number"
                placeholder="phonenumber"
                sx={style.payinptu}
                {...register("phoneNumber")}
              />
              {errors.phoneNumber && (
                <span style={style.error}> {errors.phoneNumber?.message}</span>
              )}
            </div>
            <div style={style.inputContainer}>
              <TextField
                type="text"
                placeholder="street"
                sx={style.payinptu}
                {...register("street")}
              />
              {errors.street && (
                <span style={style.error}> {errors.street?.message}</span>
              )}
            </div>
            <div style={style.inputContainer}>
              <TextField
                type="text"
                placeholder="state"
                sx={style.payinptu}
                {...register("state")}
              />
              {errors.state && (
                <span style={style.error}> {errors.state?.message}</span>
              )}
            </div>
            <FormControl style={style.inputContainer}>
              {!country && (
                <InputLabel sx={{ color: "#c0c0c0" }} shrink={false}>
                  country
                </InputLabel>
              )}

              <Select
                // {...register("country")}
                sx={style.payinptu}
                placeholder="Select  your country"
              onChange={(e) => handleChange(e)}
              >
                {countriesList.map((item, index) => (
                  <MenuItem
                    value={item.name}
                    sx={{
                      fontWeight: "500",
                      color: "black",
                      backgroundColor: "white",
                    }}
                    key={index}>
                    {item.name}
                  </MenuItem>
                ))}
              </Select>
              {/* {errors.country && (
                <span style={style.error}>{errors.country?.message}</span>
              )} */}
            </FormControl>
            <div className="auth-zipcodeinputfild">
              <div style={style.inputContainer}>
                <TextField
                  type="text"
                  placeholder="city"
                  sx={style.payinptu}
                  {...register("city")}
                />
                {errors.city && (
                  <span style={style.error}> {errors.city?.message}</span>
                )}
              </div>
              <div style={style.inputContainer}>
                <TextField
                  type="number"
                  placeholder="zipCode"
                  sx={style.payinptu}
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
