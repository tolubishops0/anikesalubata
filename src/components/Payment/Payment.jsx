import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  FormHelperText,
  InputAdornment,
  Box,
  Typography,
  Divider,
  OutlinedInput,
  FormControl,
  Input,
  FilledInput,
  InputLabel,
  IconButton,
  ThemeProvider,
} from "@mui/material";
import { style } from "../Style";
import { sumItems } from "../../Context/Cart/CartReducer";
import CartContext from "../../Context/Cart/CartContext";
import card from "../../Asset/cardpaymenticon.png";
import visa from "../../Asset/icons8-visa-48.png";
import masterCard from "../../Asset/icons8-mastercard-48.png";
import amex from "../../Asset/icons8-amex-48.png";
import theme from "../../theme";
import * as yup from "yup";
import {
  formatExpirationDate,
  cardSchema,
} from "../FormValidation/FormValidation";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Loader from "../Loader/Loader";

function Payment() {
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    resolver: yupResolver(cardSchema),
  });
  const { cartItems, handleCheckout } = useContext(CartContext);
  const userData = JSON.parse(localStorage.getItem("userData")) || {};
  const { itemsCount, total } = sumItems(cartItems);

  const [isLoading, setIsLoading] = useState(false);

  const [isChecked, setIsChecked] = useState(false);
  const [cardImg, setCardImg] = useState(null);
  const [cardState, setCardState] = useState({
    name: "",
    number: "",
    exp: "",
    cvv: "",
  });

  console.log(isLoading);

  const getPaymentDetails = (data) => {
    setIsLoading(true);
    setTimeout(() => {
      handleCheckout();
      navigate("/success-page");
      setIsLoading(false);
    }, 4000);
  };

  const toggleSwitch = () => {
    setIsChecked(!isChecked);
  };

  const handleCardInputChange = (e) => {
    const { name, value } = e.target;
    let formattedValue = value;
    if (name === "number") {
      formattedValue = formatCardNumber(value);
      setCardImg(getCardType(formattedValue));
    } else if (name === "exp") {
      formattedValue = formatExpirationDate(value);
    }

    setCardState((prevState) => ({ ...prevState, [name]: formattedValue }));
  };

  const formatCardNumber = (number) => {
    const numberWithoutSpaces = number.replace(/\s+/g, "");
    const formattedNumber = numberWithoutSpaces
      .replace(/(\d{4})/g, "$1 ")
      .trim();
    return formattedNumber;
  };

  const getCardType = (number) => {
    const num = number.toString();
    const visaPattern = /^4/;
    const amexPattern = /^3[47]/;
    const masterCardPattern = /^5[1-5]/;
    if (visaPattern.test(num)) {
      return visa;
    } else if (masterCardPattern.test(num)) {
      return masterCard;
    } else if (amexPattern.test(num)) {
      return amex;
    } else {
      return null;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      {!isLoading ? (
        <Box>
          <Box sx={{ backgroundColor: "#ACACAC", padding: "2rem 0" }}>
            <Box
              sx={{
                textAlign: "right",
                width: "90%",
                margin: "0 auto",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}>
              <Box
                sx={{
                  width: "3rem",
                  borderRadius: "50%",
                  background: "white",
                  padding: ".5rem",
                  "@media screen and (max-width:768px)": {
                    padding: ".3rem",
                    width: "2rem",
                    height: "2rem",
                  },
                }}>
                <img
                  style={{ width: "100%", height: "100%" }}
                  src={card}
                  alt="card-pay"
                />
              </Box>

              <div>
                <Typography sx={style.pageHeader}> {`${total}`}</Typography>
                <Typography sx={style.pageSubHeader}>
                  {userData?.email}
                </Typography>
              </div>
            </Box>
            <Box
              sx={{
                marginTop: "2rem",
              }}>
              <Typography sx={{ ...style.pageHeader, textAlign: "center" }}>
                Payment Details
              </Typography>
              <Box sx={{ ...style.authContainer, marginTop: "2rem" }}>
                <form
                  onSubmit={handleSubmit(getPaymentDetails)}
                  style={style.formContainer}
                  type="submit">
                  <FormControl fullWidth variant="outlined">
                    <OutlinedInput
                      sx={style.payinptu}
                      id="outlined-adornment-weight"
                      placeholder="card number"
                      name="number"
                      maxLength={19}
                      value={formatCardNumber(cardState.number)}
                      onChange={handleCardInputChange}
                      endAdornment={
                        <InputAdornment position="end">
                          <img src={cardImg} alt="" />
                        </InputAdornment>
                      }
                      aria-describedby="outlined-weight-helper-text"
                      inputProps={{
                        maxLength: 19,
                        "aria-label": "weight",
                      }}
                      // {...register("cardNumber")}
                    />
                    {/* {errors.cardNumber && (
                  <span style={style.error}> {errors.cardNumber?.message}</span>
                )} */}
                  </FormControl>

                  <div style={style.inputContainer}>
                    <OutlinedInput
                      sx={style.payinptu}
                      id="outlined-adornment-weight"
                      placeholder="card name"
                      name="name"
                      aria-describedby="outlined-weight-helper-text"
                      inputProps={{
                        maxLength: 19,
                        "aria-label": "weight",
                      }}
                      {...register("cardName")}
                    />
                    {errors.cardName && (
                      <span style={style.error}>
                        {" "}
                        {errors.cardName?.message}
                      </span>
                    )}
                  </div>

                  <div className="auth-zipcodeinputfild">
                    <div style={style.inputContainer}>
                      <OutlinedInput
                        sx={style.payinptu}
                        id="outlined-adornment-weight"
                        placeholder="Valid Through"
                        name="exp"
                        aria-describedby="outlined-weight-helper-text"
                        value={formatExpirationDate(cardState.exp)} // Apply expiration date formatting
                        onChange={handleCardInputChange}
                        inputProps={{
                          maxLength: 5,
                          "aria-label": "weight",
                        }}
                      />
                      {/* {errors.cardExp && (
                    <span style={style.error}> {errors.cardExp?.message}</span>
                  )} */}
                    </div>
                    <div style={style.inputContainer}>
                      <OutlinedInput
                        sx={style.payinptu}
                        id="outlined-adornment-weight"
                        placeholder="cvv"
                        maxlength="3"
                        name="cvv"
                        aria-describedby="outlined-weight-helper-text"
                        inputProps={{
                          maxLength: 3,
                          // type: "number",
                          "aria-label": "weight",
                        }}
                        {...register("cvv")}
                      />
                      {errors.cvv && (
                        <span style={style.error}> {errors.cvv?.message}</span>
                      )}
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "right",
                      alignItems: "center",
                      gap: ".5rem",
                    }}>
                    <Typography sx={style.pageSubHeader}>
                      Remember Card next time
                    </Typography>
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={toggleSwitch}
                    />
                  </div>

                  <button className="auth-inputfield-button" type="submit">
                    Complete order
                  </button>
                </form>
              </Box>
            </Box>
          </Box>
        </Box>
      ) : (
        <Loader />
      )}
    </ThemeProvider>
  );
}

export default Payment;
