import GetAPI from "components/getAPI";
import { useApiWithEffect } from "hooks/getAPIHooks/hookApiWithEffect";

interface ApiEffectProps {
  array: string[] | null;
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
      countQuery={countUseEffect}
    />
  );
};

export default ApiEffect;
