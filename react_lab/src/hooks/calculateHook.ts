import { useState, useMemo } from "react";

function expensiveCalculation(numbers: number[]) {
  for (let i = 0; i < 1000000000; i++) {}
  console.log("expensiveCalculation 실행");
  return numbers.reduce((acc, cur) => acc + cur, 0);
}

export function useNoMemoCalculation() {
  const [numbers, setNumbers] = useState<number[]>([]);
  const [addNumber, setAddNumber] = useState("");
  const sum = expensiveCalculation(numbers);
  const addNums = () => {
    setNumbers([...numbers, parseInt(addNumber)]);
    setAddNumber("");
  };
  return { numbers, addNumber, setAddNumber, addNums, sum };
}

export function useMemoCalculation() {
  const [numbers, setNumbers] = useState<number[]>([]);
  const [addNumber, setAddNumber] = useState("");
  const sum = useMemo(() => {
    console.log("useMemo: expensiveCalculation 실행");
    return expensiveCalculation(numbers);
  }, [numbers]);
  const addNums = () => {
    console.log("addNums 호출");
    setNumbers([...numbers, parseInt(addNumber)]);
    setAddNumber("");
  };
  return { numbers, addNumber, setAddNumber, addNums, sum };
}
