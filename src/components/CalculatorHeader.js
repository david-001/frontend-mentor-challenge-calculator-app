import "./CalculatorHeader.css";

const CalculatorHeader = () => {
  return (
    <div className="calc-header center">
      <span className={"calc-txt"}>calc</span>
      <div>
        <div className={"theme center"}>
          <span className={"theme-txt"}>THEME</span>
          <div className={"theme-radio_btn center"}>
            <input id="on" name="contact" type="radio" />
            <input id="na" name="contact" type="radio" />
            <input id="off" name="contact" type="radio" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalculatorHeader;
