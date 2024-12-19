import ApiQuery from "./ApiQuery";
import ApiQuery2sec from "./ApiQuery2sec";
import styles from "../style/index.module.css";

const QueryTest = () => {
  return (
    <div>
      <div className={styles.mainContainer}>
        <h1 style={{ marginLeft: "5%", marginBottom: "0" }}>useQuery</h1>
        <div className={styles.midContainer}>
          <ApiQuery refetchOnWindowFocus={true} />
        </div>

        <div className={styles.midContainer}>
          <ApiQuery refetchOnWindowFocus={false} />
        </div>

        <div className={styles.midContainer}>
          <ApiQuery2sec />
        </div>

        <div className={styles.midContainer}>
          query 사용시 자동으로 데이터가 관리가 된다.
          <br />
          <br />
          refetchOnWindowFocus 가 true 일때 화면으로 다시 돌아올 때마다 자동
          리랜더링 된다.
          <br />
          <br />
          refetchOnWindowFocus 가 false 일때는 화면 바뀜으로 리랜더링 되지
          않는다.
          <br />
          <br />
          refetchInterval 를 사용하면 2초마다 자동으로 데이터가 업데이트 된다.
        </div>
      </div>
    </div>
  );
};

export default QueryTest;
