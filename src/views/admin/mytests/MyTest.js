import { Grid2 } from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";

import CounterHandler from "./CounterHandler";
import ErrorBoundaryCounter from "./ErrorBoundaryCounter";
import withLoading from "../../../components/hoc/WithLoading";
import ParentCompForMemo from "./memotest/ParentCompForMemo";

const MyTest = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState("");

  const a = 123;
  const b = 567;

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      setData("here is the loaded data");
    }, 10000);
  }, []);

  const sumToEle = (a, b) => {
    console.log("siva calculate");
    return a + b;
  };

  const sum = useMemo(() => sumToEle(a, b), [a, b]);

  const RenderLoadingBeforeContent = () => {
    return (
      <>
        <Grid2 container>
          <Grid2 item>
            <ErrorBoundaryCounter>
              <CounterHandler />
            </ErrorBoundaryCounter>
          </Grid2>
          <Grid2 item>{sum}</Grid2>

          <Grid2 item>
            <ParentCompForMemo />
          </Grid2>
        </Grid2>
      </>
    );
  };

  const DataDisplayWithLoading = withLoading(RenderLoadingBeforeContent);

  const render = () => {
    return <DataDisplayWithLoading isLoading={isLoading} data={data} />;
  };

  return render();
};

export default MyTest;
