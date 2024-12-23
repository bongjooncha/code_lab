import { useApiWithQueryUpdate2sec } from "hooks/getAPIHooks/hookApiWithQuerys";
import GetAPI from "components/GetAPI";

const ApiQuery2sec = () => {
  const { data, isLoading, refetch, countQuery } = useApiWithQueryUpdate2sec();
  return (
    <GetAPI
      using1={`Query, refetchOnWindowFocus: false, refetchInterval: 2000`}
      using2="Query"
      data={data}
      isLoading={isLoading}
      refetch={refetch}
      count={countQuery}
    />
  );
};
export default ApiQuery2sec;
