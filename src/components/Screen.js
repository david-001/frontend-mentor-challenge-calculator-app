import "./Screen.css";

const Screen = (props) => {
  return <div className={"screen screen-numpad"}>{props.children}</div>;
};

export default Screen;
