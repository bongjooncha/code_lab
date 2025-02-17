import { fetchData } from "api/upbitapi";
import { MarketData } from "types/coinAPI";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

export const useApiWithQuery = (refetchOnWindowFocus: boolean) => {
  const [countQuery, setCountQuery] = useState(0);
  const { data, isLoading, refetch } = useQuery<MarketData[]>({
    queryKey: [`marketData_${refetchOnWindowFocus}`],
    queryFn: () => fetchData("KRW-BTC"),
    // onSuccess: () => setCountQuery((prevCount) => prevCount + 1),
    refetchOnWindowFocus: refetchOnWindowFocus,
  });
  return { data, isLoading, refetch, countQuery };
};

export const useApiWithQueryUpdate2sec = () => {
  const [countQuery, setCountQuery] = useState(0);
  const { data, isLoading, refetch } = useQuery<MarketData[]>({
    queryKey: [`marketData_2sec`],
    queryFn: () => fetchData("KRW-BTC"),
    // onSuccess: setCountQuery((prevCount) => prevCount + 1),
    refetchOnWindowFocus: false,
    refetchInterval: 2000,
  });
  return { data, isLoading, refetch, countQuery };
};
