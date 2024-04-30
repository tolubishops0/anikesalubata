import React, { useState, useEffect, useContext } from "react";
import { Box, Typography, Divider, useMediaQuery } from "@mui/material";
import { style } from "../Style";
import { useNavigate } from "react-router-dom";
import Modal from "../Modal/Modal";
import Alert from "@mui/material/Alert";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CartContext from "../../Context/Cart/CartContext";

function LikedItems() {
  const { addToLike, removeFromLiked } = useContext(CartContext);
  const navigate = useNavigate();
  const [likedProducts, setLikedProducts] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [cartAlert, setCartAlert] = useState({ show: false, message: "" });
  const [selectedProduct, setselectedProduct] = useState({});
  const [isLiked, setIsLiked] = useState(true);

  useEffect(() => {
    setLikedProducts(JSON.parse(localStorage.getItem("likedItems")));
  }, [isLiked]);

  const goToDetail = (item) => {
    navigate(`/products/${item.name}/${item.id}`);
  };
  const handleModal = () => {
    setOpenModal(!openModal);
  };
  const addToCart = (item) => {
    setselectedProduct(item);
  };
  const handleLikedProduct = (selectedProduct) => {
    setIsLiked(!isLiked);
    removeFromLiked(selectedProduct);
  };

  const getItemCount = (itemCount) => {
    const message = `${itemCount} item${
      itemCount > 1 ? "s" : ""
    } added to your cart`;
    setCartAlert({ show: true, message: message });

    setTimeout(() => {
      setCartAlert((prevAlert) => ({ ...prevAlert, show: false }));
    }, 2000);
  };
  return (
    <Box
      sx={{
        backgroundColor: "#ACACAC",
      }}>
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
      <Box
        sx={{
          width: "90%",
          margin: "0 auto",
          padding: "2rem 0",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          alignItems: "center",
          justifyContent: "center",
        }}>
        <Box sx={style.productDetailContainerTop}>
          <Typography sx={style.cartHeader}>
            {likedProducts.length > 0
              ? `Your Liked ${
                  likedProducts.length > 1 ? `items` : `item`
                }   : ${likedProducts.length}`
              : `You haven't liked any item yet`}
          </Typography>
        </Box>
        {likedProducts.length > 0 ? (
          <Box sx={style.parentlikedItemContainer}>
            {likedProducts.map((item, index) => (
              <Box
                sx={style.likedItemContainer}
                onClick={() => addToCart(item)}
                key={index}>
                <Box sx={style.likeding} onClick={() => goToDetail(item)}>
                  <img
                    src={item.img}
                    alt="productimg"
                    style={style.thumbNailimg}
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: ".5rem",
                    flex: "4",
                    "@media screen and (max-width: 768px)": {},
                  }}>
                  <Box sx={style.productNameCost}>
                    <Typography sx={style.productName}>{item.name}</Typography>
                    <Typography
                      sx={{ cursor: "pointer" }}
                      onClick={() => handleLikedProduct(selectedProduct)}>
                      {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                    </Typography>
                  </Box>
                  <Typography sx={style.description}>
                    {item.description}
                  </Typography>
                  <Typography sx={style.productName}>{item.price}</Typography>
                </Box>
                <Box
                  sx={{
                    flex: "1",
                    "@media screen and (max-width: 768px)": {
                      width: "100%",
                    },
                  }}>
                  <Typography
                    onClick={handleModal}
                    sx={style.addToCartButtonliked}>
                    Add to Cart
                  </Typography>
                </Box>
              </Box>
              //   </Box>
            ))}
          </Box>
        ) : (
          <Box sx={style.emptyCartIcon}>
            {/* <img src={emptycart} alt="empty cart img" /> */}
            <Typography
              sx={style.checkOut}
              onClick={() => navigate("/products/all")}>
              Back to shopping
            </Typography>
          </Box>
        )}
      </Box>
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

export default LikedItems;
