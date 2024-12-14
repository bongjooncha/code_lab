import CountButton from "components/countButton";
import CountButtonMemo from "components/countButtonMemo";
import SumNums from "components/sumNums";
import { useStateCountButton, useLetCountButton } from "hooks/countButtonHook";
import { useNoMemoCalculation, useMemoCalculation } from "hooks/calculateHook";
import useStore from "store/zustandButton";

import "./index.css";

export default function Count() {
  // const { count, increase } = useStore();

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
          <br /> 값만 변경됨
          <br /> (console 확인)
        </div>
      </div>
      {/* 
      <h1>zustand 사용</h1>
      <div className="mid_container">
        <div className="container">
          <h2>zustand Count</h2>
          <CountButton count={count} addCount={increase} />
        </div>
        <div className="container">
          zustand count 값 : <strong>{count}</strong>
        </div>
        <div className="container txt">
          zustand 사용시 store에 저장 되어있는 값이 변경되며
          <br /> 컴포넌트가 재렌더링 되지 않음
          <br /> (console 확인)
        </div>
      </div> */}

      <h1>memo 사용</h1>
      <div className="mid_container">
        <div className="container">
          <h2>memo Count 컴퍼넌트</h2>
          <CountButtonMemo {...useStateCountButton()} />
        </div>
      </div>

      {/* <h1>useMemo</h1>
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
      </div> */}
    </div>
  );
}
