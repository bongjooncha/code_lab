import { fetchData } from "api/upbitapi";
import { MarketData } from "types/coinAPI";
import { useState } from "react";
import { useQuery } from "react-query";

export const useApiWithQuery = (refetchOnWindowFocus: boolean) => {
  const [countQuery, setCountQuery] = useState(0);
  const { data, isLoading, refetch } = useQuery<MarketData[]>(
    `marketData_${refetchOnWindowFocus}`,
    () => fetchData("KRW-BTC"),
    {
      onSuccess: () => setCountQuery((prevCount) => prevCount + 1),
      refetchOnWindowFocus: refetchOnWindowFocus,
    }
  );
  return { data, isLoading, refetch, countQuery };
};

export const useApiWithQueryUpdate2sec = () => {
  const [countQuery, setCountQuery] = useState(0);
  const { data, isLoading, refetch } = useQuery<MarketData[]>(
    `marketData_2sec`,
    () => fetchData("KRW-BTC"),
    {
      onSuccess: () => setCountQuery((prevCount) => prevCount + 1),
      refetchOnWindowFocus: false,
      refetchInterval: 2000,
    }
  );
  return { data, isLoading, refetch, countQuery };
};
