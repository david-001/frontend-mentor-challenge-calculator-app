import "./Calculator";
import Screen from "./Screen";
import NumpadContainer from "./NumpadContainer";

const Calculator = () => {
  return (
    <div>
      <Screen className="screen-numpad" />
      <NumpadContainer />
    </div>
  );
};

export default Calculator;
