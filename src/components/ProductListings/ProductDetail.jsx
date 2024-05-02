import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

import { Typography, Box, useMediaQuery } from "@mui/material";

import { style } from "../Style";
import Rating from "@mui/material/Rating";
import CartContext from "../../Context/Cart/CartContext";
import { productList } from "../../Asset/data";
import Modal from "../Modal/Modal";
import Alert from "@mui/material/Alert";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ProductListingDetailPage from "./ProductListingDetailPage";

function ProductDetail() {
  const isSmallScreen = useMediaQuery("(max-width: 768px)");

  const { id } = useParams();
  const [openModal, setOpenModal] = useState(false);
  const { cartItems, addToLike, removeFromLiked } = useContext(CartContext);
  const selectedProduct = productList.find((item) => item.id === Number(id));
  const [isSelected, setIsSelected] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [activeImg, setActiveImg] = useState(selectedProduct?.img);
  const [cartAlert, setCartAlert] = useState({ show: false, message: "" });
  const [activeImgIndex, setActiveImgIndex] = useState(0);
  const [otherProductList, setOtherProductList] = useState([]);

  const shoeTypeId = Number(id);
  const sideImgArr = [selectedProduct?.img, ...selectedProduct?.otherImgs];

  useEffect(() => {
    const otherProdList = productList.filter(
      (item) => item.shoeTypeId !== shoeTypeId
    );
    setOtherProductList(otherProdList);

    const selectedProductItems = cartItems.filter(
      (item) => item.shoeTypeId === shoeTypeId
    );
    setIsSelected(selectedProductItems.length);

    const storedLikedProducts = JSON.parse(localStorage.getItem("likedItems"));
    if (storedLikedProducts?.find((item) => item.id === selectedProduct.id)) {
      setIsLiked(true);
    }
  }, [cartItems]);

  const handleLikedProduct = (selectedProduct) => {
    setIsLiked(!isLiked);
    if (!isLiked) {
      addToLike(selectedProduct);
    } else {
      removeFromLiked(selectedProduct);
    }
  };

  const getTotalQuantity = () => {
    const selectedProductItems = cartItems.filter(
      (item) => item.shoeTypeId === shoeTypeId
    );
    return selectedProductItems.reduce(
      (total, item) => total + item.quantity,
      0
    );
  };

  const handleModal = () => {
    setOpenModal(!openModal);
  };

  const getItemCount = (itemCount) => {
    const message = `${itemCount} item${
      itemCount > 1 ? "s" : ""
    } added to your cart`;
    setCartAlert({ show: true, message: message });

    setTimeout(() => {
      setCartAlert((prevAlert) => ({ ...prevAlert, show: false }));
    }, 1000);
  };

  const getOtherImg = (item, index) => {
    setActiveImg(item);
    setActiveImgIndex(index);
  };

  const renderAddToCartButton = () => {
    if (isSelected !== 0) {
      const totalQty = getTotalQuantity();
      return (
        <Box sx={style.parentAddd}>
          <Typography sx={style.add} onClick={handleModal}>
            -
          </Typography>
          <Typography sx={style.addCount}>{totalQty}</Typography>{" "}
          <Typography sx={style.add} onClick={handleModal}>
            +
          </Typography>{" "}
        </Box>
      );
    } else {
      return (
        <Typography onClick={handleModal} sx={style.addToCartButton}>
          Add to Cart
        </Typography>
      );
    }
  };

  return (
    <Box sx={{ backgroundColor: "#ACACAC", padding: "2rem 0" }}>
      {cartAlert.show === true && (
        <Alert
          sx={{
            width: "100%",
            bgcolor: "#ACACAC",
            color: "black",
            position: "fixed",
            top: 0,
            zIndex: 1000,
          }}
          severity="success">
          {cartAlert.message}
        </Alert>
      )}
      <Box sx={style.productDetailContainer}>
        <Box sx={style.productDetail}>
          <Box sx={style.leftContainer}>
            <Box sx={style.sideImgThumbNails}>
              {sideImgArr.map((item, index) => (
                <Box
                  onClick={() => getOtherImg(item, index)}
                  sx={style.thumbNailContaner(index === activeImgIndex)}
                  key={index}>
                  <img
                    src={item}
                    alt={"producimg"}
                    style={style.thumbNailimg}
                  />
                </Box>
              ))}
            </Box>
            <Box sx={style.middleImage}>
              <img
                src={activeImg}
                alt={"producimg"}
                style={style.thumbNailimg}
              />
            </Box>
          </Box>
          <Box
            sx={{
              width: "40%",
              "@media screen and (max-width: 1250px)": {
                width: "40%",
              },
              "@media screen and (max-width: 1000px)": {
                width: "100%",
              },
            }}>
            <Box sx={style.productDesc}>
              <Box sx={style.productNameCost}>
                <Typography sx={style.productNamme}>
                  {selectedProduct.name}
                </Typography>
                <Typography
                  sx={{
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: "0.2rem",
                  }}
                  onClick={() => handleLikedProduct(selectedProduct)}>
                  {isLiked ? (
                    <FavoriteIcon
                      fontSize={isSmallScreen ? "small" : "medium"}
                    />
                  ) : (
                    <FavoriteBorderIcon
                      fontSize={isSmallScreen ? "small" : "medium"}
                    />
                  )}
                </Typography>
              </Box>
              <Box sx={style.productNameCost}>
                {!isSmallScreen && (
                  <Typography sx={style.productName}>
                    {selectedProduct.price}
                  </Typography>
                )}
                <Rating
                  sx={{
                    cursor: "pointer",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "0.3rem",
                  }}
                  name="size-small"
                  defaultValue={selectedProduct.ratings}
                  size={isSmallScreen ? "small" : "medium"}
                  readOnly
                />
                {isSmallScreen && (
                  <Typography sx={style.productName}>
                    {selectedProduct.price}
                  </Typography>
                )}
              </Box>

              <Box sx={style.parentSizesContainer}>
                <Typography sx={style.avSize}>Available Sizes:</Typography>
                <Box sx={style.parentSizesDetail}>
                  {selectedProduct.sizes.map((item, index) => (
                    <Typography
                      sx={style.sizes}
                      key={index}
                      onClick={handleModal}>
                      {item}
                    </Typography>
                  ))}
                </Box>
              </Box>
              <Typography sx={style.description}>
                {selectedProduct.description}
              </Typography>
              {renderAddToCartButton()}
            </Box>
          </Box>
        </Box>
      </Box>
      {/* <ProductListingDetailPage otherProductList={otherProductList} /> */}

      {openModal && (
        <Modal
          openModal={openModal}
          handleModal={handleModal}
          selectedProduct={selectedProduct}
          getItemCount={getItemCount}
        />
      )}
    </Box>
  );
}

export default ProductDetail;
