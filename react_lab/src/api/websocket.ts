import { QueryClient } from "react-query";

let ws: WebSocket | null = null;

export const connectWebSocket = (
  url: string,
  queryKey: string,
  queryClient: QueryClient
) => {
  if (ws) {
    ws.close();
  }

  ws = new WebSocket(url);

  ws.onmessage = (event) => {
    const parsedData = JSON.parse(event.data);
    queryClient.setQueryData(queryKey, parsedData);
  };

  ws.onerror = (error) => {
    console.error("WebSocket error:", error);
  };

  ws.onclose = () => {
    ws = null;
    console.log("WebSocket connection closed");
  };
};

export const disconnectWebSocket = () => {
  if (ws) {
    ws.close();
    ws = null;
  }
};
