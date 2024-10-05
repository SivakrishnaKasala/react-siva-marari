import React, { useEffect, useState } from "react";
import withLoading from "../../../components/hoc/WithLoading";
import { Navigate } from "react-router-dom";

const Practice = () => {
  const [login, setLogin] = useState(true);

  const [isLoading, setIsLoading] = useState(true);

  const [data, setData] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      setData("data is missing");
    }, 2000);
  }, []);

  const RenderLoadingBeforePractice = () => {
    return <div>Practice</div>;
  };

  const DataDisplayLoading = withLoading(RenderLoadingBeforePractice);
  const renderPracticePage = () => {
    return <DataDisplayLoading isLoading={isLoading} data={data} />;
  };

  const render = () => {
    if (login) {
      return renderPracticePage();
    } else {
      return <Navigate to="/auth" />;
    }
  };
  return render();
};

export default Practice;
