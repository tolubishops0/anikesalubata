import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import {
  Typography,
  Box,
  Card,
  CardContent,
  CardActionArea,
  CardMedia,
  Skeleton,
} from "@mui/material";
import { style } from "../Style";
import { productList } from "../../Asset/data";
import CartContext from "../../Context/Cart/CartContext";

function ProductListing() {
  const { addToCart, increase, cartItems, sumItems, itemCount } =
    useContext(CartContext);
  
  const { category } = useParams();
  const navigate = useNavigate();

  const getProductDetail = (id) => {
    navigate(`/${category}/${id}`);
  };

  // const isInCart = (product) => {
  //   return !!cartItems.find((item) => item.id === product.id);
  // };

  return (
    <Box sx={{ background: "#f8f8f8" }}>
      <Box sx={style.productListContainer}>
        <Box sx={style.productList}>
          {productList?.map((item, index) => (
            <Card
              key={index}
              sx={style.productCard}
              onClick={() => getProductDetail(item.id)}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="280"
                  image={item.img}
                  alt="product"
                />
                <CardContent>
                  <Typography>{item.name}</Typography>
                  <Typography>{item.price}</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default ProductListing;
