import bgimg from "../Asset/bgimg.jpg";

export const style = {
  navParentContainer: {
    // height: "10rem",
    background: "white",
    // padding: "1rem 0",
  },
  navContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%",
    height: "6rem",
    margin: "0 auto",
  },
  navContainersmsearch: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    margin: "0 auto 1rem auto",
  },
  smallNavbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  brandName: {
    fontFamily: "Dancing Script cursive",
    fontOpticalSizing: "auto",
    fontWeight: "600",
    fontStyle: "italic",
    fontSize: "2rem",
    cursor: "pointer",
    "@media screen and (max-width:1200px)": {
      fontSize: "1.6rem",
      fontWeight: "700",
    },
    "@media screen and (max-width:1000px)": {
      fontSize: "1.8rem",
    },
    "@media screen and (max-width:600px)": {
      fontSize: "1.5rem",
    },
    "@media screen and (max-width:450px)": {
      fontSize: "1.3rem",
    },
  },
  UserName: {
    fontWeight: "600",
    fontSize: "1rem",
    cursor: "pointer",
    "@media screen and (max-width:600px)": {
      fontSize: "0.8rem",
    },
  },
  ShoppingCartOutlinedIcon: {
    position: "relative",
    cursor: "pointer",
    display: "flex",
  },
  rightNav: {
    display: "flex",
    gap: "2rem",
    alignItems: "flex-end",
    "@media screen and (max-width:1200px)": {
      gap: ".5rem",
    },
  },
  prodCount: {
    position: "absolute",
    bottom: "55%",
    left: "90%",
    fontSize: "1.2rem",
    fontWeight: "700",
    color: "red",
    "@media screen and (max-width: 768px)": {
      fontSize: "1rem",
      left: "85%",
    },
  },
  heroSection: {
    backgroundImage: `url(${bgimg})`,
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundSize: "cover",
    backgroundPosition: "bottom right",
    backgroundRepeat: "no-repeat",
    "@media screen and (max-width: 768px)": {
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    },
  },
  img: {
    height: "100%",
    width: "100%",
  },
  textContainer: {
    padding: "5rem 0 ",
    width: "90%",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
    "@media screen and (max-width:1200px)": {
      width: "90%",
    },
    "@media screen and (max-width: 1000px)": {
      // width: "75%",
    },
    "@media screen and (max-width: 768px)": {
      width: "90%",
      gap: ".8rem",
    },
  },
  header: {
    fontSize: "3rem",
    fontWeight: "700",
    lineHeight: "6rem",
    color: "white",
    "@media screen and (max-width:1300px)": {
      fontSize: "2rem",
    },
    "@media screen and (max-width: 1000px)": {
      // width: "75%",
    },
    "@media screen and (max-width: 768px)": {
      fontSize: "2rem",
    },
    "@media screen and (max-width: 500px)": {
      fontSize: "1.5rem",
      lineHeight: "2.5rem",
    },
    "@media screen and (max-width: 400px)": {
      fontSize: "1.3rem",
    },
    "@media screen and (max-width: 350px)": {
      fontSize: "1.2rem",
    },
  },
  header2: {
    fontSize: "1.5rem",
    fontWeight: "500",
    fontStyle: "italic",
    color: "white",
    "@media screen and (max-width: 768px)": {
      fontSize: "1.2rem",
    },
    "@media screen and (max-width: 500px)": {
      fontSize: "1rem",
    },
    "@media screen and (max-width: 400px)": {
      fontSize: "0.95rem",
    },
  },
  bannerTextButton: {
    marginTop: "1rem",
    color: "black",
    backgroundColor: "white",
    fontWeight: "700",
    fontSize: "1.2rem",
    width: "20%",
    height: "4rem",
    borderRadius: "5px",
    transition: "background transform 1s ease",
    textTransform: "capitalize",
    "&:hover": {
      background: "gray",
    },
    "@media screen and (max-width: 768px)": {
      width: "50%",
    },
    "@media screen and (max-width: 350px)": {
      fontSize: "1rem",
    },
  },
  categoryContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%",
    height: "4rem",
    margin: "0 auto",
    overflowX: "scroll",
    flexWrap: "no-wrap",
    "&::-webkit-scrollbar": {
      display: "none",
    },
    "@media screen and (max-width: 500px)": {
      gap: "2rem",
    },
  },
  categoryList: {
    fontSize: "1rem",
    fontWeight: "600",
    transition: "color transform 5s ease-in-out",
    cursor: "pointer",
    padding: ".5rem",
    textTransform: "capitalize",
    minWidth: "fit-content",
    "&:hover": {
      color: "gray",
    },
    "@media screen and (max-width: 500px)": {
      minWidth: "fit-content",
    },
  },
  pageHeader: {
    fontSize: "1rem",
    fontWeight: "600",
    textTransform: "capitalize",
  },
  pageSubHeader: {
    fontSize: "1rem",
    fontWeight: "400",
    textAlign: "center",
    "@media screen and (max-width: 500px)": {
      fontSize: ".8rem",
    },
  },
  footerCategories: {
    fontSize: "1rem",
    fontWeight: "600",
    transition: "color transform 5s ease-in-out",
    cursor: "pointer",
    width: "fit-content",
    textAlign: "left",
    padding: ".5rem",
    color: "white",
    textTransform: "capitalize",
  },
  selectedcategoryList: {
    fontSize: "1rem",
    fontWeight: "600",
    transition: "color transform 5s ease-in-out",
    cursor: "pointer",
    // width: "fit-content",
    textAlign: "left",
    padding: ".5rem 1rem",
    textTransform: "capitalize",
    color: "white",
    background: "black",
    textAlign: "center",
    minWidth: "fit-content",
    // "@media screen and (max-width: 768px)": {
    //   minWidth: "60%",
    // },
  },
  productList: {
    display: "flex",
    overflowX: "scroll",
    flexWrap: "no-wrap",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: "1.5rem",
    width: "90%",
    margin: "0 auto",

    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
  productListContainer: {
    padding: "3rem 0",
  },
  productCard: {
    minWidth: "25%",
    border: "0",
    boxShadow: "0",
    borderRadius: "5px",
    "@media screen and (max-width: 768px)": {
      minWidth: "75%",
    },
    // "&:hover": {
    //   background: "none",
    // },
  },
  footerContainer: {
    width: "90%",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
    padding: "2rem 0",
  },
  productDetailContainer: {
    width: "90%",
    margin: "0 auto",
    background: "white",
    border: "1px solid #f8f8f8",
    borderRadius: "10px",
  },
  cartContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: "1rem",
    "@media screen and (max-width: 768px)": {
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  productDetailContainerTop: (iscartEmpty, isSmallScreen) => ({
    width: "100%",
    margin: "0 auto",
    background: "white",
    border: "1px solid #f8f8f8",
    borderRadius: "10px",
    display: "flex",
    justifyContent: iscartEmpty
      ? "center"
      : isSmallScreen
      ? "center"
      : "space-between",
    alignItems: "center",
    padding: iscartEmpty ? "1rem 0" : "1rem 0",
  }),
  productDetailContainerLeft: {
    width: "80%",
    background: "white",
    border: "1px solid #f8f8f8",
    borderRadius: "10px",
    padding: " 1.5rem 1rem",
    "@media screen and (max-width: 768px)": {
      width: "95%",
    },
    "@media screen and (max-width: 600px)": {
      width: "95%",
      padding: " 1rem .5rem",
    },
  },
  parentRigthContainer: {
    width: "20%",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    "@media screen and (max-width: 768px)": {
      width: "100%",
    },
  },
  leftContainer: {
    display: "flex",
    gap: "1rem",
    width: "60%",
    "@media screen and (max-width: 768px)": {
      width: "100%",
      flexDirection: "column-reverse",
    },
  },
  rightContainer: {
    background: "white",
    border: "1px solid #f8f8f8",
    borderRadius: "10px",
    display: "flex",
    gap: ".8rem",
    flexDirection: "column",
    padding: "1rem",
    // "@media screen and (max-width: 768px)": {
    //   width: "100%",
    //   flexDirection: "column-reverse",
    // },
  },
  productDetail: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "1rem",
    gap: "3rem",
    "@media screen and (max-width: 768px)": {
      flexDirection: "column",
    },
  },
  avSize: {
    fontWeight: "600",
    fontSize: ".9rem",
  },
  sideImgThumbNails: {
    width: "10%",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    "@media screen and (max-width: 768px)": {
      flexDirection: "row",
      width: "100%",
    },
  },
  thumbNailContaner: (isActive) => ({
    width: "100%",
    height: "4rem",
    borderRadius: "10px",
    cursor: "pointer",
    border: isActive ? "2px solid black" : "1.5px solid transparent",
    "@media screen and (max-width: 768px)": {
      width: "20%",
      height: "4rem",
    },
  }),
  thumbNailimg: {
    width: "100%",
    height: "100%",
    borderRadius: "10px",
  },
  middleImage: {
    width: "90%",
    height: "23rem",
    "@media screen and (max-width: 768px)": {
      width: "100%",
      height: "18rem",
    },
  },
  parentSizesContainer: {
    display: "flex",
    gap: ".5rem",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "column",
    "@media screen and (max-width: 768px)": {
      gap: "1rem",
    },
  },
  parentSizes: {
    width: "98%",
    display: "flex",
    gap: "2rem",
    alignItems: "center",
    justifyContent: "space-between",
    "@media screen and (max-width: 768px)": {
      flexWrap: "wrap",
      gap: ".5rem",
    },
  },
  parentSizesDetail: {
    width: "98%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    "@media screen and (max-width: 768px)": {
      flexWrap: "wrap",
      gap: ".5rem",
    },
  },
  parentContainer: {
    display: "flex",
    gap: "2rem",
    alignItems: "center",
    flexDirection: "column",
    // justifyContent: "center",
  },
  parentAdd: {
    display: "flex",
    gap: "3rem",
    justifyContent: "space-between",
    alignItems: "center",
    "@media screen and (max-width: 768px)": {
      gap: "1.5rem",
    },
  },
  sizes: {
    padding: ".2rem .8rem",
    background: "black",
    color: "white",
    textAlign: "center",
    cursor: "pointer",
    fontSize: "0.9rem",
    fontWeight: "500",
  },
  add: {
    padding: ".2rem .8rem",
    background: "black",
    color: "white",
    textAlign: "center",
    cursor: "pointer",
  },
  disable: {
    padding: ".2rem .8rem",
    background: "gray",
    color: "black",
    textAlign: "center",
  },
  addCount: {
    fontWeight: "600",
  },
  description: {
    fontWeight: "500",
    fontSize: "1.05rem",
  },
  addToCartButton: {
    padding: "0.6rem 0",
    background: "black",
    // borderRadius: "5px",
    width: "100%",
    color: "white",
    fontWeight: "600",
    textAlign: "center",
    cursor: "pointer",
    "&:hover": {
      color: "gray",
    },
  },
  productNameCost: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  productName: {
    fontWeight: "600",
    fontSize: "1.2rem",
  },
  productDesc: {
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
    "@media screen and (max-width: 768px)": {
      gap: "1rem",
    },
  },
  buttonContainer: {
    width: "90%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: ".5rem auto",
  },
  titleContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  buttonContinue: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    border: "1px solid black",
    borderRadius: "5px",
    color: "black",
    width: "45%",
    height: "3rem",
    cursor: "pointer",
  },
  buttonGoToCart: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    border: "1px solid black",
    borderRadius: "5px",
    color: "white",
    width: "45%",
    height: "3rem",
    backgroundColor: " black",
    cursor: "pointer",
  },
  cartimg: {
    width: "10%",
    height: "4rem",
    cursor: "pointer",
    "@media screen and (max-width: 900px)": {
      width: "25%",
      height: "6rem",
    },
    "@media screen and (max-width: 600px)": {
      width: "40%",
      height: "4.5rem",
    },
  },
  cart4: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: "2rem",
    width: "100%",
    "@media screen and (max-width: 768px)": {
      gap: "1rem",
    },
  },
  cartItem: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    // justifyContent: "center",
    "@media screen and (max-width: 768px)": {
      gap: "1rem",
    },
  },
  cart3: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cart9: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
  },
  cart10: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  fotterCtegoryContainer: {
    display: "flex",
    // justifyContent: "space-between",
    alignItems: "flex-start",
    flexDirection: "column",
  },
  fotterCtegoryContainerlinks: {
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
  },
  fotterCtegoryContainerIconsContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    "@media screen and (max-width: 600px)": {
      flexDirection: "column",
      flexWrap: "wrap",
      gap: "1.5rem",
      // justifyContent: "space-between",
      alignItems: "flex-start",
    },
  },
  fotterCtegoryContainerIcons: {
    display: "flex",
    justifyContent: "center",
    alignItems: "right",
    gap: "1.5rem",
  },
  copyright: {
    width: "90%",
    margin: "0 auto",
    color: "white",
    padding: "1rem 0",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "@media screen and (max-width: 500px)": {
      flexDirection: "column",
      textAlign: "center",
      fontSize: "0.8rem",
      gap: "1rem",
    },
  },
  parentStyle: {
    display: "flex",
    gap: "1rem",
    flexDirection: "column",
  },
  prodListName: {
    color: "black",
    fontSize: "1rem",
    fontWeight: "600",
    textTransform: "capitalize",
    "@media screen and (max-width: 768px)": {
      fontSize: "0.7rem",
    },
  },
  prodListCost: {
    color: "grey",
    fontSize: "1rem",
    fontWeight: "600",
    textTransform: "capitalize",
  },
  cartHeader: {
    fontWeight: "600",
    fontSize: "0.95rem",
    margin: "0 1rem",
  },
  cartHeaderSmall: {
    fontWeight: "600",
    fontSize: "0.95rem",
    margin: "0 1rem",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  itemDescr: {
    fontSize: "0.95rem",
    fontWeight: "600",
    "@media screen and (max-width: 600px)": {
      fontSize: "0.8rem",
    },
  },
  checkOut: {
    fontWeight: "600",
    fontSize: ".8rem",
    color: "white",
    padding: "1rem",
    background: "black",
    textAlign: "center",
    cursor: "pointer",
    "&:hover": {
      color: "gray",
    },
  },
  subTotal: {
    fontSize: "0.8rem",
    fontWeight: "600",
    "@media screen and (max-width: 768px)": {
      fontSize: "1rem",
    },
  },
  emptyCartIcon: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 auto",
    flexDirection: "column",
    gap: "2rem",
    background: "white",
    border: "1px solid #f8f8f8",
    borderRadius: "10px",
    padding: "4rem 0",
  },
  sizesmodal: {
    fontSize: "0.8rem",
    fontWeight: "600",
    color: "black",
  },
  title: {
    fontSize: "1rem",
    fontWeight: "600",
  },
  cancleButoon: {
    fontSize: "1rem",
    fontWeight: "600",
    color: "black",
    cursor: "pointer",
  },
  authContainer: {
    width: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    margin: "0 auto",
    gap: "1rem",
    "@media screen and (max-width: 768px)": {
      width: "90%",
    },
  },
  formContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    gap: "2rem",
  },
  buttonGoogleIcon: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "black",
    height: "3rem",
    borderRadius: "5px",
    backgroundColor: "black",
    boxShadow: "none",
    boxShadow: "none",
    outline: "none",
    border: 0,
    padding: "0 1rem",
    boxSizing: "border-box",
    color: "white",
    cursor: "pointer",
  },
  goggleButon: {
    fontSize: "0.8rem",
    fontWeight: "600",
  },
  payinptu: {
    width: "100%",
    border: "1px black thin",
    borderRadius: "5px",
    backgroundColor: "white",
    boxShadow: "none",
    // height: "3rem",
  },
  inputContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    gap: "0.8rem",
  },

  error: {
    color: "red",
    fontSize: "0.8rem",
  },
  loaderContainer: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "rgba(0, 0, 0, 0.5)",
    zIndex: 50,
  },
  loader: {
    border: "8px solid #2196f3",
    borderRadius: "50%",
    width: 48,
    height: 48,
  },
};
