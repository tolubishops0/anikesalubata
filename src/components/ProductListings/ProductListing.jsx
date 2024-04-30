import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import {
  Typography,
  Box,
  Card,
  CardContent,
  CardActionArea,
  CardMedia,
} from "@mui/material";
import { style } from "../Style";
import { productList } from "../../Asset/data";
import CartContext from "../../Context/Cart/CartContext";

function ProductListing() {
  const { prodList, setProdList } = useContext(CartContext);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get("q");
  const { category } = useParams();

  const shuffleArray = (array) => {
    const shuffledArray = [...array]; 
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };

  useEffect(() => {
    let shuffledProducts = shuffleArray(productList); 
    if (category) {
      if (category === "all") {
        shuffledProducts = shuffleArray(shuffledProducts);
      } else {
        shuffledProducts = shuffledProducts.filter(
          (product) =>
            product.name?.toLowerCase().includes(category.replace(" ", "+")) ||
            product.description
              ?.toLowerCase()
              .includes(category.toLowerCase()) ||
            product.searchEng
              ?.toLowerCase()
              .includes(category.replace(" ", "+"))
        );
      }
    }
    setProdList(shuffledProducts); // Set the shuffled array as the product list
  }, [category]);

  useEffect(() => {
    if (searchTerm) {
      const results = productList.filter(
        (product) =>
          product.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.description
            ?.toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          product.searchEng?.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setProdList(shuffleArray(results)); // Shuffle the filtered results
    }
  }, [searchTerm]);

  const getProductDetail = (id) => {
    const url = searchTerm
      ? `/products/${searchTerm}/${id}`
      : `/products/${category}/${id}`;
    navigate(url);
  };

  return (
    <>
      <Box sx={{ background: "#ACACAC" }}>
        <Box sx={style.productListContainer}>
          <Box sx={style.productList}>
            {prodList?.map((item, index) => (
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
                  <CardContent sx={style.parentStyle}>
                    <Typography sx={style.prodListName}>{item.name}</Typography>
                    <Typography sx={style.prodListCost}>
                      {item.price}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default ProductListing;
