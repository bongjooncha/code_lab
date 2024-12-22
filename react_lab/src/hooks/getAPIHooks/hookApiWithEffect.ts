import { fetchData } from "api/upbitapi";
import { useState, useEffect } from "react";
import { MarketData } from "types/coinAPI";

export const useApiWithEffect = (array: number[] | null) => {
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
    console.log(array);
  }, [array]);

  return { data, isLoading, refetch: fetchDataHandler, countUseEffect };
};

export const useApiWithEffect2sec = () => {
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

    const interval = setInterval(() => {
      fetchDataHandler();
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return { data, isLoading, refetch: fetchDataHandler, countUseEffect };
};
