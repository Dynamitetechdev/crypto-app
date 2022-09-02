import "./App.css";
import { useState } from "react";
import Header from "./Blockchain/header";
import Trend from "./Blockchain/trending coin/trend";
import Search from "./Blockchain/search-coin/search";
import "bootstrap/dist/css/bootstrap.css";
import Popup from "./Blockchain/popup/popup";
function App() {
  const [theme, setTheme] = useState(false);
  const [popUp, setPopup] = useState(false);

  let bodyTheme = {
    backgroundColor: "#0B0B45",
  };
  return (
    <div className="App" style={theme == true ? bodyTheme : null}>
      <Header setTheme={setTheme} theme={theme} />
      <Trend theme={theme} setPopup={setPopup} popUp={popUp} />
      <Search theme={theme} setPopup={setPopup} />
      {popUp == true ? <Popup setPopup={setPopup} /> : null}
    </div>
  );
}

export default App;
