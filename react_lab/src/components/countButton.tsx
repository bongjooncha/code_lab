interface ButtonProps {
  count: number;
  addCount: () => void;
}
export default function CountButton({ count, addCount }: ButtonProps) {
  return (
    <div>
      <div>
        {count} <button onClick={addCount}>Increment</button>
      </div>
    </div>
  );
}
