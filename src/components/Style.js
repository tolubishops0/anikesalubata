import bgimg from "../Asset/bgimg.jpg";

export const style = {
  navParentContainer: {
    // height: "10rem",
    background: "white",
  },
  navContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%",
    height: "6rem",
    margin: "0 auto",
  },
  parentsmallNavbar: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    gap: "1rem",
    width: "90%",
    paddingTop: "1.5rem",
    margin: "0 auto",
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
      // fontSize: "1.5rem",
    },
  },
  ShoppingCartOutlinedIcon: {
    position: "relative",
    cursor: "pointer",
  },
  prodCount: {
    position: "absolute",
    bottom: "55%",
    left: "90%",
    fontSize: "1.5rem",
    fontWeight: "700",
    color: "red",
  },
  heroSection: {
    position: "relative",
    overflow: "hidden",
    height: "75vh",
    "@media screen and (max-width: 768px)": {
      height: "50vh",
    },
    "@media screen and (max-width: 600px)": {
      height: "55vh",
    },
    "@media screen and (max-width: 350px)": {
      height: "70vh",
    },
  },
  img: {
    height: "100%",
    width: "100%",
  },
  textContainer: {
    position: "absolute",
    top: "20%",
    left: "5%",
    width: "55%",
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
    "@media screen and (max-width:1200px)": {
      width: "60%",
    },
    "@media screen and (max-width: 1000px)": {
      width: "75%",
    },
    "@media screen and (max-width: 768px)": {
      width: "90%",
    },
  },
  header: {
    fontSize: "3rem",
    fontWeight: "700",
    color: "white",
    "@media screen and (max-width: 768px)": {
      fontSize: "2.5rem",
    },
    "@media screen and (max-width: 500px)": {
      fontSize: "1.5rem",
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
  },
  bannerTextButton: {
    marginTop: "1rem",
    color: "black",
    backgroundColor: "white",
    fontWeight: "700",
    fontSize: "1.2rem",
    width: "35%",
    height: "4rem",
    borderRadius: "5px",
    transition: "background transform 1s ease",
    textTransform: "capitalize",
    "&:hover": {
      background: "red",
    },
    "@media screen and (max-width: 500px)": {
      width: "50%",
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
    // "@media screen and (max-width: 600px)": {
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
    borderRadius: "10px",
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
    "@media screen and (max-width: 768px)": {
      minWidth: "60%",
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
    width: "90%",
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: "1rem",
  },
  productDetailContainerTop: (iscartPresent) => ({
    width: "90%",
    margin: "0 auto",
    background: "white",
    border: "1px solid #f8f8f8",
    borderRadius: "10px",
    display: "flex",
    justifyContent: iscartPresent ? "center" : "space-between",
    alignItems: "center",
    padding: iscartPresent ? "1.5rem 0" : "1.5rem 0",
  }),
  productDetailContainerLeft: {
    width: "80%",
    background: "white",
    border: "1px solid #f8f8f8",
    borderRadius: "10px",
    padding: "1rem",
  },
  leftContainer: {
    display: "flex",
    gap: "1rem",
    width: "60%",
    "@media screen and (max-width: 600px)": {
      width: "100%",
      flexDirection: "column-reverse",
    },
  },
  productDetail: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "1rem",
    gap: "3rem",
    "@media screen and (max-width: 600px)": {
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
    "@media screen and (max-width: 600px)": {
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
    "@media screen and (max-width: 600px)": {
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
    "@media screen and (max-width: 600px)": {
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
  },
  parentSizes: {
    width: "98%",
    display: "flex",
    gap: "2rem",
    alignItems: "center",
    justifyContent: "space-between",
    "@media screen and (max-width: 600px)": {
      flexWrap: "wrap",
      gap: ".5rem",
    },
  },
  parentSizesDetail: {
    width: "98%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    "@media screen and (max-width: 600px)": {
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
  },
  cart4: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: "2rem",
    width: "100%",
  },
  cartItem: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    // justifyContent: "center",
  },
  cart3: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem",
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
    "@media screen and (max-width: 500px)": {
      flexWrap: "wrap",
      gap: "2.5rem",
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
  itemDescr: {
    fontSize: "0.95rem",
    fontWeight: "600",
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
  },
  emptyCartIcon: {
    width: "90%",
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
};
