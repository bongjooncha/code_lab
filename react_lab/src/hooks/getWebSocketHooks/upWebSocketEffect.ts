import { useEffect, useState } from "react";
import { connectWebSocket, disconnectWebSocket } from "api/websocket";
import { QueryClient } from "react-query";
import { UpTickerData } from "types/ticker";

const queryClient = new QueryClient();
const TICKER_CODES = ["BTC", "ETH", "SOL", "XRP", "USDT", "USDC"];

export const useUpWebSocketPrice = () => {
  const [data, setData] = useState<{ [key: string]: UpTickerData }>({});
  const [selectedCode, setSelectedCode] = useState<string[]>(["USDT"]);
  const [countEffect, setCountEffect] = useState(0);

  useEffect(() => {
    const ws = connectWebSocket(
      "wss://api.upbit.com/websocket/v1",
      "upbitwebsocket",
      queryClient
    );
    setCountEffect((current) => current + 1);

    if (ws) {
      ws.onopen = () => {
        const message = JSON.stringify([
          { ticket: "test example" },
          { type: "ticker", codes: selectedCode.map((code) => `KRW-${code}`) },
          { format: "DEFAULT" },
        ]);
        ws.send(message);
        console.log("소켓 연결: ", ws.readyState);
      };

      ws.onmessage = async (event) => {
        try {
          const dataText = await event.data.text();
          const parsedData: TickerData = JSON.parse(dataText);
          setData((prevData) => ({
            ...prevData,
            [parsedData.code]: parsedData,
          }));
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
    TICKER_CODES,
    countEffect,
  };
};
