import GetAPI from "components/GetAPI";
import { useApiWithQuery } from "hooks/getAPIHooks/hookApiWithQuerys";

const ApiQuery = ({
  refetchOnWindowFocus,
}: {
  refetchOnWindowFocus: boolean;
}) => {
  const { data, isLoading, refetch, countQuery } =
    useApiWithQuery(refetchOnWindowFocus);
  return (
    <GetAPI
      using1={`Query, refetchOnWindowFocus: ${refetchOnWindowFocus}`}
      using2="Query"
      data={data}
      isLoading={isLoading}
      refetch={refetch}
      count={countQuery}
    />
  );
};
export default ApiQuery;
