import { fetchData } from "api/upbitapi";
import { useState, useEffect } from "react";
import { MarketData } from "types/coinAPI";

export const apiWithEffect = (array: string[] | null) => {
  const [data, setData] = useState<MarketData[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [countUseEffect, setCountUseEffect] = useState(0);

  function fetchDataHandler() {
    setIsLoading(true);
    fetchData("KRW-BTC")
      .then((data) => {
        setData(data);
      })
      .finally(() => setIsLoading(false));
  }

  useEffect(() => {
    fetchDataHandler();
    setCountUseEffect((prevCount) => prevCount + 1);
  }, [array]);

  return { data, isLoading, refetch: fetchDataHandler, countUseEffect };
};
