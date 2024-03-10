import "./NumpadButton.css";

const NumpadButton = (props) => {
  const { value, onClick, theme } = props;

  let class_name = "button";

  if (theme === "theme1") {
    class_name = `${class_name} theme1`;
    if (value === "DEL") {
      class_name = `${class_name} theme1-special special theme1-del`;
    }
    if (value === "RESET") {
      class_name = `${class_name} theme1-special special theme1-reset reset`;
    }
    if (value === "=") {
      class_name = `${class_name} theme1-special special theme1-equal equal`;
    }
  } else if (theme === "theme2") {
    class_name = `${class_name} theme2`;
    if (value === "DEL") {
      class_name = `${class_name} theme2-special special theme2-del`;
    }
    if (value === "RESET") {
      class_name = `${class_name} theme2-special special theme2-reset reset`;
    }
    if (value === "=") {
      class_name = `${class_name} theme2-special special theme2-equal equal`;
    }
  } else if (theme === "theme3") {
    class_name = `${class_name} theme3`;
    if (value === "DEL") {
      class_name = `${class_name} theme3-special special theme3-del`;
    }
    if (value === "RESET") {
      class_name = `${class_name} theme3-special special theme3-reset reset`;
    }
    if (value === "=") {
      class_name = `${class_name} theme3-special special theme3-equal equal`;
    }
  }

  return (
    <button className={`${class_name}`} onClick={onClick}>
      {value}
    </button>
  );
};

export default NumpadButton;
