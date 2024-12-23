import { QueryClient } from "react-query";

let ws: WebSocket | null = null;

export const connectWebSocket = (
  url: string,
  queryKey: string,
  queryClient: QueryClient
): WebSocket | null => {
  if (ws) {
    ws.close();
  }

  ws = new WebSocket(url);

  ws.onopen = () => {
    console.log("WebSocket connected");
    ws!.send(JSON.stringify({ type: "init", payload: {} }));
  };

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

  return ws;
};

export const disconnectWebSocket = () => {
  if (ws) {
    ws.close();
    ws = null;
  }
};
