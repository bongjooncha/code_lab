import ApiQuery from "./ApiQuery";
import ApiQuery2sec from "./ApiQuery2sec";
import styles from "../style/index.module.css";

const QueryTest = () => {
  return (
    <div className={styles.mainContainer}>
      <h1 style={{ marginLeft: "1.5%", marginBottom: "0" }}>useQuery</h1>
      <div className={styles.headContainer}>
        <div className={styles.contentsContainer}>
          <div className={styles.container}>
            <ApiQuery refetchOnWindowFocus={true} />
          </div>
          <div className={styles.container}>
            <ApiQuery refetchOnWindowFocus={false} />
          </div>
          <div className={styles.container}>
            <ApiQuery2sec />
          </div>
        </div>
        <div className={styles.textContainer}>
          <li>
            query 사용시 rendering 되는 횟수는 2회이다. 이는 로딩되는 중에 1번,
            로딩 완료후 1번 총 2번 랜더링 되기 때문이다.
          </li>
          <br />
          <li>
            refetchOnWindowFocus 가 true 일때 화면으로 다시 돌아올 때마다 자동
            리랜더링 된다.
          </li>
          <br />
          <li>
            refetchOnWindowFocus 가 false 일때는 화면 바뀜으로 리랜더링 되지
            않는다.
          </li>
          <br />
          <li>
            refetchInterval 를 사용하면 2초마다 자동으로 데이터가 업데이트
            된다.페이지가 focus 되지 않을때는 <br /> 데이터가 업데이트 되지
            않는다.
          </li>
        </div>
      </div>
    </div>
  );
};

export default QueryTest;
