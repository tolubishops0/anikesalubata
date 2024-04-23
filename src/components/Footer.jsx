import React from "react";
import { style } from "./Style";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";
import Divider from "@mui/material/Divider";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";

function Footer() {
  const navigate = useNavigate();
  const handleCategory = (category) => {
    navigate(`/products/${category?.toLowerCase().replace(" ", "+")}`);
  };
  const currYear = new Date().getFullYear();

  return (
    <Box sx={{ background: "black" }}>
      <Box sx={style.footerContainer}>
        <Box sx={style.fotterCtegoryContainerIconsContainer}>
          <Typography
            sx={{ ...style.brandName, color: "white" }}
            onClick={() => navigate("/")}>
            Àníkẹ́ Sálúbàtà
          </Typography>{" "}
          <Box sx={style.fotterCtegoryContainer}>
            {footer1.map((item, index) => (
              <Typography
                onClick={() => handleCategory(item.value)}
                sx={style.footerCategories}
                key={index}>
                {item.name}
              </Typography>
            ))}
          </Box>
          <Box sx={style.fotterCtegoryContainer}>
            {footer2.map((item, index) => (
              <Typography
                onClick={() => handleCategory(item.value)}
                sx={style.footerCategories}
                key={index}>
                {item.name}
              </Typography>
            ))}
          </Box>
          <Box sx={style.fotterCtegoryContainerlinks}>
            {otherLinks.map((item, index) => (
              <Typography
                onClick={() => navigate(`/${item.link}`)}
                sx={style.footerCategories}
                key={index}>
                {item.name}
              </Typography>
            ))}
          </Box>
        </Box>
      </Box>
      <Divider sx={{ backgroundColor: "white" }} />
      <Box sx={{ background: "rgb(15, 15, 15)" }}>
        <Box sx={style.copyright}>
          <Box sx={style.fotterCtegoryContainerIcons}>
            {socialIcons.map((item, index) => (
              <Box
                key={index}
                sx={{ cursor: "pointer" }}
                onClick={() => window.open(item.link, "_blank")}>
                {item.icon}
              </Box>
            ))}
          </Box>{" "}
          <Box>
            Copyright ©️ {currYear}{" "}
            <span style={{ fontStyle: "italic" }}>Àníkẹ́ Sálúbàtà</span> . All
            rights reserved.
          </Box>{" "}
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;

const socialIcons = [
  {
    icon: <FacebookOutlinedIcon style={{ color: "white" }} />,
    link: "https://web.facebook.com/anikesalubata",
  },
  {
    icon: <XIcon style={{ color: "white" }} />,
    link: "https://twitter.com/tolubishops",
  },
  {
    icon: <InstagramIcon style={{ color: "white" }} />,
    link: "https://www.instagram.com/anikesalubata/",
  },
];

const footer1 = [
  {
    name: "All",
    value: "all",
  },
  {
    name: "Loafers",
    value: "loafers",
  },
  {
    name: "Corporate",
    value: "corporate",
  },
];
const footer2 = [
  {
    name: "Boots",
    value: "boots",
  },
  {
    name: "Men's Slides",
    value: "men+slides",
  },
  {
    name: "Women's Slides",
    value: "womenslides",
  },
];

const otherLinks = [
  {
    name: "Sign-in",
    link: "login",
  },
  {
    name: "Sign-up",
    link: "signup",
  },
  {
    name: "Go to cart",
    link: "cart",
  },
  // {
  //   name: "About Us",
  //   link: "",
  // },
];
