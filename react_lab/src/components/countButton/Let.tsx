export default function State() {
  let count = 0;
  const handleClick = () => {
    count += 1;
    console.log(count);
  };
  return (
    <div>
      <div>
        {count}
        <button onClick={handleClick}>Increment</button>
      </div>
    </div>
  );
}
