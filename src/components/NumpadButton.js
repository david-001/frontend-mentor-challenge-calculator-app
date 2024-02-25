import "./NumpadButton.css";

const NumpadButton = (props) => {
  const { value, onClick } = props;

  let class_name = "button";

  if (value === "DEL") {
    class_name = "button special del";
  }
  if (value === "RESET") {
    class_name = "button special reset";
  }
  if (value === "=") {
    class_name = "button special equal";
  }

  return (
    <button className={class_name} onClick={onClick}>
      {value}
    </button>
  );
};

export default NumpadButton;
