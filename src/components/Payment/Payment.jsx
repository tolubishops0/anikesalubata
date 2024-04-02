import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Box, Typography, Divider } from "@mui/material";
import { style } from "../Style";
import CartContext from "../../Context/Cart/CartContext";

function Payment() {
  const navigate = useNavigate();
  const { authState } = useContext(CartContext);
  const { userDetails } = authState || {};

  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expMonth, setExpMonth] = useState("");
  const [expYear, setExpYear] = useState("");
  const [cvv, setCvv] = useState("");

  const getPaymentDetails = () => {
    const cardDetails = {
      cardName: cardName,
      cardNumber: cardNumber,
      expMonth: expMonth,
      expYear: expYear,
      cvv: cvv,
    };
    // console.log(address);
    if (cardDetails) {
      //   navigate("/payments");
    }
  };

  return (
    <div>
      <Box>
        <Box sx={{ backgroundColor: "#ACACAC", padding: "2rem 0" }}>
          <Box sx={style.authContainer}>
            <Typography sx={style.pageHeader}> Delivery Details</Typography>
            <form
              onSubmit={getPaymentDetails}
              style={style.formContainer}
              type="submit">
              <input
                type="text"
                placeholder="card name"
                required
                value={cardName}
                onChange={(e) => setCardName(e.target.value)}
                className="auth-inputfield"
              />
              <input
                type="number"
                placeholder="card number"
                required
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                className="auth-inputfield"
              />
              <div className="auth-zipcodeinputfild">
                <input
                  type="text"
                  placeholder="expYear"
                  required
                  value={expYear}
                  onChange={(e) => setExpYear(e.target.value)}
                  className="auth-inputfieldzippayment"
                />
                <input
                  type="number"
                  placeholder="expitation month"
                  required
                  value={expMonth}
                  onChange={(e) => setExpMonth(e.target.value)}
                  className="auth-inputfieldzippayment"
                />
                <input
                  type="text"
                  placeholder="cvv"
                  required
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value)}
                  className="auth-inputfieldzippayment"
                />
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
