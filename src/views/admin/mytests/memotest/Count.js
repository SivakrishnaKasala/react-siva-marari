import React from "react";

const Count = ({ text, number }) => {
  console.log(`${text} rendered`);
  return (
    <div>
      <h3>
        {text} :{number}
      </h3>
    </div>
  );
};

export default React.memo(Count);
