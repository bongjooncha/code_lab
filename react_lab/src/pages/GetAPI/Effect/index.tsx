import ApiEffect from "./ApiEffect";
import ApiEffect2sec from "./ApiEffect2sec";
import ButtonEffect from "./ButtonEffect";
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
          <div className={styles.container}>
            <ApiEffect2sec />
          </div>
          <div className={styles.container}>
            <ButtonEffect />
          </div>
        </div>
        <div className={styles.textContainer}>
          <div>
            <h4 style={{ marginBottom: "0" }}>
              useEffect 내부 setInterval을 사용한 경우
            </h4>
            <li>
              useEffect를 통해서 정보를 받아오고 이를 받아온 정보를 주기적으로
              사용하기 위해 useEffect 안에 setInterval을 사용한다. setInterval은
              useEffect가 처음 실행될 때 실행되며, 설정한 주기에 따라 내부
              함수가 실행된다. 이때 api를 불러오는 함수이기에 렌더링 횟수는
              2회가 된다.
            </li>
          </div>
          <br />
          <div>
            <h4 style={{ marginBottom: "0" }}>
              의존성 배열에 count를 넣은 경우
            </h4>
            <li>
              의존성 배열에 count를 넣은 경우는 count가 변경될때 마다
              useEffect가 실행된다는 것이다. 따라서 "다시 요청" 버튼을 누르면
              useEffect가 실행된 횟수는 증가하지 않는다.
            </li>
            <li>
              하지만 "Increment"버튼을 누를 경우 의존성 배열 안에 있는 count가
              증가하며 useEffect 실행 횟수가 증가한다.
            </li>
            <br />
            <strong style={{ color: "darkred" }}>
              의존성 배열을 선택할때 주의할 점은 의존성 배열에 있는 값이
              변경될때 마다 useEffect가 실행된다는 것이다. 따라서 의존성 배열에
              있는 값이 변경될때 마다 렌더링이 되는 것이다.
            </strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Effect;
