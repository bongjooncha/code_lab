import { Link } from "react-router-dom";
import styles from "./style.module.css";
const NavBar = () => {
  return (
    <div className={styles.NavBar}>
      <Link to="/count">Count(useState, zustand)</Link>
      <Link to="/getAPI">getAPI(useEffect, query)</Link>
      <Link to="/webSocketPrice">websocket(useEffect, query)</Link>
      <Link to="/webSocketsDepth">multi websockets</Link>
    </div>
  );
};

export default NavBar;
