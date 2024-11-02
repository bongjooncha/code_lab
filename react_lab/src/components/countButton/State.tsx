import { useState } from "react";

export default function State() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div>
        {count}
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
    </div>
  );
}
