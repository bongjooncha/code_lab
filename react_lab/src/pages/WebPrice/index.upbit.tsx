import { useRef } from "react";
import { useUpWebSocketPrice } from "hooks/getWebSocketHooks/upWebSocketEffect";
import PriceTable from "components/WebSocketPrice/PriceTable";
import CheckBox from "components/WebSocketPrice/CheckBox";
import style from "./index.module.css";

const UpWebSocketPrice = () => {
  const { data, selectedCode, handleCodeChange, TICKER_CODES, countEffect } =
    useUpWebSocketPrice();
  const countRef = useRef(0);
  countRef.current++;
  return (
    <div className={style.mainContainer}>
      <div className={style.contentsContainer}>
        <h2 style={{ marginTop: "0" }}>업비트 웹소켓</h2>
        <div className={style.countContainer}>
          <strong>랜더링 된 횟수(0 시작) : {countRef.current}</strong>
          <br />
          <strong>Effect 실행 된 횟수(0 시작) : {countEffect}</strong>
        </div>
        <h3 style={{ marginBottom: "0", fontStyle: "italic" }}>
          구독 할 코드 선택
        </h3>
        <CheckBox
          TICKER_CODES={TICKER_CODES}
          selectedCode={selectedCode}
          onCodeChange={handleCodeChange}
        />
        <br />
        <PriceTable data={data} TICKER_CODES={TICKER_CODES} />
      </div>

      <div className={style.txtContainer}>
        upbit 웹소켓의 경우는 구독(subscribe)를 취소하는 기능이 없다. 따라서
        구독을 취소하기 위해서는 연결을 종료하고 다시 필요한 것만 다시
        연결해야한다.
        <br />
        <br />
        이때 웹소켓을 연결 종료 후 바로 연결 할 경우 웹소켓 연결 종료가 이뤄지지
        않아 구독이 유지된다.
        <br />
        <br />
        따라서 웹소켓 연결 종료 후 바로 연결하는 것이 아니라 조금 딜레이를 주어
        웹소켓 연결 종료가 이뤄지도록 해야한다.
      </div>
    </div>
  );
};

export default UpWebSocketPrice;
