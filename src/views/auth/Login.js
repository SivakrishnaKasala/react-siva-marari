import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  FormControl,
  FormLabel,
  Grid,
  Grid2,
  Icon,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

//icons
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import GoogleIcon from "@mui/icons-material/Google";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleForm = (e) => {
    e.preventDefault();
    console.log({
      email,
      password,
    });
  };
  return (
    <>
      <Grid2
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid2 item>{/* header */}</Grid2>
        <Grid2 item>
          <Card
            sx={{
              width: "400px",
            }}
          >
            <CardHeader
              subheader={
                <>
                  <Box
                    sx={{
                      textAlign: "center",
                    }}
                  >
                    <Typography
                      variant="h5"
                      component="h1"
                      sx={{
                        fontWeight: 700,
                      }}
                    >
                      Log in to your account
                    </Typography>
                  </Box>
                </>
              }
            />
            <CardContent>
              <form onSubmit={handleForm}>
                <Grid2 container>
                  <Grid2 item>
                    <Grid2
                      container
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <FormControl
                        component={Grid2}
                        sx={{
                          width: "80%",
                          marginBottom: "5px",
                        }}
                      >
                        <FormLabel
                          style={{
                            fontSize: "16px",
                          }}
                        >
                          Email address
                        </FormLabel>
                        <TextField
                          type="text"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </FormControl>
                      <FormControl
                        component={Grid2}
                        sx={{
                          width: "80%",
                        }}
                      >
                        <FormLabel
                          style={{
                            fontSize: "16px",
                          }}
                        >
                          Password
                        </FormLabel>
                        <TextField
                          type={showPassword ? "text" : "password"}
                          sx={{}}
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          InputProps={{
                            endAdornment: (
                              <InputAdornment>
                                <IconButton
                                  onClick={() => setShowPassword(!showPassword)}
                                >
                                  {showPassword ? (
                                    <VisibilityIcon />
                                  ) : (
                                    <VisibilityOffIcon />
                                  )}
                                </IconButton>
                              </InputAdornment>
                            ),
                          }}
                        />
                      </FormControl>
                    </Grid2>
                  </Grid2>
                  <Grid2
                    item
                    sx={{
                      width: "100%",
                      justifyContent: "center",
                      alignItems: "center",
                      display: "flex",
                      marginTop: "10px",
                    }}
                  >
                    <Grid2
                      container
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        width: "80%",
                      }}
                    >
                      <Grid2
                        item
                        sx={
                          {
                            // display: "flex",
                            // justifyContent: "center",
                            // alignItems: "center",
                            // width: "80%",
                          }
                        }
                      >
                        <Button
                          variant="contained"
                          disableElevation
                          disableRipple
                          sx={{
                            width: "100%",
                            backgroundColor: "#f1f4f6",
                            color: "#001836",
                            border: "1px solid #dbdee1",
                          }}
                          type="submit"
                        >
                          <Typography>LOG IN</Typography>
                        </Button>
                      </Grid2>

                      <Grid2
                        item
                        sx={{
                          marginTop: "10px",
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "row",
                            border: "1px solid #ccc",
                            justifyContent: "center",
                            alignItems: "center",
                            padding: "8px 10px",
                          }}
                        >
                          <Icon>
                            <GoogleIcon />
                          </Icon>
                          <Typography
                            variant="body1"
                            sx={{
                              marginLeft: "5px",
                            }}
                          >
                            Sign in with Google
                          </Typography>
                        </Box>
                      </Grid2>
                    </Grid2>
                  </Grid2>
                  <Grid2 item></Grid2>
                </Grid2>
              </form>
            </CardContent>
          </Card>
        </Grid2>
      </Grid2>
    </>
  );
};

export default Login;
