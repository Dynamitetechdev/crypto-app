import React from "react";

export default function Header(props) {
  function themeHandle() {
    props.setTheme((prevTheme) => !prevTheme);
  }
  let DarkMode = {
    backgroundColor: "#280B45",
    color: "white",
  };
  return (
    <header>
      <div
        style={props.theme == true ? DarkMode : null}
        className="container-fluid shadow rounded d-flex justify-content-between pt-3 pb-3 p-3"
      >
        <div className="logo">Crypto Live Market</div>

        <div
          className="modes"
          onClick={themeHandle}
          style={{ cursor: "pointer" }}
        >
          {props.theme == true ? (
            <i className="fa-solid fa-sun"></i>
          ) : (
            <i className="fa-solid fa-moon"></i>
          )}
        </div>
      </div>
    </header>
  );
}
