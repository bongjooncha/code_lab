import CountButton from "components/button/countButton";
import { useStateCountButton, useLetCountButton } from "hooks/countButtonHook";
import styles from "./style/index.module.css";
const UseStateLet = () => {
  return (
    <>
      <h1>useState, LET</h1>
      <div className={styles.midContainer}>
        <div className={styles.container}>
          <h2>useState Count</h2>
          <CountButton {...useStateCountButton()} />
        </div>
        <div className={styles.container}>
          <h2>LET Count</h2>
          <CountButton {...useLetCountButton()} />
        </div>
        <div className={styles.container + " " + styles.txt}>
          useState의 경우 count가 증가할 때 마다
          <br /> rerender가 발생함
          <br />
          <br />
          LET의 경우 count가 증가할 때 마다
          <br /> rerender가 발생하지 않고
          <br /> 값만 변경됨
          <br /> (console 확인)
        </div>
      </div>
    </>
  );
};

export default UseStateLet;
