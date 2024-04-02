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

  const [isChecked, setIsChecked] = useState(false);
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

  const toggleSwitch = () => {
    setIsChecked(!isChecked);
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
              <Typography sx={style.pageHeader}>
                {" "}
                {parseFloat(totalCost.replace("$", ""))}
              </Typography>
              <Typography sx={style.pageSubHeader}>
                {userDetails.email}
              </Typography>
            </div>
          </Box>
          <Box sx={{ ...style.authContainer, marginTop: "2rem" }}>
            <Typography sx={style.pageHeader}> Payment Details</Typography>
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
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  gap: "1rem",
                  marginRight: "auto",
                }}>
                <Typography sx={style.pageHeader}>
                  Remember this card
                </Typography>
                <div className="switch-container">
                  <label className="switch">
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={toggleSwitch}
                    />
                    <span className="slider round"></span>
                  </label>
                  <span className="switch-label">{isChecked}</span>
                </div>
                {/* <div>
                <p>remember this card nex time</p> */}

                {/* </div> */}
              </Box>
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
