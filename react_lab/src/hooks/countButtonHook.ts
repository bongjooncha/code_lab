import { useState } from "react";

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
