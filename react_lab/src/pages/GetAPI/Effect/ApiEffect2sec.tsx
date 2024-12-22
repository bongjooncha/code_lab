import GetAPI from "components/getAPI";
import { useApiWithEffect2sec } from "hooks/getAPIHooks/hookApiWithEffect";

const ApiEffect2sec = () => {
  const { data, isLoading, refetch, countUseEffect } = useApiWithEffect2sec();
  return (
    <GetAPI
      using1={`useEffect[], setInterval: 2000`}
      using2="useEffect"
      data={data}
      isLoading={isLoading}
      refetch={refetch}
      count={countUseEffect}
    />
  );
};

export default ApiEffect2sec;
