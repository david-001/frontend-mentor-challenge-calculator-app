import "./NumpadContainer.css";
import NumpadButton from "./NumpadButton";

const NumpadContainer = () => {
  return (
    <div className="container">
      <NumpadButton>7</NumpadButton>
      <NumpadButton>8</NumpadButton>
      <NumpadButton>9</NumpadButton>
      <NumpadButton>DEL</NumpadButton>
      <NumpadButton>4</NumpadButton>
      <NumpadButton>5</NumpadButton>
      <NumpadButton>6</NumpadButton>
      <NumpadButton>+</NumpadButton>
      <NumpadButton>1</NumpadButton>
      <NumpadButton>2</NumpadButton>
      <NumpadButton>3</NumpadButton>
      <NumpadButton>-</NumpadButton>
      <NumpadButton>.</NumpadButton>
      <NumpadButton>0</NumpadButton>
      <NumpadButton>/</NumpadButton>
      <NumpadButton>x</NumpadButton>
      <NumpadButton>RESET</NumpadButton>
      <NumpadButton>=</NumpadButton>
    </div>
  );
};

export default NumpadContainer;
