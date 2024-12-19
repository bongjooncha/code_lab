import { Link } from "react-router-dom";
import styles from "./style.module.css";
const NavBar = () => {
  return (
    <div className={styles.NavBar}>
      <Link to="/">Home</Link>
      <Link to="/count">Count(useState, zustand)</Link>
      <Link to="/getAPI">getAPI(useEffect, query)</Link>
    </div>
  );
};

export default NavBar;
