import {
  Box,
  Button,
  Container,
  Divider,
  Icon,
  IconButton,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Popover,
} from "@mui/material";

//icons

import React, { useState } from "react";
import {
  NavLink,
  Navigate,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import { routes } from "../routes";
import SideBar from "../components/sidebar/SideBar";
import FooterPage from "../components/footer/FooterPage";
import HelpButtonContact from "../components/button/HelpButtonContact";

import { IoIosArrowForward } from "react-icons/io";
import { IoIosLogOut } from "react-icons/io";
import { MdOutlineExpandMore } from "react-icons/md";
import { BsPersonCircle } from "react-icons/bs";
import { MdOutlineShoppingCart } from "react-icons/md";
import Grid from "@mui/material/Grid2";
import { useSelector } from "react-redux";
import SelectTest from "../pages/checkout/SelectTest";
import DeliveryTest from "../pages/checkout/DeliveryTest";
import PayDetail from "../pages/checkout/PayDetail";

const Admin = () => {
  const [login, setLogin] = useState(true);

  const checkout = useSelector((state) => state.checkout.value);

  const createRoutes = (routes) => {
    return routes.map((route) => {
      if (route.layout === "/admin") {
        return (
          <Route
            key={route.path}
            path={`${route.path}`}
            element={route.component}
          />
        );
      }
      return null;
    });
  };

  const navigate = useNavigate();

  const [openAccount, setOpenAccount] = useState(false);
  const [anchorAccount, setAnchorAccount] = useState(null);

  const createSideRoutes = (routes) => {
    return routes.map((route, index) => {
      if (route.layout === "/admin" && route.isMenuItem === true) {
        return (
          <Grid size={12} key={index}>
            <NavLink
              to={`${route.path}`}
              style={({ isActive }) => ({
                border: isActive
                  ? "1px solid #dbdee1"
                  : "1px solid transparent",
                backgroundColor: isActive && "#f1f4f6",
                borderRadius: "5px",
                display: "flex",
                flexDirection: "row",
                padding: "10px",
                color: isActive ? "#001836" : "#67737e",
                // fontWeight: "bold",
                fontWeight: 700,
                textDecorationLine: "none",
                textAlign: "center",
                alignItems: "center",
              })}
            >
              <Icon>{route.icon}</Icon>
              <Typography
                variant="p"
                sx={{
                  // paddingLeft: "5px",
                  marginLeft: "8px",
                }}
              >
                {route.name}
              </Typography>
            </NavLink>
          </Grid>
        );
      }
      return null;
    });
  };

  const createCheckoutRoutes = (routes) => {
    return routes.map((route) => {
      if (route.layout === "/admin" && route.isMenuItem === false) {
        if (route.isSubEle === true) {
          console.log(route.layout + route.path + route.subRoute);
          console.log();
          return route.item.map((subRoute, index) => (
            <Route
              exact
              key={subRoute.path} // Use a unique key based on path
              path={`${route.layout}/${route.path}/${subRoute.path}`}
              element={subRoute.component}
            />
          ));
        }
        return null;
      }
      return null;
    });
  };

  const handleSettingsNavigate = () => {
    navigate("settings");
  };

  const handleCart = () => {
    navigate("cart");
  };

  const AdminPage = () => {
    return (
      <>
        <Container
          sx={{
            padding: "0px 4px !important",
            height: "100vh",
          }}
          maxWidth="xl"
        >
          <Grid
            container
            size={12}
            sx={{
              // width: "100%",
              display: "flex",
              flexDirection: "row",
              height: "100vh",
              position: "relative",
            }}
          >
            <Grid
              size={3}
              sx={{
                // width: "25%",
                // position: "fixed",
                // height: "100vh",
                // left: 9,
                borderRight: "1px solid #ccc",
              }}
            >
              {/* <SideBar /> */}
              <Grid
                container
                size={12}
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  flexDirection: "column",
                  height: "100%",
                  position: "fixed",
                  // width: "100%",
                  // maxWidth: "300px",
                }}
              >
                <Grid
                  size={12}
                  sx={{
                    // width: "100%",
                    display: "flex",
                  }}
                >
                  <Grid
                    size={12}
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      // width: "100%",
                      gap: "10px",
                    }}
                    container
                  >
                    <Grid>
                      <Box
                        component="img"
                        src="https://dy8n3onijof8f.cloudfront.net/static/images/wp/557e9cb1ce105779cdb5.svg"
                        alt="website log"
                      />
                    </Grid>
                    {createSideRoutes(routes)}

                    <Grid>
                      <Divider
                        style={{
                          // border: "2px solid",
                          // backgroundColor: "#dbdee1",
                          borderBottom: "2px solid #dbdee1",
                          // fontSize: "5px",
                          margin: "17px 0px",
                        }}
                      />
                    </Grid>
                    <Grid
                      sx={{
                        marginTop: "",
                      }}
                    >
                      <Button
                        variant="outlined"
                        sx={{
                          backgroundColor: "#fff",
                          borderColor: "#3c5d87",
                          color: "#3c5d87",
                          textTransform: "none",
                          lineHeight: "normal",
                          cursor: "pointer",
                          boxSizing: "border-box",
                          padding: "0px 24px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          width: "100%",
                        }}
                        disableRipple
                        disableElevation
                      >
                        <Typography
                          sx={{
                            fontWeight: 700,
                            letterSpacing: "0.5px",
                            fontSize: "15px",
                            opacity: 1,
                            maxWidth: "fit-content",
                            height: "40px",
                            // textAlign: "center",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          PURCHASE A TEST
                        </Typography>
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid
                  size={12}
                  sx={{
                    width: "100%",
                    marginTop: "300px",
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
                      <Button
                        disableElevation
                        disableRipple
                        variant={openAccount ? "contained" : "text"}
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          textAlign: "center",
                          padding: "8px",
                          backgroundColor: openAccount ? "#dbdee1" : "#fff",
                          color: "#67737e",

                          "&:hover": {
                            color: "#3d4d5c",
                          },
                        }}
                        onClick={(e) => {
                          setOpenAccount(true);
                          setAnchorAccount(e.currentTarget);
                        }}
                      >
                        <Icon
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <BsPersonCircle
                            style={{
                              width: "20px",
                              height: "15px",
                            }}
                          />
                        </Icon>
                        <Typography
                          sx={{
                            fontSize: "14px",
                            fontWeight: 700,
                          }}
                        >
                          MY ACCOUNT
                        </Typography>
                        <Icon
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <MdOutlineExpandMore
                            style={{
                              width: "15px",
                              height: "15px",
                            }}
                          />
                        </Icon>
                      </Button>
                      <Popover
                        open={openAccount}
                        anchorEl={anchorAccount}
                        onClose={() => {
                          setOpenAccount(false);
                          setAnchorAccount(null);
                        }}
                        anchorOrigin={{
                          vertical: "top",
                          horizontal: "left",
                        }}
                        transformOrigin={{
                          vertical: "bottom",
                          horizontal: "left",
                        }}
                      >
                        <List
                          container
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            width: "320px",
                            padding: "0px",
                            borderRadius: "8px",
                          }}
                        >
                          <ListItemButton
                            disableRipple
                            disableElevation
                            onClick={handleSettingsNavigate}
                            sx={{
                              padding: "20px 18px",
                              minHeight: "52px",
                              fontSize: "15px",
                              borderBottom: "1px solid #dbdee1",
                              "&:hover": {
                                backgroundColor: "transparent",
                              },
                            }}
                          >
                            <ListItemText
                              primary={
                                <>
                                  <Grid
                                    sx={{
                                      height: "20px",
                                    }}
                                  >
                                    <Typography
                                      sx={{
                                        fontSize: "15px",
                                        lineHeight: "17px",
                                      }}
                                    >
                                      Settings
                                    </Typography>
                                  </Grid>
                                </>
                              }
                            />
                            <ListItemIcon
                              sx={{
                                minWidth: "20px ",
                              }}
                            >
                              <IoIosArrowForward />
                            </ListItemIcon>
                          </ListItemButton>
                          <ListItemButton
                            disableRipple
                            disableElevation
                            sx={{
                              minHeight: "52px",
                              fontSize: "15px",
                              borderBottom: "1px solid #dbdee1",
                              "&:hover": {
                                backgroundColor: "transparent",
                              },
                              padding: "20px 18px",
                            }}
                          >
                            <ListItemText
                              primary={
                                <>
                                  <Typography>Site language</Typography>
                                </>
                              }
                            />
                            <ListItemIcon
                              sx={{
                                minWidth: "20px ",
                              }}
                            >
                              <IoIosArrowForward />
                            </ListItemIcon>
                          </ListItemButton>
                          <ListItemButton
                            disableRipple
                            disableElevation
                            sx={{
                              padding: "20px 18px",
                              minHeight: "52px",
                              fontSize: "15px",
                              //   borderBottom: "1px solid #dbdee1",
                              "&:hover": {
                                backgroundColor: "transparent",
                              },
                            }}
                          >
                            <ListItemText
                              primary={
                                <>
                                  <Typography>Log Out</Typography>
                                </>
                              }
                            />
                            <ListItemIcon
                              sx={{
                                minWidth: "20px ",
                              }}
                            >
                              <IoIosLogOut
                                style={{
                                  //   width: "50px",
                                  fontSize: "20px",
                                }}
                              />
                            </ListItemIcon>
                          </ListItemButton>
                        </List>
                      </Popover>
                    </Grid>
                    <Grid
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <IconButton
                        sx={{
                          padding: "0px 8px 0px 12px",
                        }}
                        onClick={handleCart}
                      >
                        <MdOutlineShoppingCart
                          style={{
                            width: "24px",
                            height: "24px",
                          }}
                        />
                      </IconButton>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            {/* main content */}
            <Grid
              size={9}
              sx={{
                // width: "75%",
                height: "100vh",
                // marginLeft: "25%",
                // flexGrow: 1,
              }}
            >
              <Grid container size={12}>
                <Grid
                  size={12}
                  sx={{
                    width: "100%",
                  }}
                >
                  <Routes>
                    {createRoutes(routes)}
                    <Route path="*" element={<Navigate to="home" replace />} />
                  </Routes>
                </Grid>
                <Grid size={12}>
                  <FooterPage />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </>
    );
  };

  const render = () => {
    if (login && !checkout) {
      return AdminPage();
    }
    if (checkout) {
      return (
        <>
          <Grid container size={12}>
            <Grid
              sx={{
                width: "100%",
              }}
            >
              <Routes>
                <Route path="/checkout/*">
                  <Route path="select" element={<SelectTest />} />
                  <Route path="delivery" element={<DeliveryTest />} />
                  <Route path="pay" element={<PayDetail />} />
                  <Route path="*" element={<Navigate to="select" replace />} />
                </Route>
                <Route
                  path="*"
                  element={<Navigate to="/checkout/select" replace />}
                />
              </Routes>
            </Grid>
            <Grid></Grid>
          </Grid>
        </>
      );
    } else {
      return <Navigate to="/auth" replace />;
    }
  };

  return render();
};

export default Admin;
