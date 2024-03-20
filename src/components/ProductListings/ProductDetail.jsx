import React, { useState, useEffect, useContext } from "react";
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
import sampleImg from "../../Asset/samplimg.jpg";
import { style } from "../Style";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Rating from "@mui/material/Rating";
import CartContext from "../../Context/Cart/CartContext";
import { productList } from "../../Asset/data";
import Modal from "../Modal/Modal";

function ProductDetail() {
  const { id } = useParams();
  const [openModal, setOpenModal] = useState(false);

  const selectedProduct = productList.find((item) => item.id === Number(id));

  // const { addToCart, increase, decrease, cartItems, sumItems, itemCount } =
  //   useContext(CartContext);

  const { removeFromCart, increase, decrease, itemCount } =
    useContext(CartContext);
  // const isInCart = (product) => {
  //   return !!cartItems.find((item) => item.id === product.id);
  // };

  const handleModal = () => {
    setOpenModal(!openModal);
  };
  return (
    <Box sx={{ backgroundColor: "#f8f8f8", padding: "2rem 0" }}>
      <Box sx={style.productDetailContainer}>
        <Box sx={style.productDetail}>
          <Box sx={style.leftContainer}>
            <Box sx={style.sideImgThumbNails}>
              {selectedProduct.otherImgs.map((item, index) => (
                <Box sx={style.thumbNailContaner}>
                  {" "}
                  <img
                    key={index}
                    src={item}
                    alt={"producimg"}
                    style={style.thumbNailimg}
                  />
                </Box>
              ))}
            </Box>
            <Box sx={style.middleImage}>
              <img
                src={sampleImg}
                alt={"producimg"}
                style={style.thumbNailimg}
              />
            </Box>
          </Box>
          <Box sx={{ width: "50%" }}>
            <Box sx={style.productDesc}>
              <Box sx={style.productNameCost}>
                <Typography sx={style.productName}>
                  {selectedProduct.name}
                </Typography>
                <Typography sx={style.productName}>
                  {selectedProduct.price}
                </Typography>
              </Box>
              <Rating
                name="size-small"
                defaultValue={2}
                size="small"
                readOnly
              />
              <Box sx={style.parentSizes}>
                {/* <Box sx={style.parentAdd}> */}
                <Typography>Av. Sizes:</Typography>
                {selectedProduct.sizes.map((item, index) => (
                  <Typography
                    sx={style.sizes}
                    key={index}
                    onClick={handleModal}>
                    {item}
                  </Typography>
                ))}

                {/* <Typography
                  sx={style.add}
                  onClick={() => {
                    decrease(selectedProduct);
                  }}>
                  -
                </Typography>
                <Typography sx={style.addCount}>{itemCount}</Typography>
                <Typography
                  sx={style.add}
                  onClick={() => {
                    increase(selectedProduct);
                  }}>
                  +
                </Typography> */}
              </Box>
              <Typography sx={style.description}>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
                sunt eligendi, velit error explicabo ut fugit quidem quas at
                voluptate accusamus hic, tempora voluptate accusamus hic,
                tempora{" "}
              </Typography>

              <Typography
                onClick={handleModal}
                // onClick={() => addToCart(selectedProduct)}
                sx={style.addToCartButton}>
                {" "}
                Add to Cart
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      {openModal && (
        <Modal
          openModal={openModal}
          handleModal={handleModal}
          selectedProduct={selectedProduct}
        />
      )}
    </Box>
  );
}

export default ProductDetail;
