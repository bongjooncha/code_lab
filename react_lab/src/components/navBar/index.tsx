import { Link } from "react-router-dom";
import "./style.css";
const NavBar = () => {
  return (
    <div className="nav_bar">
      <Link to="/">Home</Link>
      <Link to="/count">Count(useState, zustand)</Link>
      <Link to="/getAPI">getAPI(useEffect, query)</Link>
    </div>
  );
};

export default NavBar;
