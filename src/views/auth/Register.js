import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  FormControl,
  FormLabel,
  Grid2,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import useForm from "./userForm";

const Register = () => {
  const [login, setLogin] = useState(false);
  const [register, setRegister] = useState(true);

  //custom hook
  const { values, handleChange, resetForm } = useForm({
    email: "",
    password: "",
  });

  const renderRegisterPage = () => {
    return (
      <>
        <Grid2 container>
          <Grid2 item>
            <Typography>Register</Typography>
          </Grid2>
          <Grid2 item>
            <Card>
              <CardHeader
                subheader={
                  <>
                    <Box>
                      <Typography>Register</Typography>
                    </Box>
                  </>
                }
              />
              <CardContent>
                <form>
                  <Grid2 container>
                    <Grid2 item>
                      <Grid2 container>
                        <FormControl>
                          <FormLabel>Email</FormLabel>
                          <TextField
                            type="text"
                            value={values.email}
                            onChange={handleChange}
                          />
                        </FormControl>
                        <FormControl>
                          <FormLabel>Password</FormLabel>
                          <TextField
                            type="password"
                            value={values.password}
                            onChange={handleChange}
                          />
                        </FormControl>
                      </Grid2>
                    </Grid2>
                    <Grid2 item>
                      <Button variant="contained" type="submit">
                        SIGN UP
                      </Button>
                    </Grid2>
                  </Grid2>
                </form>
              </CardContent>
            </Card>
          </Grid2>
        </Grid2>
      </>
    );
  };

  const render = () => {
    if (login) {
      return <Navigate to="/login" />;
    }
    if (register) {
      return renderRegisterPage();
    } else {
      return renderRegisterPage();
    }
  };

  return render();
};

export default Register;
