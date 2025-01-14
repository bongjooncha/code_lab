import { WebSocketProps } from "types/websocket";

class WebSocketManager {
  private sockets: Map<string, WebSocket> = new Map();

  connect({ url, queryKey, queryClient }: WebSocketProps): WebSocket {
    if (this.sockets.has(queryKey)) {
      this.disconnect(queryKey);
    }

    const ws = new WebSocket(url);

    ws.onopen = () => {
      console.log(`WebSocket connected: ${queryKey}`);
      ws.send(JSON.stringify({ type: "init", payload: {} }));
    };

    ws.onmessage = (event) => {
      const parsedData = JSON.parse(event.data);
      queryClient.setQueryData([queryKey], parsedData);
    };

    ws.onerror = (error) => {
      console.error(`WebSocket error (${queryKey}):`, error);
    };

    ws.onclose = () => {
      console.log(`WebSocket disconnected: ${queryKey}`);
      this.sockets.delete(queryKey);
    };

    this.sockets.set(queryKey, ws);
    return ws;
  }

  disconnect(queryKey: string): void {
    const ws = this.sockets.get(queryKey);
    if (ws && ws.readyState === WebSocket.OPEN) {
      ws.close();
      this.sockets.delete(queryKey);
      console.log(`WebSocket connection closed: ${queryKey}`);
    }
  }

  disconnectAll(): void {
    this.sockets.forEach((ws, key) => {
      if (ws.readyState === WebSocket.OPEN) {
        ws.close();
        console.log(`WebSocket connection closed: ${key}`);
      }
    });
    this.sockets.clear();
  }
}

const webSocketManager = new WebSocketManager();

export const connectWebSocket = ({
  url,
  queryKey,
  queryClient,
}: WebSocketProps): WebSocket => {
  return webSocketManager.connect({ url, queryKey, queryClient });
};

export const disconnectWebSocket = (queryKey: string): void => {
  webSocketManager.disconnect(queryKey);
};

export const disconnectAllWebSockets = (): void => {
  webSocketManager.disconnectAll();
};
