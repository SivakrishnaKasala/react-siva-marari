import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Grid2,
  Icon,
  IconButton,
  Typography,
} from "@mui/material";

//icons

import React, { useState } from "react";
import { NavLink, Navigate, Route, Routes } from "react-router-dom";
import { routes } from "../routes";
import SideBar from "../components/sidebar/SideBar";
import FooterPage from "../components/footer/FooterPage";
import HelpButtonContact from "../components/button/HelpButtonContact";

const Admin = () => {
  const [login, setLogin] = useState(true);

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

  const AdminPage = () => {
    return (
      <>
        <Container
          maxWidth="lg"
          sx={{
            position: "relative",
            width: "100%",
          }}
        >
          <Grid2
            container
            sx={{
              width: "100%",
              display: "flex",
              height: "100vh",
              // flexDirection: "column",
            }}
          >
            <Grid2
              item
              xs={6}
              sx={{
                width: "25%",
                display: "flex",
                // flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
                borderRight: "1px solid #dbdee1",
                // position: "fixed",
                // height: "100vh",
                // top: 0,
                // left: 0,
              }}
            >
              <SideBar />
            </Grid2>
            <Grid2
              item
              xs={6}
              sx={{
                width: "75%",
                height: "100vh",
                // overflowY: "auto",
                padding: "20px",
              }}
            >
              <Button variant="contained" onClick={() => setLogin(false)}>
                go back to login
              </Button>
              <Grid2 container>
                <Grid2
                  item
                  xs={12}
                  sx={{
                    width: "100%",
                  }}
                >
                  <Box>
                    <>
                      <Routes>
                        {createRoutes(routes)}
                        <Route
                          path="*"
                          element={<Navigate to="home" replace />}
                        />
                      </Routes>
                    </>
                  </Box>
                </Grid2>
                <Grid2
                  item
                  sx={{
                    width: "100%",
                  }}
                >
                  <FooterPage />
                </Grid2>
              </Grid2>
            </Grid2>
          </Grid2>
          <Box
            sx={{
              width: "100%",
              position: "fixed",
              bottom: "20px",
              right: "20px",
              zIndex: 2000,
            }}
          >
            <HelpButtonContact />
          </Box>
        </Container>
      </>
    );
  };

  const render = () => {
    if (login) {
      return AdminPage();
    } else {
      return <Navigate to="/auth" replace />;
    }
  };

  return render();
};

export default Admin;
