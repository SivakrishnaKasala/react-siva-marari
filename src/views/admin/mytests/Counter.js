import { Button, Typography } from "@mui/material";
import React from "react";

const Counter = ({ count, changeCount }) => {
  return (
    <div>
      <Typography>{count}</Typography>
      <Button variant="contained" onClick={() => changeCount()}>
        Increase Count
      </Button>
    </div>
  );
};

export default Counter;
