import bgimg from "../Asset/bgimg.jpg";

export const style = {
  navParentContainer: {
    // height: "10rem",
  },
  navContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%",
    height: "8rem",
    margin: "0 auto",
  },
  brandName: {
    fontFamily: "Dancing Script cursive",
    fontOpticalSizing: "auto",
    fontWeight: "600",
    fontStyle: "italic",
    fontSize: "3rem",
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
    height: "80vh",
  },
  img: {
    height: "100%",
    width: "100%",
  },
  textContainer: {
    position: "absolute",
    top: "20%",
    left: "5%",
    width: "50%",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  header: {
    fontSize: "3rem",
    fontWeight: "700",
  },
  header2: {
    fontSize: "1.5rem",
    fontWeight: "500",
    fontStyle: "italic",
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
  },
};
