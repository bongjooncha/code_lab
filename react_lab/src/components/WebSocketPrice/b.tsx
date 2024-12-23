import { connectWebSocket, disconnectWebSocket } from "api/websocket";
import { QueryClient } from "react-query";
import { useEffect, useState, useRef } from "react";
import { TickerData } from "types/ticker";

const queryClient = new QueryClient();
const TICKER_CODES = ["BTC", "ETH", "SOL", "XRP", "USDT", "USDC"];

const WebSocketPrice = () => {
  const [data, setData] = useState<{ [key: string]: TickerData }>({}); // 상태를 객체로 변경
  const [selectedCode, setSelectedCode] = useState<string[]>(["USDT"]);
  const countRef = useRef(0);
  countRef.current++;
  useEffect(() => {
    const ws = connectWebSocket(
      "wss://api.upbit.com/websocket/v1",
      "upbitwebsocket",
      queryClient
    );

    if (ws) {
      ws.onopen = () => {
        const message = JSON.stringify([
          { ticket: "test example" },
          { type: "ticker", codes: selectedCode.map((code) => `KRW-${code}`) },
          { format: "DEFAULT" },
        ]);
        console.log("message", message);
        ws.send(message);
      };

      ws.onmessage = async (event) => {
        try {
          // Blob을 텍스트로 변환
          const dataText = await event.data.text();
          const parsedData: TickerData = JSON.parse(dataText);
          setData((prevData) => ({
            ...prevData,
            [parsedData.code]: parsedData, // 각 코드별로 최신 데이터 업데이트
          }));
          console.log("parsedData", parsedData);
        } catch (error) {
          console.error("데이터 파싱 오류:", error);
        }
      };
    }

    return () => {
      disconnectWebSocket();
    };
  }, [selectedCode]);

  const handleCodeChange = (code: string) => {
    setSelectedCode((prevSelectedCodes) => {
      if (prevSelectedCodes.includes(code)) {
        return prevSelectedCodes.filter((c) => c !== code);
      }
      return [...prevSelectedCodes, code];
    });
  };

  return (
    <div style={{ backgroundColor: "white", padding: "20px" }}>
      <h1>WebSocketPrice</h1>
      <div>
        <strong>랜더링 된 횟수(0 시작) : {countRef.current}</strong>
      </div>
      <div>
        {TICKER_CODES.map((code) => (
          <label key={code}>
            <input
              type="checkbox"
              checked={selectedCode.includes(code)}
              onChange={() => handleCodeChange(code)}
            />
            {code}
          </label>
        ))}
      </div>
      <div>{selectedCode.join(", ")}의 정보 받아오는 중</div>
      {Object.keys(data).length > 0 ? (
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th style={tableHeaderStyle}>타임스탬프</th>
              <th style={tableHeaderStyle}>코드</th>
              <th style={tableHeaderStyle}>현재가</th>
              <th style={tableHeaderStyle}>변동율</th>
            </tr>
          </thead>
          <tbody>
            {TICKER_CODES.map((code) => `KRW-${code}`).map((code) => {
              const item = data[code];
              if (!item) return null;
              return (
                <tr key={code}>
                  <td style={tableCellStyle}>
                    {new Date(item.timestamp).toLocaleString()}
                  </td>
                  <td style={tableCellStyle}>{code.replace("KRW-", "")}</td>
                  <td style={tableCellStyle}>
                    {item.trade_price.toLocaleString()} 원
                  </td>
                  <td style={tableCellStyle}>
                    {(item.change_rate * 100).toFixed(2)}%
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <p>데이터를 기다리는 중...</p>
      )}
    </div>
  );
};

const tableHeaderStyle: React.CSSProperties = {
  border: "1px solid #ddd",
  padding: "8px",
  backgroundColor: "#f2f2f2",
  textAlign: "left",
};

const tableCellStyle: React.CSSProperties = {
  border: "1px solid #ddd",
  padding: "8px",
};

export default WebSocketPrice;
