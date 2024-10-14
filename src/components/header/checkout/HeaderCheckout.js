import React from "react";
import Grid from "@mui/material/Grid2";
import { Box } from "@mui/material";

const HeaderCheckout = () => {
  return (
    <>
      <Grid
        container
        size={12}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "24px 32px",
        }}
      >
        <Grid>
          <Box
            component="img"
            src="https://dy8n3onijof8f.cloudfront.net/static/images/wp/46f35eb9512318e6a76c.svg"
            alt="backward"
          />
        </Grid>
        <Grid>
          <Box
            component="img"
            src="https://dy8n3onijof8f.cloudfront.net/static/images/wp/557e9cb1ce105779cdb5.svg"
            alt="website"
          />
        </Grid>
        <Grid>
          <Box
            component="img"
            src="https://dy8n3onijof8f.cloudfront.net/static/images/wp/f35c8b8c8d5276355ca3.svg"
            alt="close"
          />
        </Grid>
      </Grid>
    </>
  );
};

export default HeaderCheckout;
