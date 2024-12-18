import NavBar from "components/navBar";
import ApiWithUseEffect from "components/getAPI/apiWithUseEffect";
import ApiWithQuery from "components/getAPI/apiWithQuery";

const GetAPI = () => {
  return (
    <div>
      <NavBar />
      <div style={{ backgroundColor: "white" }}>
        <div className="mid_continer">
          <ApiWithUseEffect />
        </div>
      </div>
      <div style={{ backgroundColor: "white" }}>
        <div className="mid_continer">
          <ApiWithQuery />
        </div>
      </div>
    </div>
  );
};

export default GetAPI;
