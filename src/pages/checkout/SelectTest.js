import { Box, Button, Container, Typography } from "@mui/material";
import React, { useState } from "react";
import Grid from "@mui/material/Grid2";
import HeaderCheckout from "../../components/header/checkout/HeaderCheckout";
import Checkout from "./Checkout";

const SelectTest = () => {
  const [selectItem, setSelectItem] = useState(true);

  return (
    <>
      <Container
        maxWidth="xl"
        sx={{
          width: "100%",
          padding: "0px!important",
        }}
      >
        <Grid container size={12}>
          {/* header */}
          <Grid
            sx={{
              width: "100%",
            }}
          >
            <HeaderCheckout />
          </Grid>
          {/* main content */}
          <Grid
            sx={{
              width: "100%",
            }}
          >
            <Checkout
              selectItem={selectItem}
              setSelectItem={setSelectItem}
              title="Choose a test option"
              subTitle="Buy now and take it any time in the next 21 days"
              special="BEST VALUE"
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default SelectTest;
