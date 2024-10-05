import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid2,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import FooterPage from "../../../components/footer/FooterPage";

const SettingsPage = () => {
  return (
    <>
      <Container maxWidth="lg">
        <Grid2
          container
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Grid2 item>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 700,
                marginLeft: "20px",
              }}
            >
              Account settings
            </Typography>
          </Grid2>
          <Grid2
            item
            sx={{
              padding: "32px",
            }}
          >
            <Grid2
              container
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* TextFields */}
              <Grid2
                item
                sx={{
                  width: "100%",
                }}
              >
                <Grid2
                  container
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                  }}
                >
                  <Grid2
                    item
                    sx={{
                      width: "60%",
                    }}
                  >
                    <FormControl component={Box} fullWidth>
                      {/* <FormControlLabel>Email Address</FormControlLabel> */}
                      <FormLabel>Email Address</FormLabel>
                      <TextField
                        variant="outlined"
                        // fullWidth
                        // sx={{
                        //   width: "100%",
                        // }}
                      />
                    </FormControl>
                  </Grid2>
                  <Grid2
                    item
                    sx={{
                      width: "60%",
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 500,
                        paddingBottom: "16px",
                      }}
                    >
                      change password
                    </Typography>
                    <Grid2
                      container
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        border: "1px solid",
                        padding: "8px 0px",
                        borderRadius: "5px",
                      }}
                    >
                      <Grid2
                        item
                        sx={{
                          margin: "8px 20px",
                        }}
                      >
                        <FormControl component={Box} fullWidth>
                          <FormLabel>Current password</FormLabel>
                          <TextField />
                        </FormControl>
                      </Grid2>
                      <Grid2
                        item
                        sx={{
                          margin: "8px 20px",
                        }}
                      >
                        <FormControl component={Box} fullWidth>
                          <FormLabel>New password</FormLabel>
                          <TextField />
                        </FormControl>
                      </Grid2>
                      <Grid2
                        item
                        sx={{
                          margin: "8px 20px",
                        }}
                      >
                        <FormControl component={Box} fullWidth>
                          <FormLabel>Confirm new password</FormLabel>
                          <TextField />
                        </FormControl>
                      </Grid2>
                    </Grid2>
                  </Grid2>
                  <Grid2 item>
                    <Button
                      variant="contained"
                      disableElevation
                      disableRipple
                      sx={{
                        color: "#fff",
                        backgroundColor: "#3C5D87",
                        padding: "0px 24px",
                        borderRadius: "6px",
                        borderColor: "#fff",

                        height: "40px",
                      }}
                    >
                      <Typography
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontWeight: 600,
                          letterSpacing: "0.5px",
                          fontSize: "15px",
                        }}
                      >
                        SAVE CHANGES
                      </Typography>
                    </Button>
                  </Grid2>
                </Grid2>
              </Grid2>
              {/* notifications */}
              <Grid2 item>
                <Grid2
                  container
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                  }}
                >
                  <Grid2 item>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 700,
                      }}
                    >
                      Notifications
                    </Typography>
                  </Grid2>
                  <Grid2 item>
                    <FormControlLabel
                      control={<Checkbox />}
                      label="I would like to receive promotional emails from Duolingo English Test"
                    />
                  </Grid2>
                </Grid2>
              </Grid2>
              {/* sponsor */}
              <Grid2 item>
                <Grid2
                  container
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Grid2 item>
                    <Typography variant="h6">Sponsor</Typography>
                  </Grid2>
                  <Grid2 item>
                    <Button
                      variant="contained"
                      sx={{
                        height: "40px",
                        color: "#fff",
                        backgroundColor: "#3C5D87",
                        padding: "0px 24px",
                        borderRadius: "6px",
                        borderColor: "#fff",
                      }}
                    >
                      <Typography
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          fontSize: "15px",
                          fontWeight: 700,
                          letterSpacing: "0.5px",
                        }}
                      >
                        ADD INVITE CODE
                      </Typography>
                    </Button>
                  </Grid2>
                </Grid2>
              </Grid2>
            </Grid2>
          </Grid2>

          <Grid2 item></Grid2>
        </Grid2>
      </Container>
    </>
  );
};

export default SettingsPage;
