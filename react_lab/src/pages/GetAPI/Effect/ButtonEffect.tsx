import CountButton from "components/countButton";
import { useStateCountButton } from "hooks/countButtonHook";
import GetAPI from "components/getAPI";
import { useApiWithEffect } from "hooks/getAPIHooks/hookApiWithEffect";
import { useMemo } from "react";

const ButtonEffect = () => {
  const { count, addCount } = useStateCountButton();
  const stableArray = useMemo(() => [count], [count]);
  const { data, isLoading, refetch, countUseEffect } =
    useApiWithEffect(stableArray);
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <GetAPI
        using1={`useEffect[count]`}
        using2="useEffect"
        data={data}
        isLoading={isLoading}
        refetch={refetch}
        count={countUseEffect}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: "60px",
        }}
      >
        <h4 style={{ marginBottom: "0" }}>별도의 count 버튼(배열 의존성)</h4>
        <CountButton count={count} addCount={addCount} />
      </div>
    </div>
  );
};

export default ButtonEffect;
