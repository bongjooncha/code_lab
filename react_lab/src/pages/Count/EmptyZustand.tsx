import { useRef, memo } from "react";
import useStore from "store/zustandButton";
import styles from "./style/index.module.css";

const EmptyZustand = () => {
  const { count, addCount } = useStore();
  const countRef = useRef(0);
  countRef.current++;
  return (
    <div className={styles.container}>
      <h2>Zustand store 구독</h2>
      <div>
        <strong>랜더링 된 횟수(0 시작) : {countRef.current}</strong>
      </div>
      <br />
      <div>추가적으로 memo도 사용함</div>
    </div>
  );
};

export default memo(EmptyZustand);
