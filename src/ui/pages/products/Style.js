import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  productsImg: {
    transition: "1s",
    width: "100% ",
    // height: "274px",
    cursor: "pointer",
    "&:hover": {
      boxShadow: "0px 49px 50px -33px rgba(0, 0, 0, 0.25)",
    },
    [theme.breakpoints.down(600)]: {
      width: "50% ",
    },
  },
  hoeverContainer: {
    boxShadow: "0px 0px 31px rgba(0, 0, 0, 0.06)",
    height: "auto",
    borderRadius: "10px",
    padding: "17px 8px",
    [theme.breakpoints.down(600)]: {
      padding: "15px 10px",
    },
  },
  productsImgCat: {
    transition: "1s",
    width: "100% ",
    // height: "274px",
    cursor: "pointer",
    "&:hover": {
      boxShadow: "0px 49px 50px -33px rgba(0, 0, 0, 0.25)",
    },
    [theme.breakpoints.down(600)]: {
      width: "100% ",
    },
  },
}));
