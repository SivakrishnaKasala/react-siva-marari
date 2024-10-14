import React, { useState } from "react";

import Grid from "@mui/material/Grid2";
import {
  Box,
  Button,
  Card,
  CardContent,
  FormControl,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "../../store/cartSlice";

const Cart = () => {
  const [emptyCartPage, setEmptyCartPage] = useState(true);
  const [examPrice, setExamPrice] = useState(110.0);
  const [discountExamPrice, setDiscountExamPrice] = useState(130.0);

  const [noOfTests, setNoOfTests] = useState(2);

  const examRate = useSelector((state) => state.cart.value);
  const dispatch = useDispatch();

  const handleTestPractice = (e, index) => {
    // console.log(e);
    // console.log(e.target.value);
    if (e.target.value === 1) {
      setNoOfTests(e.target.value);
      dispatch(decrement());
    } else {
      setNoOfTests(e.target.value);
      dispatch(increment());
    }
  };

  const handleRemoveTest = () => {
    setEmptyCartPage(true);
    dispatch(reset());
  };

  const emptyPage = () => {
    return (
      <Grid
        container
        //   size={12}
        sx={{
          gap: "24px",
          width: "100%",
          padding: "32px",
        }}
      >
        <Grid size={9}>
          <Grid
            container
            size={12}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "25px",
              width: "100%",
            }}
          >
            <Grid size={12}>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 600,
                  color: "#083156",
                  fontSize: "28px",
                  lineHeight: "36px",
                }}
              >
                Cart
              </Typography>
            </Grid>
            {emptyCartPage && (
              <Grid size={12}>
                <Card
                  sx={{
                    border: "1px solid",
                    width: "100%",
                  }}
                >
                  <CardContent>
                    <Grid
                      container
                      size={12}
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        gap: "24px",
                        color: "#4c4c4c",
                        flexDirection: "row",
                      }}
                    >
                      <Grid size={7.6}>
                        <Grid
                          container
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "10px",
                          }}
                        >
                          <Grid>
                            <Typography
                              sx={{
                                color: "#083156",
                                fontSize: "20px",
                                lineHeight: "28px",
                                // font: "500 16px / 1.25 din-round, sans-serif",
                                fontWeight: 600,
                              }}
                            >
                              Your cart is empty
                            </Typography>
                          </Grid>
                          <Grid>
                            <Typography
                              sx={{
                                fontSize: "16px",
                                lineHeight: "28px",
                                // height: "56px",
                              }}
                            >
                              Buy a test now and take it any time in the next 21
                              days!
                            </Typography>
                          </Grid>
                          <Grid>
                            <Button
                              onClick={(e) => {
                                setEmptyCartPage(false);
                              }}
                              variant="contained"
                              disableElevation
                              disableRipple
                              sx={{
                                borderRadius: "6px",
                                padding: "0px 24px",
                                cursor: "pointer",
                                backgroundColor: "#3c5d87",
                                color: "#fff",
                                borderColor: "#fff",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                height: "40px",
                                fontSize: "15px",
                                "&:hover": {
                                  backgroundColor: "#3c5d87",
                                  color: "#fff",
                                  borderColor: "#fff",
                                },
                              }}
                            >
                              <Typography
                                variant="subtitle"
                                sx={{
                                  fontWeight: 600,
                                }}
                              >
                                BUY NOW
                              </Typography>
                            </Button>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid
                        size={3.8}
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Box
                          component="img"
                          src="https://dy8n3onijof8f.cloudfront.net/static/images/wp/c72462a4deae0ed51279.svg"
                          alt="cart"
                          sx={{
                            // width: "200px",
                            // height: "120px",
                            border: 0,
                          }}
                        />
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            )}
            {!emptyCartPage && (
              <Grid size={12}>
                <Card
                  sx={{
                    width: "100%",
                  }}
                >
                  <CardContent>
                    <Grid container size={12}>
                      <Grid
                        sx={{
                          width: "15%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Box
                          component="img"
                          src="	https://dy8n3onijof8f.cloudfront.net/static/images/wp/27e9c80d3229636abc07.svg"
                          alt="payment"
                        />
                      </Grid>
                      <Grid
                        sx={{
                          flexGrow: 1,
                        }}
                      >
                        <Grid container size={12}>
                          <Grid
                            sx={{
                              width: "100%",
                            }}
                          >
                            <Grid
                              container
                              size={12}
                              sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                margin: "16px 0px 12px",
                              }}
                            >
                              <Grid
                                sx={{
                                  display: "flex",
                                  alignItems: "flex-start",
                                  justifyContent: "flex-start",
                                }}
                              >
                                <Typography
                                  sx={{
                                    color: "#083156",
                                    fontSize: "20px",
                                    lineHeight: "28px",
                                    fontWeight: 600,
                                  }}
                                >
                                  Duolingo English Test
                                </Typography>
                              </Grid>
                              <Grid>
                                <Typography
                                  sx={{
                                    color: "#083156",
                                    fontSize: "20px",
                                    lineHeight: "28px",
                                    fontWeight: 600,
                                  }}
                                >
                                  ${examRate}.00
                                </Typography>
                                {noOfTests === 2 && (
                                  <Typography
                                    sx={{
                                      color: "#67737e",
                                      textDecoration: "line-through",
                                      fontSize: "16px",
                                      margin: 0,
                                      textWrap: "pretty",
                                    }}
                                  >
                                    ${discountExamPrice}.00
                                  </Typography>
                                )}
                              </Grid>
                            </Grid>
                          </Grid>
                          <Grid>
                            <Grid container>
                              <Grid>
                                <FormControl>
                                  <Select
                                    onChange={handleTestPractice}
                                    value={noOfTests}
                                  >
                                    <MenuItem value={1} key={1}>
                                      1
                                    </MenuItem>
                                    <MenuItem value={2} key={2}>
                                      2
                                    </MenuItem>
                                  </Select>
                                </FormControl>
                              </Grid>
                              <Grid>
                                <Button
                                  variant="text"
                                  disableElevation
                                  disableRipple
                                  sx={{
                                    backgroundColor: "transparent",
                                    "&:hover": {
                                      backgroundColor: "transparent",
                                    },
                                    display: "flex",
                                    alignContent: "center",
                                    justifyContent: "center",
                                  }}
                                  onClick={handleRemoveTest}
                                >
                                  <Typography
                                    sx={{
                                      textTransform: "none",
                                      textDecoration: "underline",
                                      color: "#8c96a1",
                                      fontSize: "16px",
                                      alignSelf: "center",
                                    }}
                                  >
                                    Remove
                                  </Typography>
                                </Button>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            )}
          </Grid>
        </Grid>
        {/* subtotal */}
        <Grid
          sx={{
            flexGrow: 1,
            marginTop: "69px",
          }}
        >
          <Card
            sx={{
              border: "1px solid",
            }}
          >
            <CardContent>
              <Grid
                container
                size={12}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "24px",
                  color: "#4c4c4c",
                }}
              >
                <Grid
                  sx={{
                    width: "100%",
                  }}
                >
                  <Grid
                    container
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <Grid>
                      <Typography>Subtotal</Typography>
                    </Grid>
                    <Grid>
                      <Typography>${examRate}.00</Typography>
                    </Grid>
                  </Grid>
                </Grid>
                {!emptyCartPage && (
                  <Grid
                    sx={{
                      width: "100%",
                    }}
                  >
                    <Button
                      variant="contained"
                      sx={{
                        borderRadius: "6px",
                        padding: "0px 24px",
                        cursor: "pointer",
                        width: "100%",
                        backgroundColor: "#3c5d87",
                        color: "#fff",
                        borderColor: "#fff",
                        fontSize: "15px",
                        height: "40px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        border: "1px solid",
                      }}
                      disableElevation
                      disableRipple
                    >
                      <Typography
                        sx={{
                          fontWeight: 700,
                          letterSpacing: ".5px",
                        }}
                      >
                        CHECK OUT
                      </Typography>
                    </Button>
                  </Grid>
                )}
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    );
  };

  const render = () => {
    return (
      <>
        <Grid
          container
          size={12}
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Grid
            sx={{
              height: "64px",
              marginLeft: "32px",
            }}
          ></Grid>
          <Grid>{emptyPage()}</Grid>
        </Grid>
      </>
    );
  };

  return render();
};

export default Cart;
