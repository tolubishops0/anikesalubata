import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

import { Typography, Box } from "@mui/material";
import sampleImg from "../../Asset/samplimg.jpg";
import { style } from "../Style";
import Rating from "@mui/material/Rating";
import CartContext from "../../Context/Cart/CartContext";
import { productList } from "../../Asset/data";
import Modal from "../Modal/Modal";

function ProductDetail() {
  const { id } = useParams();
  const [openModal, setOpenModal] = useState(false);
  const { cartItems } = useContext(CartContext);
  const selectedProduct = productList.find((item) => item.id === Number(id));
  const [isSelected, setIsSelected] = useState(false);
  const [activeImg, setActiveImg] = useState(selectedProduct?.img);
  const [activeImgIndex, setActiveImgIndex] = useState(0);
  const shoeTypeId = Number(id);

  useEffect(() => {
    const selectedProductItems = cartItems.filter(
      (item) => item.shoeTypeId === shoeTypeId
    );
    setIsSelected(selectedProductItems.length);
  }, [cartItems, shoeTypeId]);

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

  const getOtherImg = (item, index) => {
    setActiveImg(item);
    setActiveImgIndex(index);
  };

  const renderAddToCartButton = () => {
    if (isSelected !== 0) {
      const totalQty = getTotalQuantity();
      return (
        <Box sx={style.parentAdd}>
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
    <Box sx={{ backgroundColor: "#f8f8f8", padding: "2rem 0" }}>
      <Box sx={style.productDetailContainer}>
        <Box sx={style.productDetail}>
          <Box sx={style.leftContainer}>
            <Box sx={style.sideImgThumbNails}>
              {selectedProduct.otherImgs.map((item, index) => (
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
          <Box sx={{ width: "40%" }}>
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
                defaultValue={selectedProduct.ratings}
                size="small"
                readOnly
              />
              <Box sx={style.parentSizes}>
                <Typography sx={style.avSize}>Av. Sizes:</Typography>
                {selectedProduct.sizes.map((item, index) => (
                  <Typography
                    sx={style.sizes}
                    key={index}
                    onClick={handleModal}>
                    {item}
                  </Typography>
                ))}
              </Box>
              <Typography sx={style.description}>
                {selectedProduct.description}
              </Typography>
              {renderAddToCartButton()}
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