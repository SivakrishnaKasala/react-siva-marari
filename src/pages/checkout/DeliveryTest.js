import { Container } from "@mui/material";
import React, { useState } from "react";
import Grid from "@mui/material/Grid2";
import HeaderCheckout from "../../components/header/checkout/HeaderCheckout";
import Checkout from "./Checkout";

const DeliveryTest = () => {
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
              title="Choose your results delivery speed"
              special="4X FASTER"
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default DeliveryTest;
