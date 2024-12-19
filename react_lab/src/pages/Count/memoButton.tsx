import { memo, useRef } from "react";
import CountButton from "components/countButton";
import { useStateCountButton } from "hooks/countButtonHook";
import styles from "./style/index.module.css";

const MemoButton = memo(() => {
  const countRef = useRef(0);
  countRef.current++;
  return (
    <div className={styles.midContainer}>
      <div className={styles.container}>
        <h2>memo Count 컴퍼넌트</h2>
        <CountButton {...useStateCountButton()} />
      </div>
      <div className={styles.container + " " + styles.txt}>
        memo를 사용할 경우 부모가 리랜더링 되더라도 리랜더링 되지 않음
        <br />
        memo Count 컴퍼넌트 랜더링이 독립적으로 이루어짐
        <br />
        <br />
        <br />
        <div
          style={{
            fontSize: "13px",
            fontStyle: "italic",
            textAlign: "right",
            color: "darkblue",
          }}
        >
          최외각 index.tsx React.StrictMode 사용시 <br />
          랜더링 횟수가 2번 사용됨
        </div>
      </div>
    </div>
  );
});

export default MemoButton;
