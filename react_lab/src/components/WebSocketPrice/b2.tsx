import { connectWebSocket, disconnectWebSocket } from "api/websocket";
import { QueryClient, useQueryClient } from "react-query";
import { useEffect, useState } from "react";
import { TickerData } from "types/ticker";

const queryClient = new QueryClient();

const WebSocketPrice = () => {
  const [data, setData] = useState<{ [key: string]: TickerData }>({}); // 상태를 객체로 변경

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
          { type: "ticker", codes: ["KRW-BTC", "KRW-ETH"] },
          { format: "DEFAULT" },
        ]);
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
        } catch (error) {
          console.error("데이터 파싱 오류:", error);
        }
      };
    }

    return () => {
      disconnectWebSocket();
    };
  }, []);

  return (
    <div style={{ backgroundColor: "white", padding: "20px" }}>
      <h1>WebSocketPrice</h1>
      {Object.keys(data).length > 0 ? (
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th style={tableHeaderStyle}>타임스탬프</th>
              <th style={tableHeaderStyle}>코드</th>
              <th style={tableHeaderStyle}>현재가</th>
              <th style={tableHeaderStyle}>변동</th>
              <th style={tableHeaderStyle}>변동율</th>
              <th style={tableHeaderStyle}>거래량</th>
            </tr>
          </thead>
          <tbody>
            {["KRW-BTC", "KRW-ETH"].map((code) => {
              const item = data[code];
              if (!item) return null;
              return (
                <tr key={code}>
                  <td style={tableCellStyle}>
                    {new Date(item.timestamp).toLocaleString()}
                  </td>
                  <td style={tableCellStyle}>{item.code}</td>
                  <td style={tableCellStyle}>
                    {item.trade_price.toLocaleString()}
                  </td>
                  <td style={tableCellStyle}>{item.change}</td>
                  <td style={tableCellStyle}>
                    {(item.change_rate * 100).toFixed(2)}%
                  </td>
                  <td style={tableCellStyle}>{item.trade_volume}</td>
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
