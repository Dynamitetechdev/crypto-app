import React from "react";
import AllCoin from "../coins/AllCoin";
export default function Search(props) {
  let DarkMode = {
    backgroundColor: "#280B45",
    color: "#fff",
  };
  const [searchTerm, setSearchTerm] = React.useState("");
  function onChange(event) {
    setSearchTerm((prevTerm) => {
      return event.target.value;
    });
  }
  return (
    <div className="container search-coin">
      <div class="form-outline mb-4">
        <input
          type="search"
          class="form-control"
          style={props.theme == true ? DarkMode : null}
          id="search"
          onChange={onChange}
        />
        <label
          style={props.theme == true ? DarkMode : null}
          for="exampleInputEmail1"
        >
          Search Coins
        </label>
      </div>
      <div id="datatable">
        <AllCoin
          theme={props.theme}
          searchTerm={searchTerm}
          setPopup={props.setPopup}
        />
      </div>
    </div>
  );
}
