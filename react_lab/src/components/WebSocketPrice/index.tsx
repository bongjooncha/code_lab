import { connectWebSocket, disconnectWebSocket } from "api/websocket";
import { QueryClient } from "react-query";
import { useEffect } from "react";

const queryClient = new QueryClient();

const WebSocketPrice = () => {
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
    }

    return () => {
      disconnectWebSocket();
    };
  }, []);

  return <div style={{ backgroundColor: "white" }}>WebSocketPrice</div>;
};

export default WebSocketPrice;
