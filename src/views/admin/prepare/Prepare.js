import React, { useEffect, useState } from "react";
import withLoading from "../../../components/hoc/WithLoading";

const Prepare = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      setData("missing");
    }, 2000);
  }, []);

  const RenderPreparePage = () => {
    return <div>Prepare</div>;
  };

  const DataDisplayLoading = withLoading(RenderPreparePage);

  return <DataDisplayLoading isLoading={isLoading} data={data} />;
};

export default Prepare;
