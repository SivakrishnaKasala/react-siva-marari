import React, { useEffect, useState } from "react";
import Counter from "./Counter";

const CounterHandler = () => {
  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount((count) => count + 1);
  };

  useEffect(() => {
    if (count === 5) {
      throw new Error("missing component");
    }
  }, [count]);

  return (
    <div>
      <Counter count={count} changeCount={handleCount} />
    </div>
  );
};

export default CounterHandler;
