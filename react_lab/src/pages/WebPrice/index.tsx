import NavBar from "components/NavBar";
import UpWebSocketPrice from "./index.upbit";
import BiWebSocketPrice from "./index.binance";
const WebPrice = () => {
  return (
    <div>
      <NavBar />
      {/* <UpWebSocketPrice /> */}
      <BiWebSocketPrice />
    </div>
  );
};

export default WebPrice;
