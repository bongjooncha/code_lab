import ApiEffect from "./Effect/ApiEffect";
import ApiQuery from "./Query/ApiQuery";
import styles from "./style/index.module.css";

const QueryEffect = () => {
  return (
    <div className={styles.mainContainer}>
      <h1 style={{ marginLeft: "1.5%", marginBottom: "0" }}>
        useEffect & useQuery 비교
      </h1>
      <br />
      <div className={styles.headContainer}>
        <div className={styles.contentsContainer}>
          <div className={styles.container}>
            <ApiEffect array={[]} />
          </div>

          <div className={styles.container}>
            <ApiQuery refetchOnWindowFocus={false} />
          </div>
        </div>
        <div className={styles.textContainer} style={{ marginTop: "-20px" }}>
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
            <li>
              useEffect는 처음 랜더링 되는 순간, 그리고 만일 배열[] 안에 값이
              있고 그 값이 변경되면 실행되며 안에 있는 fetchDataHandler가
              실행된다. "다시 요청"을 크릭할 경우 useEffect가 실행 되는것이 아닌
              fetchDataHandler만 실행이 된다.
            </li>
            <li>
              Query를 사용할 경우 api를 요청할 때 fetchDataHandler만 사용하는
              것이 아닌 Query를 통해서 fetchDatahandler를 불러온다. 이는 query를
              통해 cash에 값을 저장하기 때문이다.
            </li>
            <li>
              useEffect의 경우 cash에 데이터를 저장시키지 않기 때문에 새롭게
              요청할 때 해당 값이 비어 UI에서 매끄럽지 못한것을 볼 수 있다.
              하지만 query를 사용할 경우 cash에 데이터를 저장시키기 때문에
              새롭게 데이터를 요청할때 UI가 자연스럽게 연결되는 것을 볼 수 있다.
            </li>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QueryEffect;
