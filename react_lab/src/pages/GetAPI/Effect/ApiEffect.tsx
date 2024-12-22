import GetAPI from "components/getAPI";
import { useApiWithEffect } from "hooks/getAPIHooks/hookApiWithEffect";

interface ApiEffectProps {
  array: any[] | null;
}

const ApiEffect = ({ array }: ApiEffectProps) => {
  const { data, isLoading, refetch, countUseEffect } = useApiWithEffect(array);
  return (
    <GetAPI
      using1={`useEffect[${array}]`}
      using2="useEffect"
      data={data}
      isLoading={isLoading}
      refetch={refetch}
      count={countUseEffect}
    />
  );
};

export default ApiEffect;
