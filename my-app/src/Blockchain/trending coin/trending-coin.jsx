import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
export default function TrendingCoin(props) {
  let DarkMode = {
    backgroundColor: "#280B45",
    color: "#fff",
  };
  const responsiveSettings = {
    0: {
      items: 2,
    },
    580: {
      items: 3,
    },
  };
  const [coins, SetCoin] = React.useState([]);
  React.useEffect(() => {
    fetch("https://api.coingecko.com/api/v3/search/trending")
      .then((res) => res.json())
      .then((data) => SetCoin(data.coins));
  }, [coins]);

  function coin_detail_popUp(e) {
    props.setPopup((prevState) => !prevState);
  }
  let coin = coins.map((coin) => {
    return (
      <div
        className="coin_wrapper"
        key={coin.item.id}
        style={props.theme == true ? DarkMode : null}
        onClick={coin_detail_popUp}
      >
        <img src={coin.item.large} alt="" width="100" className="mb-2" />
        <p className="coin-name">
          {coin.item.name} ({coin.item.symbol})
        </p>
      </div>
    );
  });

  return (
    <div className="trending-coins text-center">
      <AliceCarousel
        mouseTracking
        infinite
        autoPlayInterval={1000}
        animationDuration={1500}
        disableDotsControls
        disableButtonsControls
        responsive={responsiveSettings}
        autoPlay
      >
        {coin}
      </AliceCarousel>
    </div>
  );
}
