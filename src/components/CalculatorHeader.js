import { useState } from "react";
import "./CalculatorHeader.css";

const CalculatorHeader = (props) => {
  const { theme, setTheme } = props;
  const [selectedOption, setSelectedOption] = useState("theme1");
  let class_name = "calc-header center";
  let radio_grp_class = "theme-radio-btn-grp center";

  if (theme === "theme1") {
    class_name = `${class_name} theme1-calc-header`;
    radio_grp_class = `${radio_grp_class} theme1-radio-btn-grp-color`;
  } else if (theme === "theme2") {
    class_name = `${class_name} theme2-calc-header`;
    radio_grp_class = `${radio_grp_class} theme2-radio-btn-grp-color`;
  } else if (theme === "theme3") {
    class_name = `${class_name} theme3-calc-header`;
    radio_grp_class = `${radio_grp_class} theme3-radio-btn-grp-color`;
  }

  const handleOptionChange = (e) => {
    const theme = e.target.value;
    setTheme(theme);
    setSelectedOption(theme);
  };

  return (
    <div className={`${class_name}`}>
      <span className={"calc-txt"}>calc</span>
      <div className={"theme-radio-btn-section"}>
        <div className={"theme center"}>
          <div className={"theme-txt"}>THEME</div>
          <div>
            <div className={"theme-radio-lbl center"}>
              <span>1</span>
              <span>2</span>
              <span>3</span>
            </div>
            <div className={`${radio_grp_class}`}>
              <label className={"theme1-radio-btn"}>
                <input
                  type="radio"
                  value="theme1"
                  checked={selectedOption === "theme1"}
                  onChange={handleOptionChange}
                />
                <span class="checkmark"></span>
              </label>
              <label className={"theme2-radio-btn"}>
                <input
                  type="radio"
                  value="theme2"
                  checked={selectedOption === "theme2"}
                  onChange={handleOptionChange}
                />
                <span class="checkmark"></span>
              </label>
              <label className={"theme3-radio-btn"}>
                <input
                  type="radio"
                  value="theme3"
                  checked={selectedOption === "theme3"}
                  onChange={handleOptionChange}
                />
                <span class="checkmark"></span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalculatorHeader;
