import React from "react";
import TrendingCoin from "./trending-coin";
export default function Trend(props) {
  let DarkMode = {
    backgroundColor: "#280B45",
  };
  let darkThemeColor = {
    color: props.theme == true ? "#fff" : "#000",
  };
  return (
    <div
      className="container shadow rounded mt-4 trends-wrapper p-3 mt-5"
      style={props.theme == true ? DarkMode : null}
    >
      <div
        className="trends-title d-flex align-items-center"
        style={darkThemeColor}
      >
        <i
          className="fas fa-arrow-trend-up"
          style={{ margin: "0 15px 0 20px" }}
        ></i>
        Trending Coin
      </div>

      <div className="trending-coin-list mt-4 mb-4">
        <TrendingCoin
          theme={props.theme}
          setPopup={props.setPopup}
          popUp={props.popUp}
        />
      </div>
    </div>
  );
}
