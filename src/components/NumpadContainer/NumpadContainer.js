import "./NumpadContainer.css";

const NumpadContainer = (props) => {
  const { children, theme } = props;

  let class_name = "container";

  if (theme === "theme1") {
    class_name = `${class_name} theme1-container`;
  } else if (theme === "theme2") {
    class_name = `${class_name} theme2-container`;
  } else if (theme === "theme3") {
    class_name = `${class_name} theme3-container`;
  }

  return <div className={`${class_name}`}>{children}</div>;
};

export default NumpadContainer;
