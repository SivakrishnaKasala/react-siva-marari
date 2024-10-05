import { Box, CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";

const Institutions = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {isLoading ? (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <div>Institutions</div>
      )}
    </>
  );
};

export default Institutions;
