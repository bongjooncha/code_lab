import { QueryClient } from "@tanstack/react-query";

export interface WebSocketProps {
  url: string;
  queryKey: string;
  queryClient: QueryClient;
}
