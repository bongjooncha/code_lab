import CountButton from "components/button/countButton";
import useStore from "store/zustandButton";
import styles from "./style/index.module.css";

const ZustandButton = () => {
  const { count, addCount } = useStore();

  return (
    <>
      <div className={styles.container}>
        <h2>zustand Count</h2>
        <CountButton count={count} addCount={addCount} />
      </div>
      <div className={styles.container + " " + styles.txt}>
        zustand 사용시 store에 저장 되어있는 값이 변경되며
        <br /> 동일한 store를 사용하는 컴포넌트만 재렌더링 됨
      </div>
    </>
  );
};

export default ZustandButton;
