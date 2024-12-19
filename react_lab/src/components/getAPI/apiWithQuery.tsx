import { useQuery } from "react-query";
import { fetchData } from "api/upbitapi";
import { useRef, useState } from "react";
import { MarketData } from "types/coinAPI";
import { count } from "console";

const ApiWithQuery = () => {
  const countRef = useRef(0);
  const [countQuery, setCountQuery] = useState(0);

  const { data, isLoading, refetch } = useQuery<MarketData[]>(
    "marketData",
    () => fetchData("KRW-BTC"),
    {
      onSuccess: () => setCountQuery(countQuery + 1),
      refetchOnWindowFocus: false, // 창이 포커스될 때 자동으로 다시 가져오지 않음
    }
  );

  countRef.current++;

  return (
    <div>
      <h2>upbit bitcoin price(useQuery)</h2>
      <div>랜더링 된 횟수(0 시작) : {countRef.current}</div>
      <div>query 실행된 횟수 : {countQuery}</div>
      <button onClick={() => refetch()}>다시 요청</button>
      <div>
        {isLoading ? (
          <div>데이터를 불러오는 중...</div>
        ) : (
          data?.map((item) => (
            <div key={item.market}>
              <div>시간 :{item.trade_time}</div>
              {item.market}:{" "}
              {new Intl.NumberFormat("ko-KR").format(item.trade_price)} 원
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ApiWithQuery;
