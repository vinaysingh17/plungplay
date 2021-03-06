import React from "react";
import {
  Container,
  Box,
  Divider,
  TextField,
  Button,
  Grid,
  Alert,
} from "@mui/material/";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import emailjs from "@emailjs/browser";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";
import Snackbar from "@mui/material/Snackbar";
import { useStyles } from "./Style";
import { Link } from "react-router-dom";

const initialForm = { name: "", email: "", contact: "", message: "" };
const Food = () => {
  const classes = useStyles();
  const [active, setActive] = React.useState();
  const [open, setOpen] = React.useState(false);
  const [formData, setFormData] = React.useState(initialForm);
  const [openToast, setOpenToast] = React.useState({ open: false, msg: "" });
  const [loader, setLoader] = React.useState(false);
  const [pasta, setPasta] = React.useState([
    {
      price: "25",
    },
    {
      price: "25",
    },
    {
      price: "25",
    },
    {
      price: "149",
    },
    {
      isMultiple: true,
      Fields: [
        {
          gram: "500",
          price: "149",
        },
        {
          gram: "5",
          price: "999",
        },
      ],
    },
    {
      isMultiple: true,
      Fields: [
        {
          gram: "500",
          price: "149",
        },
        {
          gram: "5",
          price: "999",
        },
      ],
    },
    {
      isMultiple: true,
      Fields: [
        {
          gram: "500",
          price: "149",
        },
        {
          gram: "5",
          price: "999",
        },
      ],
    },
    {
      isMultiple: true,
      Fields: [
        {
          gram: "200",
          price: "69",
        },
        {
          gram: "500",
          price: "149",
        },
        {
          gram: "5",
          price: "999",
        },
      ],
    },
    {
      price: "149",
    },
    {
      price: "149",
    },

    {
      price: "159",
    },
    {
      price: "159",
    },
    {
      price: "169",
    },
    {
      price: "20",
    },
    {
      price: "149",
    },

    {
      price: "169",
    },
    {
      price: "169",
    },
    {
      price: "169",
    },
    {
      price: "169",
    },
    {
      price: "79",
    },
    {
      price: "79",
    },
    {
      price: "159",
    },
    {
      price: "159",
    },
    {
      price: "159",
    },
    {
      price: "69",
    },
  ]);
  const [sauces, setSauces] = React.useState([
    {
      isMultiple: true,
      Fields: [
        {
          gram: "200",
          price: "89",
        },
        {
          gram: "400",
          price: "139",
        },
      ],
    },
    {
      price: "69",
    },
    {
      price: "1",
    },
    {
      isMultiple: true,
      Fields: [
        {
          gram: "200",
          price: "89",
        },
        {
          gram: "400",
          price: "139",
        },
      ],
    },
    {
      price: "139",
    },
    {
      isMultiple: true,
      Fields: [
        {
          gram: "1",
          price: "139",
        },
        {
          gram: "5",
          price: "349",
        },
      ],
    },
  ]);
  const [jam, setJam] = React.useState([
    "199",
    "199",
    "199",
    "199",
    "199",
    "199",
    "199",
    "199",
  ]);
  const [healthySnack, sethealthySnack] = React.useState([
    {
      isMultiple: true,
      Fields: [
        {
          gram: "50",
          price: "40",
        },
        {
          gram: "100",
          price: "80",
        },
      ],
    },
    {
      isMultiple: true,
      Fields: [
        {
          gram: "50",
          price: "40",
        },
        {
          gram: "100",
          price: "80",
        },
      ],
    },
    {
      isMultiple: true,
      Fields: [
        {
          gram: "50",
          price: "40",
        },
        {
          gram: "100",
          price: "80",
        },
      ],
    },
    {
      isMultiple: true,
      Fields: [
        {
          gram: "50",
          price: "40",
        },
        {
          gram: "100",
          price: "80",
        },
      ],
    },
    {
      isMultiple: true,
      Fields: [
        {
          gram: "50",
          price: "40",
        },
        {
          gram: "100",
          price: "80",
        },
      ],
    },
    {
      isMultiple: true,
      Fields: [
        {
          gram: "50",
          price: "40",
        },
        {
          gram: "100",
          price: "80",
        },
      ],
    },

    {
      isMultiple: true,
      Fields: [
        {
          gram: "40",
          price: "99",
        },
        {
          gram: "65",
          price: "149",
        },
      ],
    },
    {
      isMultiple: true,
      Fields: [
        {
          gram: "40",
          price: "99",
        },
        {
          gram: "65",
          price: "149",
        },
      ],
    },
    {
      isMultiple: true,
      Fields: [
        {
          gram: "40",
          price: "99",
        },
        {
          gram: "65",
          price: "149",
        },
      ],
    },
    {
      price: "70",
    },
    {
      price: "70",
    },
    {
      price: "70",
    },
    {
      price: "70",
    },
    {
      price: "70",
    },
    {
      price: "70",
    },
    {
      price: "70",
    },
    {
      price: "70",
    },
    {
      price: "70",
    },
    {
      price: "70",
    },
  ]);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
    // console.log(e);
    const { name, value } = e.target;
    console.log(name, value);
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);

    const { name, message, contact, email } = formData;
    if (
      name.trim() == "" ||
      message.trim() == "" ||
      email.trim() == "" ||
      contact.trim() == ""
    ) {
      setOpenToast({
        open: true,
        msg: "All fields are required",
        severity: "error",
      });
      return null;
    }

    setLoader(true);
    try {
      // ---- Login to EmailJs, create Service ID and template id.

      emailjs
        .sendForm(
          "service_f00ztqu", // service id
          "template_s3pyodh", //--- tamplate id
          e.target, // form
          "user_zNFjvuObs4IGmjnw38Wrf" // user id
        )
        .then(
          (result) => {
            console.log(result, "result");
            setLoader(false);
            setOpenToast({
              open: true,
              msg: "We will contact you soon.",
              severity: "success",
            });
          },
          (error) => {
            console.log(error.text);
            setOpenToast({
              open: true,
              msg: "Error while sending mail",
              severity: "error",
            });
          }
        );
    } catch (e) {
      console.log(e);
    }
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width:{md:'400',xs:'300px'},
    background:
      "linear-gradient(115.91deg, rgba(192, 192, 192, 0.16) 0%, rgba(229, 229, 229, 0.06) 100%)",
    backdropFilter: "blur(50px)",
    border: "1px solid #070707",
    boxShadow: 14,
    p: 4,
    borderRadius: 4,
  };

  return (
    <>
      <Snackbar
        open={openToast.open}
        autoHideDuration={3000}
        onClose={() => setOpenToast({ open: false })}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        // action={action}
        severity={openToast.severity}
      >
        <Alert
          onClose={() => setOpenToast({ open: false })}
          severity={openToast.severity}
          sx={{ width: "100%" }}
        >
          {openToast.msg}
        </Alert>
      </Snackbar>
      <div>
        <img
          src={require("../../assets/home/prodbg.png")}
          alt=""
          className="banner-image"
          style={{ width: "100%" }}
        />
      </div>
      <Container fixed sx={{ margin: { md: "50px auto" } }}>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography fontSize="32px" fontWeight="700" color="initial">
            Categories - Food
          </Typography>
          <Link to="/products">
            <Button
              variant="text"
              sx={{ color: "#000", textDecoration: "underline", border: "0.5px solid" }}
            >
              Back
            </Button>
          </Link>
        </Box>
        <br />
        <Divider />
        <br />
        <br />
        <Typography   sx={{fontSize:{md:'24px',xs:'20px'}}} fontWeight="500" color="initial">
          Pasta
        </Typography>
        <br />
        <Divider /> <br />
        <Box
          sx={{
            display: "flex",
            justifyContent: { md: "start", sm: "center" },
            gap: "125px",
            flexWrap: "wrap",
          }}
        >
          {pasta.map((item, i) => (
            <>
              <Box
                sx={{ width: "210px" }}
                onMouseOver={() => setActive(i + 1)}
                onMouseOut={() => setActive(null)}
              >
                <img
                  src={require(`../../assets/home/pasta ${i + 1}.png`)}
                  alt=""
                  height="270px"
                  className={classes.productsImg}
                  onClick={handleOpen}
                />
                {/* <br />
                <Typography
                  mt="10px"
                  textAlign="center"
                  fontSize="20px"
                  fontWeight="500"
                  color="initial"
                >
                  MRP: {item}/-
                </Typography> */}
                {item.isMultiple ? (
                  <Box
                    // display={active == `${i + 1}` ? "block" : "none"}
                    className={classes.hoeverContainer}
                  >
                    {item.Fields.map((inItem) => {
                      return (
                        <Box
                          sx={{
                            display: "flex",
                            flexWrap: "wrap",
                            gap: "10px",
                            margin: "5px auto",
                            justifyContent: {
                              md: "space-between",
                              xs: "center",
                            },
                          }}
                        >
                          <Typography
                            fontSize="15px"
                            fontWeight="500"
                            sx={{
                              border: "1px solid #000000",
                              padding: "10px",
                            }}
                          >
                            {inItem.gram} {inItem.gram > 10 ? "gram" : "kg"}
                          </Typography>
                          <Typography
                            fontSize="15px"
                            fontWeight="500"
                            sx={{
                              border: "1px solid #000000",
                              padding: "10px",
                            }}
                          >
                            Rs {inItem.price}/-
                          </Typography>
                        </Box>
                      );
                    })}
                  </Box>
                ) : (
                  <Box
                    // display={active == `${i + 1}` ? "block" : "none"}
                    className={classes.hoeverContainer}
                  >
                    <Typography
                      // mt="10px"
                      textAlign="center"
                      fontSize="18px"
                      fontWeight="500"
                      color="initial"
                    >
                      MRP: {item.price}/-
                    </Typography>
                  </Box>
                )}
              </Box>
            </>
          ))}
        </Box>
        <br />
        <br />
        <Typography   sx={{fontSize:{md:'24px',xs:'20px'}}} fontWeight="500" color="initial">
          Healthy Snacks
        </Typography>
        <br />
        <Divider /> <br />
        <Box
          sx={{
            display: "flex",
            justifyContent: { md: "start", sm: "center" },
            gap: "90px",
            flexWrap: "wrap",
          }}
        >
          {healthySnack.map((item, i) => (
            <>
              <Box sx={{ width: "240px" }}>
                <img
                  src={require(`../../assets/home/healthysnack (${i + 1}).png`)}
                  alt=""
                  height={i <= 7 ? "320" : "auto"}
                  className={classes.productsImg}
                  onClick={handleOpen}
                />
                {item.isMultiple ? (
                  <Box className={classes.hoeverContainer}>
                    {item.Fields.map((inItem) => {
                      return (
                        <Box
                          sx={{
                            display: "flex",
                            flexWrap: "wrap",
                            gap: "10px",
                            margin: "5px auto",
                            justifyContent: {
                              md: "space-between",
                              xs: "center",
                            },
                          }}
                        >
                          <Typography
                            fontSize="15px"
                            fontWeight="500"
                            sx={{
                              border: "1px solid #000000",
                              padding: "10px",
                            }}
                          >
                            {inItem.gram} gram
                          </Typography>
                          <Typography
                            fontSize="15px"
                            fontWeight="500"
                            sx={{
                              border: "1px solid #000000",
                              padding: "10px",
                            }}
                          >
                            Rs {inItem.price}/-
                          </Typography>
                        </Box>
                      );
                    })}
                  </Box>
                ) : (
                  <Box className={classes.hoeverContainer}>
                    <Typography
                      // mt="10px"
                      textAlign="center"
                      fontSize="18px"
                      fontWeight="500"
                      color="initial"
                    >
                      MRP: {item.price}/-
                    </Typography>
                  </Box>
                )}
              </Box>
            </>
          ))}
        </Box>
        <br />
        <br />
        <Typography   sx={{fontSize:{md:'24px',xs:'20px'}}} fontWeight="500" color="initial">
          Sauces
        </Typography>
        <br />
        <Divider /> <br />
        <Box
          sx={{
            display: "flex",
            justifyContent: { md: "start", sm: "center" },
            gap: "60px",
            flexWrap: "wrap",
          }}
        >
          {sauces.map((item, i) => (
            <>
              <Box sx={{ width: "260px" }}>
                <img
                  src={require(`../../assets/home/sauce${i + 1}.jpg`)}
                  alt=""
                  height={i <= 3 ? "380px" : "380px"}
                  className={classes.productsImg}
                  onClick={handleOpen}
                />
                {item.isMultiple ? (
                  <Box className={classes.hoeverContainer}>
                    {item.Fields.map((inItem) => {
                      return (
                        <Box
                          sx={{
                            display: "flex",
                            flexWrap: "wrap",
                            gap: "10px",
                            margin: "5px auto",
                            justifyContent: {
                              md: "space-between",
                              xs: "center",
                            },
                          }}
                        >
                          <Typography
                            fontSize="15px"
                            fontWeight="500"
                            sx={{
                              border: "1px solid #000000",
                              padding: "10px",
                            }}
                          >
                            {inItem.gram} {inItem.gram > 10 ? "gram" : "kg"}
                          </Typography>
                          <Typography
                            fontSize="15px"
                            fontWeight="500"
                            sx={{
                              border: "1px solid #000000",
                              padding: "10px",
                            }}
                          >
                            Rs {inItem.price}/-
                          </Typography>
                        </Box>
                      );
                    })}
                  </Box>
                ) : (
                  <Box className={classes.hoeverContainer}>
                    <Typography
                      // mt="10px"
                      textAlign="center"
                      fontSize="18px"
                      fontWeight="500"
                      color="initial"
                    >
                      MRP: {item.price}/-
                    </Typography>
                  </Box>
                )}
              </Box>
            </>
          ))}
        </Box>
        {/* <br />
        <br />
        <Typography   sx={{fontSize:{md:'24px',xs:'20px'}}} fontWeight="500" color="initial">
          Evolve
        </Typography>
        <br />
        <Divider /> <br />
        <Box
          sx={{
            display: "flex",
            justifyContent: { md: "start", sm: "center" },
            gap: "45px",
            flexWrap: "wrap",
          }}
        >
          {evolve.map((item, i) => (
            <>
              <Box sx={{ width: "260px" }}>
                <img
                  src={require(`../../assets/home/evolve ${i + 1}.png`)}
                  alt=""
                  className={classes.productsImg}
                  onClick={handleOpen}
                />
                <br />
                <Typography
                  mt="10px"
                  textAlign="center"
                  fontSize="20px"
                  fontWeight="500"
                  color="initial"
                >
                  MRP: {item}/-
                </Typography>
              </Box>
            </>
          ))}
        </Box> */}
        <br />
        <br />
        <Typography   sx={{fontSize:{md:'24px',xs:'20px'}}} fontWeight="500" color="initial">
          Fruit Spreads
        </Typography>
        <br />
        <Divider /> <br />
        <Box
          sx={{
            display: "flex",
            justifyContent: { md: "space-between", sm: "center" },
            gap: "30px",
            flexWrap: "wrap",
          }}
        >
          {jam.map((item, i) => (
            <>
              <Box sx={{ width: "260px" }}>
                <img
                  src={require(`../../assets/home/jam ${i + 1}.png`)}
                  alt=""
                  className={classes.productsImg}
                  onClick={handleOpen}
                />
                <br />
                <Typography
                  mt="10px"
                  textAlign="center"
                  fontSize="20px"
                  fontWeight="500"
                  color="initial"
                >
                  MRP: {item}/-
                </Typography>
              </Box>
            </>
          ))}
        </Box>
      </Container>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h5"
            component="h2"
            // color={"#fff"}
            textAlign="center"
          >
            Book an Enquiry
          </Typography>
          <br />
          <form onSubmit={onSubmit}>
            <Typography gutterBottom fontSize="15px" color="initial">
              Name
            </Typography>
            <TextField
              id=""
              label=""
              placeholder="Enter your name"
              name="name"
              onChange={(e) => handleChange(e)}
              variant="outlined"
              sx={{
                width: "100%",
                background: "#fff",
                borderRadius: "6px",
              }}
            />
            <div style={{ height: 15 }} />
            <Typography gutterBottom fontSize="15px" color="initial">
              Email
            </Typography>
            <TextField
              id=""
              label=""
              placeholder="Enter your email"
              name="email"
              onChange={(e) => handleChange(e)}
              variant="outlined"
              sx={{
                width: "100%",
                background: "#fff",
                borderRadius: "6px",
              }}
            />
            <div style={{ height: 15 }} />
            <Typography gutterBottom fontSize="15px" color="initial">
              Contact Number
            </Typography>
            <TextField
              id=""
              label=""
              placeholder="Enter your contact number"
              name="contact"
              onChange={(e) => handleChange(e)}
              variant="outlined"
              sx={{
                width: "100%",
                background: "#fff",
                borderRadius: "6px",
              }}
            />
            <div style={{ height: 15 }} />
            <Typography gutterBottom fontSize="15px" color="initial">
              Nature of Business
            </Typography>
            <Select
              labelId="demo-simple-select-label"
              name="message"
              onChange={(e) => handleChange(e)}
              id="demo-simple-select"
            >
              <MenuItem selected value={"Manufacturer"}>
                Manufacturer
              </MenuItem>
              <MenuItem value={"Distributor"}>Distributor</MenuItem>
            </Select>

            <div style={{ height: 32 }} />

            <Box sx={{ textAlign: "center" }}>
              {!loader && (
                <Button
                  size="large"
                  // onClick={onSubmit}
                  type="submit"
                  variant="contained"
                  sx={{
                    background: "#13104B",
                    "&:hover": { background: "#13104B" },
                  }}
                >
                  Submit
                </Button>
              )}
              {loader && (
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Stack sx={{ color: "grey.500" }} spacing={2} direction="row">
                    <CircularProgress color="secondary" />
                  </Stack>
                </div>
              )}
            </Box>
          </form>
        </Box>
      </Modal>
    </>
  );
};

export default Food;
