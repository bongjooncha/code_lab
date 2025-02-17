import { useQuery } from "@tanstack/react-query";
const QueryButton = () => {
  const count = 0;
  const { data } = useQuery({
    queryKey: ["count"],
    queryFn: () => count + 1,
  });
  return <div>{data}</div>;
};

export default QueryButton;
