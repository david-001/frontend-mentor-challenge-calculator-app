import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";
import Screen from "./components/Screen/Screen";
import NumpadButton from "./components/NumpadButton/NumpadButton";
import NumpadContainer from "./components/NumpadContainer/NumpadContainer";
import CalculatorHeader from "./components/CalculatorHeader/CalculatorHeader";

const App = () => {
  const [displayTxt, setDisplayTxt] = useState("");
  const [theme, setTheme] = useState("theme1");

  const radioButtonHandler = (thme) => {
    setTheme(thme);
  };

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
        try {
          setDisplayTxt(eval(displayTxt));
        } catch (e) {
          setDisplayTxt("Error");
        }
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
      theme={theme}
      onClick={(e) => {
        buttonClickHandler(e, button);
      }}
    />
  ));

  let class_name = ``;
  if (theme === "theme1") {
    class_name = `${class_name} theme1-body`;
  } else if (theme === "theme2") {
    class_name = `${class_name} theme2-body`;
  } else if (theme === "theme3") {
    class_name = `${class_name} theme3-body`;
  }

  return (
    <div className={`${class_name} center-body`}>
      <div>
        <CalculatorHeader theme={theme} setTheme={radioButtonHandler} />
        <Screen theme={theme}>{displayTxt}</Screen>
        <NumpadContainer theme={theme}>{buttons}</NumpadContainer>
      </div>
    </div>
  );
};

export default App;
