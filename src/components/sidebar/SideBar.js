import React, { useState } from "react";

import { MdOutlineExpandMore } from "react-icons/md";
import { BsPersonCircle } from "react-icons/bs";
import { MdOutlineShoppingCart } from "react-icons/md";
import {
  Box,
  Button,
  Divider,
  Grid2,
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
          <Grid2 item>
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
          </Grid2>
        );
      }
      return null;
    });
  };

  const handleSettingsNavigate = () => {
    navigate("settings");
  };
  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <Grid2
        container
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          flexDirection: "column",
          height: "100%",
          position: "fixed",
        }}
      >
        <Grid2
          item
          sx={{
            width: "85%",
          }}
        >
          <Grid2
            container
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "80%",
              gap: "10px",
            }}
          >
            <Grid2 item>
              <Box
                component="img"
                src="https://dy8n3onijof8f.cloudfront.net/static/images/wp/557e9cb1ce105779cdb5.svg"
                alt="website log"
              />
            </Grid2>
            {createSideRoutes(routes)}

            <Grid2 item>
              <Divider
                style={{
                  // border: "2px solid",
                  // backgroundColor: "#dbdee1",
                  borderBottom: "2px solid #dbdee1",
                  // fontSize: "5px",
                  margin: "17px 0px",
                }}
              />
            </Grid2>
            <Grid2
              item
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
            </Grid2>
          </Grid2>
        </Grid2>
        <Grid2
          item
          sx={{
            width: "85%",
            marginTop: "320px",
          }}
        >
          <Grid2
            container
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Grid2 item>
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
                  color: "",
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
                          <Box
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
                          </Box>
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
            </Grid2>
            <Grid2
              item
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
              >
                <MdOutlineShoppingCart
                  style={{
                    width: "24px",
                    height: "24px",
                  }}
                />
              </IconButton>
            </Grid2>
          </Grid2>
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default SideBar;
