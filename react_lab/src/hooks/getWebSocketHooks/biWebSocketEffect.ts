import { useEffect, useState } from "react";
import { connectWebSocket, disconnectWebSocket } from "api/websocket";
import { QueryClient } from "react-query";
import { BiTickerData } from "types/ticker";

const queryClient = new QueryClient();
const TICKER_CODES = ["BTC", "ETH", "SOL", "XRP", "USDT", "USDC"];

export const useBiWebSocketPrice = () => {
  const [data, setData] = useState<{ [key: string]: BiTickerData }>({});
  const [selectedCode, setSelectedCode] = useState<string[]>(["USDT"]);
  const [countEffect, setCountEffect] = useState(0);

  useEffect(() => {
    const ws = connectWebSocket(
      "wss://fstream.binance.com/ws",
      "binancewebsocket",
      queryClient
    );
    setCountEffect((current) => current + 1);

    if (ws) {
      ws.onopen = () => {
        const message = JSON.stringify({
          method: "SUBSCRIBE",
          params: ["btcusdt@markPrice"],
          id: "adf",
        });
        ws.send(message);
      };

      ws.onmessage = async (event) => {
        try {
          const dataText = await event.data;
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
    TICKER_CODES,
    countEffect,
  };
};
