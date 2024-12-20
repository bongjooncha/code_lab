import ApiEffect from "./ApiEffect";
import styles from "../style/index.module.css";

const Effect = () => {
  return (
    <div className={styles.mainContainer}>
      <h1 style={{ marginLeft: "1.5%", marginBottom: "0" }}>useEffect</h1>
      <div className={styles.headContainer}>
        <div className={styles.contentsContainer}>
          <div className={styles.container}>
            <ApiEffect array={[]} />
          </div>
        </div>
        <div className={styles.textContainer}>
          <li>
            useEffect 는 컴포넌트가 마운트 될때 기본적으로 실행된다. 이때
            useQuery와 다르게 처음 렌더링 되는 횟수는 3회인 것을 볼수 있다.
          </li>
        </div>
      </div>
    </div>
  );
};

export default Effect;
