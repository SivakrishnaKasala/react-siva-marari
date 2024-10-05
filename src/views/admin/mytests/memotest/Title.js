import React from "react";

const Title = () => {
  console.log("Title rendered");
  return (
    <div>
      <h1>useCallBack demo && React.memo</h1>
    </div>
  );
};

export default React.memo(Title);
