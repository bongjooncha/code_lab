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
    </div>
  );
}

export default SumNums;
