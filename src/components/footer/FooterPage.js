import { Box, Grid2, Typography } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

import { BsFillCCircleFill } from "react-icons/bs";

const FooterPage = () => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderTop: "2px solid #cccc",
        }}
      >
        <Grid2
          sx={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Grid2 item>
            <NavLink
              style={{
                textDecorationLine: "none",
              }}
            >
              <Typography
                sx={{
                  //   textDecorationLine: "none",
                  padding: "24px 16px 24px 0px",
                  color: "#4c4c4c",
                  fontSize: "14px",
                }}
              >
                Website
              </Typography>
            </NavLink>
          </Grid2>
          <Grid2 item>
            <NavLink
              style={{
                textDecorationLine: "none",
              }}
            >
              <Typography
                sx={{
                  padding: "24px 16px 24px 0px",
                  color: "#4c4c4c",
                  fontSize: "14px",
                }}
              >
                Privacy Policy
              </Typography>
            </NavLink>
          </Grid2>
          <Grid2 item>
            <NavLink
              style={{
                textDecorationLine: "none",
              }}
            >
              <Typography
                sx={{
                  padding: "24px 16px 24px 0px",
                  color: "#4c4c4c",
                  fontSize: "14px",
                }}
              >
                Terms of Use
              </Typography>
            </NavLink>
          </Grid2>
          <Grid2 item>
            <NavLink
              style={{
                textDecorationLine: "none",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <BsFillCCircleFill
                style={{
                  color: "#4c4c4c",
                  backgroundColor: "transparent",
                }}
              />
              <Typography
                sx={{
                  padding: "24px 16px 24px 0px",
                  color: "#4c4c4c",
                  fontSize: "14px",
                }}
              >
                Duolingo
              </Typography>
            </NavLink>
          </Grid2>
        </Grid2>
      </Box>
    </>
  );
};

export default FooterPage;
