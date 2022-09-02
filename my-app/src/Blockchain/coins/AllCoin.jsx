import React from "react";
import Pagination from "./pagination";

export default function AllCoin(props) {
  const [cryptoCurrency, setCryptoCurrency] = React.useState([]);
  const [serialNum, setSerialNum] = React.useState(0);
  let DarkMode = {
    backgroundColor: "#280B45",
  };
  let darkThemeColor = {
    color: props.theme == true ? "#fff" : "#000",
  };
  React.useEffect(() => {
    // setInterval(() => {
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    )
      .then((res) => res.json())
      .then((data) => setCryptoCurrency(data));
    // }, 1000);
  }, []); // add yodur dependencies - cryptoCurrency
  let allCryptoCurrencyList = cryptoCurrency
    .filter((eachCurrency) => {
      if (props.searchTerm == "") {
        return eachCurrency;
      } else if (
        eachCurrency.name.toLowerCase().includes(props.searchTerm.toLowerCase())
      ) {
        return eachCurrency;
      }
    })
    .map((eachCurrency, index) => (
      <tr
        key={eachCurrency.id}
        onClick={coinDetailPopup}
        style={{ cursor: "pointer" }}
      >
        <td className="p-3" scope="row" style={darkThemeColor}>
          {index + 1}
        </td>
        <td className="p-3 d-flex" style={darkThemeColor}>
          <img
            src={eachCurrency.image}
            alt=""
            width="30"
            style={{ marginRight: "10px" }}
          />
          {eachCurrency.name}
        </td>
        <td className="p-3" style={darkThemeColor}>
          ${eachCurrency.current_price.toLocaleString()}
        </td>
        <td className="p-3" style={{ color: "red" }}>
          {eachCurrency.price_change_percentage_24h.toFixed(2)}
        </td>
        <td className="p-3" style={darkThemeColor}>
          {" "}
          ${eachCurrency.total_volume.toLocaleString()}
        </td>
        <td className="p-3" style={darkThemeColor}>
          {" "}
          ${eachCurrency.market_cap.toLocaleString()}
        </td>
      </tr>
    ));

  //pagination
  const [currentPage, setCurrentPage] = React.useState(1);
  const [postPerPage] = React.useState(10);

  // get current page
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPost = allCryptoCurrencyList.slice(
    indexOfFirstPost,
    indexOfLastPost
  );
  function paginate(pageNumber) {
    setCurrentPage(pageNumber);
  }

  function coinDetailPopup() {
    props.setPopup((prevState) => !prevState);
  }
  return (
    <div
      className="container table-responsive shadow rounded mb-5"
      style={props.theme == true ? DarkMode : null}
    >
      <table className="table table-hover ">
        <thead>
          <tr className="detail-categories ">
            <td className="p-3" style={darkThemeColor}>
              #
            </td>
            <td className="p-3" style={darkThemeColor}>
              Coins
            </td>
            <td className="p-3" style={darkThemeColor}>
              Price
            </td>
            <td className="p-3" style={darkThemeColor}>
              24h
            </td>
            <td className="p-3" style={darkThemeColor}>
              Volume(24h)
            </td>
            <td className="p-3" style={darkThemeColor}>
              Market Cap
            </td>
          </tr>
        </thead>

        <tbody>{currentPost}</tbody>
      </table>
      <Pagination
        postPerPage={postPerPage}
        totalPosts={allCryptoCurrencyList.length}
        paginate={paginate}
      />
    </div>
  );
}
