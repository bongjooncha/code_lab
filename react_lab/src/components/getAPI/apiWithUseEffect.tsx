import { fetchData } from "api/upbitapi";
import { useEffect, useRef, useState } from "react";
import { MarketData } from "types/coinAPI";

const ApiWithUseEffect = () => {
  const [data, setData] = useState<MarketData[]>([]);
  const countRef = useRef(0);
  const fetchDataHandler = () => {
    fetchData("KRW-BTC").then((data) => setData(data));
  };

  useEffect(() => {
    fetchDataHandler();
  }, []);

  countRef.current++;

  return (
    <div>
      <div>
        <h2>upbit bitcoin price(useEffect)</h2>
        <div>랜더링 된 횟수(0 시작) : {countRef.current}</div>
        <button onClick={fetchDataHandler}>다시 요청</button>
        <div>
          {data.length > 0 ? (
            data.map((item) => (
              <div key={item.market}>
                <div>{item.trade_time}</div>
                {item.market}:{" "}
                {new Intl.NumberFormat("ko-KR").format(item.trade_price)} 원
              </div>
            ))
          ) : (
            <div>데이터를 불러오는 중...</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ApiWithUseEffect;
