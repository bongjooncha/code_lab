import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import queryClient from "query";

export function useStateCountButton() {
  const [count, setCount] = useState(0);

  const addCount = () => {
    setCount(count + 1);
    console.log(`useState count: ${count}`);
  };
  return { count, addCount };
}

export function useLetCountButton() {
  let count: number = 0;
  const addCount = () => {
    count += 1;
    console.log(`let count: ${count}`);
  };
  return { count, addCount };
}

export function useCountQuery() {
  const count = 0;
  const { data } = useQuery({
    queryKey: ["count"],
    queryFn: () => count + 1,
  });
  return { count };
}
