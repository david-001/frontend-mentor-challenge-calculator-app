import "./Screen.css";

const Screen = (props) => {
  const { theme } = props;
  let class_name = "screen screen-numpad";

  if (theme === "theme1") {
    class_name = `${class_name} theme1-screen`;
  } else if (theme === "theme2") {
    class_name = `${class_name} theme2-screen`;
  } else if (theme === "theme3") {
    class_name = `${class_name} theme3-screen`;
  }

  return <div className={`${class_name}`}>{props.children}</div>;
};

export default Screen;
