import React, { useState } from "react";
import SideBar from "../../components/sidebar/SideBar";
import { Box, Container } from "@mui/material";
import Button from "../../views/admin/mytests/memotest/Button";
import { Navigate, Route, Routes } from "react-router-dom";
import { routes } from "../../routes";

const AdminPage = () => {
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

  return (
    <div>
      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          width: "100%",
          padding: "12px",
          margin: "10px",
          height: "100vh",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            // height: "100vh",
            // flexDirection: "column",
          }}
        >
          <Box
            sx={{
              width: "25%",
              // display: "flex",
              // alignItems: "center",
              // justifyContent: "flex-start",
              // borderRight: "1px solid #dbdee1",
            }}
          >
            <SideBar />
          </Box>
          <Box
            xs={6}
            sx={{
              width: "75%",
              // height: "100vh",
              // overflowY: "auto",
              padding: "20px",
            }}
          >
            <Button variant="contained" onClick={() => setLogin(false)}>
              go back to login
            </Button>
            <Box>
              <Box
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
              </Box>
              <Box
                item
                sx={{
                  width: "100%",
                }}
              >
                <FooterPage />
              </Box>
            </Box>
          </Box>
        </Box>
        {/* <Box
            sx={{
              width: "100%",
              position: "fixed",
              bottom: "20px",
              right: "20px",
              zIndex: 2000,
            }}
          >
            <HelpButtonContact />
          </Box> */}
      </Container>
    </div>
  );
};

export default AdminPage;
