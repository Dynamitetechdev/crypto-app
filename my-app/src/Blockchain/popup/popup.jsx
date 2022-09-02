import React from "react";

export default function Popup(props) {
  function closePopUp() {
    props.setPopup((prevState) => !prevState);
  }
  return (
    <div className="">
      <div className="popup_wrapper">
        <div className="popup shadow rounded center">
          <div className="close" onClick={closePopUp}>
            <i class="fa fa-times" aria-hidden="true"></i>
          </div>

          <div className="container">
            <div className="coin-detail row">
              <div className="col-md-4 coin-detail-name text-left">
                <p className="mb-1">Crypto:</p>
                <div className="crypto-name d-flex">
                  <h1 className="m-0"></h1>
                </div>
              </div>
              <div className="col-md-4 coin-detail-price text-left">
                <p className="mb-1">Price:</p>
                <div className="coin-price d-flex">
                  <h1 className="m-0"></h1>
                </div>
              </div>
              <div className="col-md-4 coin-detail-price text-left">
                <p className="mb-1">Market Cap:</p>
                <div className="coin-market-cap d-flex">
                  <h1 className="m-0"></h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
