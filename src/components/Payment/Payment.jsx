import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Box, Typography, Divider } from "@mui/material";
import { style } from "../Style";
import CartContext from "../../Context/Cart/CartContext";
import card from "../../Asset/cardpaymenticon.png";

function Payment() {
  const navigate = useNavigate();
  const { authState } = useContext(CartContext);

  const { userDetails, totalCost } = authState || {};

  const getPaymentDetails = () => {
    // const cardDetails = {
    //   cardName: cardName,
    //   cardNumber: cardNumber,
    //   cardExp: cardExp,
    //   cvv: cvv,
    // };
    // if (cardDetails) {
    // }
  };

  const [isChecked, setIsChecked] = useState(false);
  const [cardType, setCardType] = useState("");
  const [cardState, setCardState] = useState({
    name: "",
    number: "",
    exp: "",
    cvv: "",
  });

  const toggleSwitch = () => {
    setIsChecked(!isChecked);
  };

  const getCardType = (number) => {
    const num = number.toString();
    const visaPattern = /^4/;
    const amexPattern = /^3[47]/;
    const masterCardPattern = /^5[1-5]/;

    if (visaPattern.test(num)) {
      return "visa";
    } else if (masterCardPattern.test(num)) {
      return "mastercard";
    } else if (amexPattern.test(num)) {
      return "amex";
    } else {
      return "";
    }
  };

  const handleCardInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "number") {
      let formattedValue = formatCardNumber(value);
      let cardType = getCardType(formattedValue);
      setCardType(cardType);
      setCardState((prevState) => ({ ...prevState, [name]: formattedValue }));
    } else {
      setCardState((prevState) => ({ ...prevState, [name]: value }));
    }
  };

  const formatCardNumber = (number) => {
    const numberWithoutSpaces = number.replace(/\s+/g, "");
    const formattedNumber = numberWithoutSpaces
      .replace(/(\d{4})/g, "$1 ")
      .trim();
    console.log(formattedNumber, "formattedNumber");

    return formattedNumber;
  };

  return (
    <div>
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
              {" "}
              <Typography sx={style.pageHeader}> {`$${totalCost}`}</Typography>
              <Typography sx={style.pageSubHeader}>
                {userDetails.email}
              </Typography>
            </div>
          </Box>
          <Typography sx={{ ...style.pageHeader, textAlign: "center" }}>
            {" "}
            {`Payment Details ${cardType}`}
          </Typography>
          <Box sx={{ ...style.authContainer, marginTop: "2rem" }}>
            <form
              onSubmit={getPaymentDetails}
              style={style.formContainer}
              type="submit">
              <input
                type="text"
                placeholder="card name"
                required
                name="name"
                value={cardState.name}
                onChange={handleCardInputChange}
                className="auth-inputfield"
              />
              <input
                type="text"
                placeholder="card number"
                required
                name="number"
                maxLength={16}
                value={cardState.number}
                className="auth-inputfield"
                onChange={handleCardInputChange}
              />
              <div className="auth-zipcodeinputfild">
                <input
                  type="text"
                  placeholder="Valid Through"
                  required
                  name="expiry"
                  value={cardState.exp}
                  onChange={handleCardInputChange}
                  className="auth-inputfieldzippayment"
                />
                <input
                  type="text"
                  placeholder="cvv"
                  required
                  maxlength="3"
                  name="cvc"
                  value={cardState.cvv}
                  onChange={handleCardInputChange}
                  className="auth-inputfieldzippayment"
                />
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
                  style={{
                    // Apply custom styles to the checkbox
                    background: isChecked ? "black" : "transparent",
                  }}
                />
                <span class="remeberCard"></span>
              </div>

              <button className="auth-inputfield-button" type="submit">
                Complete order
              </button>
            </form>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default Payment;
