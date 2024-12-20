import ApiEffect from "./Effect/ApiEffect";
import ApiQuery from "./Query/ApiQuery";
import styles from "./style/index.module.css";

const QueryEffect = () => {
  return (
    <div className={styles.mainContainer}>
      <h1 style={{ marginLeft: "1.5%", marginBottom: "0" }}>
        useEffect & useQuery 비교
      </h1>
      <div className={styles.headContainer}>
        <div className={styles.contentsContainer}>
          <div className={styles.container}>
            <ApiEffect array={[]} />
          </div>

          <div className={styles.container}>
            <ApiQuery refetchOnWindowFocus={false} />
          </div>
        </div>
        <div className={styles.textContainer}>
          <div>
            {" "}
            <h4 style={{ marginBottom: "0" }}>
              useEffect와 Query 모두 컴포넌트가 마운트 될때 기본적으로 실행된다.
              하지만 랜더링 되는 횟수는 다르다.
            </h4>
            <br />
            <li>
              useEffect의 경우 처음 랜더링이 된 이후, useEffect가 실행이 되면
              다시 한번 랜더링이 실행된다. 이후 내부 함수인 fetchDataHandler가
              실행이 되며 3번의 랜더링이 진행되게 된다.
            </li>
            <li>
              useQuery는 컴포넌트가 처음 랜더링 될때 Query가 바로 실행된다.
              그리고 정보를 받아오는 과정에서 랜더링이 되기 때문에 2번만
              랜더링이 진행된다.
            </li>
          </div>
          <br />
          <div>
            <h4 style={{ marginBottom: "0" }}> useEffect, query API 요청</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QueryEffect;
