import React, { useCallback, useState } from "react";
import Title from "./Title";
import Count from "./Count";
import Button from "./Button";

const ParentCompForMemo = () => {
  const [age, setAge] = useState(0);
  const [salary, setSalary] = useState(700);

  const incrementAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);

  const incrementSalary = useCallback(() => {
    setSalary(salary + 1);
  }, [salary]);

  return (
    <div>
      <Title />
      <Count text={"age"} number={age} />
      <Button clickHandler={incrementAge}>increment Age</Button>
      <Count text={"salary"} number={salary} />
      <Button clickHandler={incrementSalary}>increment salary</Button>
    </div>
  );
};

export default React.memo(ParentCompForMemo);
