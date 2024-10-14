import Grid from "@mui/material/Grid2";
import React from "react";
import HeaderCheckout from "../../components/header/checkout/HeaderCheckout";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  TextField,
  Typography,
} from "@mui/material";

import { IoCard } from "react-icons/io5";

const PayDetail = () => {
  return (
    <>
      <Grid container>
        <Grid
          sx={{
            width: "100%",
          }}
        >
          <HeaderCheckout />
        </Grid>
        <Grid
          sx={{
            width: "100%",
          }}
        >
          <Grid
            container
            size={12}
            sx={{
              gap: "25px",
              margin: "40px 20px 0px",
            }}
          >
            <Grid
              sx={{
                flexGrow: 1,
              }}
            ></Grid>
            <Grid
              sx={{
                width: "500px",
              }}
            >
              <Grid
                container
                size={12}
                sx={{
                  display: "flex",
                  alignContent: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <Grid
                  sx={{
                    width: "100%",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#083156",
                      fontSize: "30px",
                      paddingBottom: "20px",
                      textAlign: "center",
                      fontWeight: 700,
                    }}
                  >
                    Enter your payment details
                  </Typography>
                </Grid>
                <Grid
                  sx={{
                    width: "100%",
                  }}
                >
                  <Typography
                    sx={{
                      padding: "20px 0px",
                      fontSize: "18px",
                      lineHeight: "24px",
                      margin: 0,
                      textWrap: "pretty",
                      fontWeight: 600,
                      color: "#083156",
                    }}
                  >
                    Your Information
                  </Typography>
                </Grid>
                <Grid
                  sx={{
                    width: "100%",
                  }}
                >
                  <Grid container size={12}>
                    <Grid
                      sx={{
                        width: "100%",
                      }}
                    >
                      <FormControl fullWidth component={Box}>
                        <FormLabel>Email Address</FormLabel>
                        <TextField />
                      </FormControl>
                    </Grid>
                    <Grid
                      sx={{
                        width: "100%",
                      }}
                    >
                      <Grid container size={12}>
                        <Grid>
                          <FormControl>
                            <FormLabel>Country/Region</FormLabel>
                            <TextField />
                          </FormControl>
                        </Grid>
                        <Grid>
                          <FormControl>
                            <FormLabel>State/Union Territory</FormLabel>
                            <TextField />
                          </FormControl>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid>
                      <Typography>Payment method</Typography>
                    </Grid>
                    <Grid>
                      <Card>
                        <CardHeader
                          title={
                            <>
                              <Box>
                                <Grid container>
                                  <Grid>
                                    <IoCard />
                                  </Grid>
                                  <Grid>
                                    <Typography>Card</Typography>
                                  </Grid>
                                </Grid>
                              </Box>
                            </>
                          }
                        />
                        <CardContent>
                          <Grid container>
                            <Grid>
                              <FormControl>
                                <FormLabel>Card Number</FormLabel>
                                <TextField />
                              </FormControl>
                            </Grid>
                            <Grid>
                              <FormControl>
                                <FormLabel>Expiration date</FormLabel>
                                <TextField />
                              </FormControl>
                            </Grid>
                            <Grid>
                              <FormControl>
                                <FormLabel>Security code</FormLabel>
                                <TextField />
                              </FormControl>
                            </Grid>
                          </Grid>
                        </CardContent>
                        <CardActions>
                          <FormControlLabel
                            control={<Checkbox />}
                            label="Save card"
                          />
                        </CardActions>
                      </Card>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid>
                  <Button>
                    <Typography>BUY NOW</Typography>
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              sx={{
                flexGrow: 1,
              }}
            ></Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default PayDetail;
