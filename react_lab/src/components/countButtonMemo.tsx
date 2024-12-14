import { memo, useRef } from "react";

interface ButtonProps {
  count: number;
  addCount: () => void;
}
const CountButtonMemo = memo(({ count, addCount }: ButtonProps) => {
  const countRef = useRef(0);
  countRef.current++;
  return (
    <div>
      <div>
        {count} <button onClick={addCount}>Increment</button>
      </div>
      <br />
      <div>
        <strong>랜더링 된 횟수(0 시작) : {countRef.current}</strong>
      </div>
    </div>
  );
});

export default CountButtonMemo;
