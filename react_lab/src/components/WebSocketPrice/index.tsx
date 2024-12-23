import { useRef } from "react";
import { TickerData } from "types/ticker";

const TICKER_CODES = ["BTC", "ETH", "SOL", "XRP", "USDT", "USDC"];

const WebSocketPrice = (data: TickerData) => {
  const countRef = useRef(0);
  countRef.current++;
  return (
    <div>
      <h1>WebSocketPrice</h1>
      <div>
        <strong>랜더링 된 횟수(0 시작) : {countRef.current}</strong>
      </div>
      <table>
        <thead>
          <tr>
            <th>타임스탬프</th>
            <th>코드</th>
            <th>현재가</th>
            <th>변동율</th>
            <th>거래량</th>
          </tr>
        </thead>
        <tbody>
          {/* {["KRW-BTC", "KRW-ETH"].map((code) => {
            const item = data[code];
            if (!item) return null;
            return (
              <tr key={code}>
                <td>{new Date(item.timestamp).toLocaleString()}</td>
                <td>{item.code}</td>
                <td>{item.trade_price.toLocaleString()}</td>
                <td>{item.change}</td>
                <td>{(item.change_rate * 100).toFixed(2)}%</td>
                <td>{item.trade_volume}</td>
              </tr>
            );
          })} */}
        </tbody>
      </table>
    </div>
  );
};

export default WebSocketPrice;
