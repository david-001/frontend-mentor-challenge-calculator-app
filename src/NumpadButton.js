import "./NumpadButton.css";

const NumberButton = (props) => {
  if (props.children === "DEL") {
    return <button className="button special del">{props.children}</button>;
  }
  if (props.children === "RESET") {
    return <button className="button special reset">{props.children}</button>;
  }
  if (props.children === "=") {
    return <button className="button special equal">{props.children}</button>;
  }

  return (
    <button className="button" onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default NumberButton;
