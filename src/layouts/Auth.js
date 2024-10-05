import React, { useState } from "react";

import { Box, Button, Grid2, Typography } from "@mui/material";
import { Navigate, NavLink, Route, Routes } from "react-router-dom";
import { routes } from "../routes";

const Auth = () => {
  const [login, setLogin] = useState(false);

  const [loginPage, setLoginPage] = useState(false);
  const [registerPage, setRegisterPage] = useState(false);
  const authPage = () => {
    const createRoutes = (routes) => {
      return routes.map((route) => {
        if (route.layout === "/auth") {
          return <Route path={`${route.path}`} element={route.component} />;
        }
        return null;
      });
    };
    return (
      <div>
        <Typography>Login page</Typography>
        <Grid2 container>
          <Grid2 item>
            <NavLink
              to="login"
              style={({ isActive }) => ({
                border: isActive
                  ? "2px solid #dbdee1"
                  : "1px solid transparent",
                backgroundColor: isActive && "#f1f4f6",
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
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: "16px",
                }}
              >
                Login
              </Typography>
            </NavLink>
          </Grid2>
          <Grid2 item>
            <NavLink
              to="register"
              style={({ isActive }) => ({
                border: isActive
                  ? "2px solid #dbdee1"
                  : "1px solid transparent",
                backgroundColor: isActive && "#f1f4f6",
                display: "flex",
                flexDirection: "row",
                padding: "10px",
                color: isActive ? "#001836" : "#67737e",
                // fontWeight: "bold",

                textDecorationLine: "none",
                textAlign: "center",
                alignItems: "center",
              })}
            >
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: 700,
                }}
              >
                Register
              </Typography>
            </NavLink>
          </Grid2>
        </Grid2>

        <Button variant="contained" onClick={() => setLogin(true)}>
          go to Home page
        </Button>
        <Box>
          <Routes>
            {createRoutes(routes)}
            <Route path="*" element={<Navigate to="login" />} />
          </Routes>
        </Box>
      </div>
    );
  };

  const render = () => {
    if (login) {
      return <Navigate to="/admin" replace />;
    }

    return authPage();
  };
  return render();
};

export default Auth;
