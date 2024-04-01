import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Box, Typography, Divider } from "@mui/material";
import { style } from "../Style";
import CartContext from "../../Context/Cart/CartContext";

function Delivery() {
  const { authState } = useContext(CartContext);
  const { userDetails } = authState || {};

  console.log(userDetails);

  const [name] = useState(userDetails?.name);
  const [email] = useState(userDetails?.email);
  const [phone, setPhone] = useState("");
  const [street, setStreet] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [zipcode, setZipCode] = useState("");

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        if (!response.ok) {
          throw new Error("Failed to fetch countries");
        }
        const data = await response.json();
        setCountries(data);
        // console.log(data, "cuntries");
      } catch (error) {
        console.error("Error fetching countries:", error.message);
      }
    };

    // Call the function
    fetchCountries();
  }, []);

  const countriesList = [
    {
      name: "select your country",
      id: "",
    },
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
            // onSubmit={registerUser}
            style={style.formContainer}
            type="submit">
            <input
              type="address"
              placeholder="name"
              required
              value={name}
              // onChange={(e) => setName(e.target.value)}
              className="auth-inputfield"
            />
            <input
              type="email"
              placeholder="email"
              required
              value={email}
              // onChange={(e) => setEmail(e.target.value)}
              className="auth-inputfield"
            />
            <input
              type="email"
              placeholder="phonenumber"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="auth-inputfield"
            />
            <input
              type="text"
              placeholder="street"
              required
              value={street}
              onChange={(e) => setStreet(e.target.value)}
              className="auth-inputfield"
            />

            <select className="auth-inputfield" placeholder="phonenumber">
              {countriesList.map((item, index) => (
                <option onSelect={() => setCountry(item)} key={index}>
                  {item.name}
                </option>
              ))}
            </select>

            <input
              type="text"
              placeholder="state"
              required
              value={state}
              onChange={(e) => setState(e.target.value)}
              className="auth-inputfield"
            />
            <div className="auth-zipcodeinputfild">
              <input
                type="text"
                placeholder="city"
                required
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="auth-inputfieldzipcdp"
              />
              <input
                type="number"
                placeholder="zipCode"
                required
                value={zipcode}
                onChange={(e) => setZipCode(e.target.value)}
                className="auth-inputfieldzipcdp"
              />
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
