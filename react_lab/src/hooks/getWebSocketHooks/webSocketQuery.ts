import { useQuery, useQueryClient } from "react-query";
import { useEffect, useRef } from "react";
import { connectWebSocket, disconnectWebSocket } from "api/websocket";
import { TickerData } from "types/ticker";

const TICKER_CODES = ["BTC", "ETH", "SOL", "XRP", "USDT", "USDC"];

export const useWebSocketQuery = () => {
  const queryClient = useQueryClient();
  const wsRef = useRef<WebSocket | null>(null);
  const countRef = useRef(0);
  countRef.current++;

  useEffect(() => {
    wsRef.current = connectWebSocket(
      "wss://api.upbit.com/websocket/v1",
      "upbitwebsocket",
      queryClient
    );

    const ws = wsRef.current;

    if (ws) {
      ws.onopen = () => {
        const message = JSON.stringify([
          { ticket: "test example" },
          { type: "ticker", codes: TICKER_CODES.map((code) => `KRW-${code}`) },
          { format: "DEFAULT" },
        ]);
        console.log("message", message);
        ws.send(message);
      };

      ws.onmessage = async (event) => {
        try {
          const dataText = await event.data.text();
          const parsedData: TickerData = JSON.parse(dataText);
          queryClient.setQueryData(["tickerData", parsedData.code], parsedData);
          console.log("parsedData", parsedData);
        } catch (error) {
          console.error("데이터 파싱 오류:", error);
        }
      };
    }

    return () => {
      disconnectWebSocket();
    };
  }, [queryClient]);

  const handleCodeChange = (code: string) => {
    // 코드 변경 로직을 추가하려면 여기에 구현
    // 예: 선택된 코드 리스트를 업데이트하고, 웹소켓에 재구독 메시지 전송 등
  };

  return {
    count: countRef.current,
    TICKER_CODES,
    handleCodeChange,
  };
};
