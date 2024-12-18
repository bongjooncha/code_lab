import { useRef } from "react";
import NavBar from "components/navBar";
import styles from "./style/index.module.css";

import CountButton from "components/button/countButton";
import { useStateCountButton } from "hooks/countButtonHook";

import MemoButton from "./memoButton";
import UseStateLet from "./UseStateLet";
import ZustandButton from "./ZustandButton";
import EmptyZustand from "./EmptyZustand";

export default function Count() {
  const countRef = useRef(0);
  countRef.current++;
  return (
    <div>
      <NavBar />
      <div className={styles.mainContainer}>
        <h1>memo 사용</h1>
        <div className={styles.midContainer}>
          <div className={styles.container}>
            <h2>부모 컴퍼넌트에 작성된 useState button</h2>
            <CountButton {...useStateCountButton()} />
          </div>
          <MemoButton />
        </div>

        <UseStateLet />

        <h1>zustand 사용</h1>
        <div className={styles.midContainer}>
          <EmptyZustand />
          <ZustandButton />
        </div>
      </div>
    </div>
  );
}
