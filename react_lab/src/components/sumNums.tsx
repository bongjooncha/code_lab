import { useRef } from "react";

interface SumNumsProps {
  numbers: number[];
  addNumber: string;
  setAddNumber: (value: string) => void;
  addNums: () => void;
  sum: number;
}

function SumNums({
  addNumber,
  setAddNumber,
  addNums,
  numbers,
  sum,
}: SumNumsProps) {
  const countRef = useRef(0);
  countRef.current++;
  return (
    <div>
      <input
        type="text"
        value={addNumber}
        onChange={(e) => setAddNumber(e.target.value)}
      ></input>
      <button onClick={addNums}>Add Number</button>
      <h2>Result: {numbers.join(", ")}</h2>
      <h2>Sum: {sum}</h2>
      <br />
      <div>
        <strong>랜더링 된 횟수(0 시작) : {countRef.current}</strong>
      </div>
    </div>
  );
}

export default SumNums;
