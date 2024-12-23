import { useEffect, useState, useRef } from "react";
import { connectWebSocket, disconnectWebSocket } from "api/websocket";
import { QueryClient } from "react-query";
import { TickerData } from "types/ticker";

const queryClient = new QueryClient();
const TICKER_CODES = ["BTC", "ETH", "SOL", "XRP", "USDT", "USDC"];

export const useWebSocketPrice = () => {
  const [data, setData] = useState<{ [key: string]: TickerData }>({});
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
        ws.send(message);
      };

      ws.onmessage = async (event) => {
        try {
          const dataText = await event.data.text();
          const parsedData: TickerData = JSON.parse(dataText);
          setData((prevData) => ({
            ...prevData,
            [parsedData.code]: parsedData,
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

  return {
    data,
    selectedCode,
    handleCodeChange,
    count: countRef.current,
    TICKER_CODES,
  };
};
