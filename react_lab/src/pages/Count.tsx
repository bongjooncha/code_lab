import State from "components/countButton/State";
import Let from "components/countButton/Let";

import "./index.css";

export default function Count() {
  return (
    <div className="mainContainer">
      <div className="container">
        <h1>useState Count</h1>
        <State />
        <br />
        <div>
          count가 증가할때 마다
          <br /> rerender가 발생함
        </div>
      </div>
      <div className="container">
        <h1>LET Count</h1>
        <Let />
        <br />
        <div>
          count가 증가할때 마다
          <br /> rerender가 발생하지 않고
          <br /> 값만 변경됨 (console 확인)
        </div>
      </div>
    </div>
  );
}
