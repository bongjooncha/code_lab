import { useRef } from "react";
import { MarketData } from "types/coinAPI";

interface APIprops {
  using1: string;
  using2: string;
  data: MarketData[] | undefined;
  isLoading: boolean;
  refetch: () => void;
  countQuery: number;
}

const GetAPI = ({
  using1,
  using2,
  data,
  refetch,
  isLoading,
  countQuery,
}: APIprops) => {
  const countRef = useRef(0);
  countRef.current++;
  return (
    <div>
      <h2>upbit bit coin price({using1})</h2>
      <div>랜더링 된 횟수(0 시작) : {countRef.current}</div>
      <div>
        {using2} 실행된 횟수 : {countQuery}
      </div>
      <button onClick={refetch}>다시 요청</button>
      <div>
        {isLoading ? (
          <div>데이터를 불러오는 중...</div>
        ) : (
          data?.map((item) => (
            <div key={item.market}>
              <div>마지막 거래 시간 : {item.trade_time}</div>
              {item.market}:{" "}
              {new Intl.NumberFormat("ko-KR").format(item.trade_price)} 원
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default GetAPI;
