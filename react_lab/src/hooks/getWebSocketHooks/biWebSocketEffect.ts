import { useEffect, useState } from "react";
import { connectWebSocket, disconnectWebSocket } from "api/websocket";
import { QueryClient } from "react-query";
import { TickerData, BiTickerData } from "types/ticker";

const queryClient = new QueryClient();
const TICKER_CODES = ["btc", "eth", "sol", "xrp", "usdc"];
const transFormBinanceData = (data: BiTickerData): TickerData => {
  return {
    code: data.s,
    price: parseFloat(data.p),
    timestamp: data.E,
  };
};

export const useBiWebSocketPrice = () => {
  const [data, setData] = useState<{ [key: string]: TickerData }>({});
  const [selectedCode, setSelectedCode] = useState<string[]>(["usdc"]);
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
          params: ["btc@markPrice@1s"],
          id: "adf",
        });
        ws.send(message);
        console.log("binance 소켓 연결: ", ws.readyState);
      };

      ws.onmessage = async (event) => {
        try {
          const dataText = await event.data;
          const parsedData: BiTickerData = JSON.parse(dataText);
          setData((prevData) => ({
            ...prevData,
            [parsedData.s]: transFormBinanceData(parsedData),
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
