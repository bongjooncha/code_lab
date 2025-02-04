import NavBar from "components/NavBar";
import QueryEffect from "./QueryEffect";
import QueryTest from "./Query";
import Effect from "./Effect";

const GetAPI = () => {
  return (
    <div>
      <NavBar />
      <QueryEffect />
      <Effect />
      <QueryTest />
    </div>
  );
};

export default GetAPI;
