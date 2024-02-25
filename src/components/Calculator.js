import React, { useEffect, useState } from "react";
import "./Calculator.css";
import Screen from "../Screen";
import NumpadContainer from "./NumpadContainer";

const Calculator = () => {
  const [ans, setAns] = useState("399,981");

  const calc = () => {
    // switch
  };

  return (
    <div>
      <Screen>{ans}</Screen>
      <NumpadContainer />
    </div>
  );
};

export default Calculator;
