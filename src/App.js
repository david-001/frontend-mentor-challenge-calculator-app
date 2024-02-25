import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";
import Screen from "./components/Screen";
import NumpadButton from "./components/NumpadButton";
import NumpadContainer from "./components/NumpadContainer";
import CalculatorHeader from "./components/CalculatorHeader";

const App = () => {
  const [displayTxt, setDisplayTxt] = useState("");
  const [operator, setOperator] = useState("");

  const buttonClickHandler = (e, button) => {
    e.preventDefault();
    switch (button) {
      case "DEL":
        setDisplayTxt(displayTxt.slice(0, -1));
        break;
      case "RESET":
        setDisplayTxt("");
        break;
      case "x":
        setDisplayTxt(displayTxt + "*");
        break;
      case "=":
        setDisplayTxt(eval(displayTxt));
        break;
      default:
        setDisplayTxt(displayTxt + button);
        break;
    }
  };

  const buttonValues = [
    "7",
    "8",
    "9",
    "DEL",
    "4",
    "5",
    "6",
    "+",
    "1",
    "2",
    "3",
    "-",
    ".",
    "0",
    "/",
    "x",
    "RESET",
    "=",
  ];

  const buttons = buttonValues.map((button) => (
    <NumpadButton
      key={button}
      value={button}
      onClick={(e) => {
        buttonClickHandler(e, button);
      }}
    />
  ));

  return (
    <div>
      <CalculatorHeader />
      <Screen>{displayTxt}</Screen>
      <NumpadContainer>{buttons}</NumpadContainer>
    </div>
  );
};

export default App;
