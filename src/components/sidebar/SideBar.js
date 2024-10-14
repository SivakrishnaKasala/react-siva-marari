import React, { useState } from "react";

import { MdOutlineExpandMore } from "react-icons/md";
import { BsPersonCircle } from "react-icons/bs";
import { MdOutlineShoppingCart } from "react-icons/md";
import {
  Box,
  Button,
  Divider,
  Icon,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Popover,
  Typography,
} from "@mui/material";
import { routes } from "../../routes";
import { NavLink, useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid2";

import { IoIosArrowForward } from "react-icons/io";
import { IoIosLogOut } from "react-icons/io";

const SideBar = () => {
  const navigate = useNavigate();

  const [openAccount, setOpenAccount] = useState(false);
  const [anchorAccount, setAnchorAccount] = useState(null);

  const createSideRoutes = (routes) => {
    return routes.map((route) => {
      if (route.layout === "/admin" && route.isMenuItem === true) {
        return (
          <Grid item>
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

  const handleSettingsNavigate = () => {
    navigate("settings");
  };

  const handleCart = () => {
    console.log("siva");
    navigate("cart");
  };
  return (
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
        sx={{
          width: "90%",
          display: "flex",
        }}
      >
        <Grid
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            gap: "10px",
          }}
        >
          <Grid>
            <Grid
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
        sx={{
          width: "80%",
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
            <Button variant="contained" onClick={handleCart}>
              {/* <IconButton
                sx={{
                  padding: "0px 8px 0px 12px",
                }}
                
              > */}
              <MdOutlineShoppingCart
                style={{
                  width: "24px",
                  height: "24px",
                }}
              />
              {/* </IconButton> */}
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SideBar;
