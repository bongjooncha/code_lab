import CountButton from "components/countButton";
import SumNums from "components/sumNums";
import { useStateCountButton, useLetCountButton } from "hooks/countButtonHook";
import { useNoMemoCalculation, useMemoCalculation } from "hooks/calculateHook";

import "./index.css";

export default function Count() {
  return (
    <div className="mainContainer">
      <h1>useState, LET</h1>
      <div className="mid_container">
        <div className="container">
          <h2>useState Count</h2>
          <CountButton {...useStateCountButton()} />
        </div>
        <div className="container">
          <h2>LET Count</h2>
          <CountButton {...useLetCountButton()} />
        </div>
        <div className="container txt">
          useState의 경우 count가 증가할 때 마다
          <br /> rerender가 발생함
          <br />
          <br />
          LET의 경우 count가 증가할 때 마다
          <br /> rerender가 발생하지 않고
          <br /> 값만 변경됨 (console 확인)
        </div>
      </div>

      <h1>useMemo</h1>
      <div className="mid_container">
        <div className="container">
          <h2>useState Count</h2>
          <SumNums {...useNoMemoCalculation()} />
        </div>
        <div className="container">
          <h2>useMemo Count</h2>
          <SumNums {...useMemoCalculation()} />
        </div>
        <div className="container txt"></div>
      </div>
    </div>
  );
}
